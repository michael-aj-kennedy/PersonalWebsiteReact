using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Readers
{
    public class DataReader : IDataReader
    {
        private readonly IIndexReader _indexReader;
        private readonly ICategoryReader _categoryReader;
        private readonly IArticleReader _articleReader;

        public DataReader(IIndexReader indexReader, ICategoryReader categoryReader, IArticleReader articleReader)
        {
            _indexReader = indexReader;
            _categoryReader = categoryReader;
            _articleReader = articleReader;
        }

        /// <inheritdoc/>
        public async Task<List<Category>> ReadCategories()
        {
            return await _indexReader.Read();
        }

        /// <inheritdoc/>
        public async Task<CategoryContent> GetCategoryArticles(string search)
        {
            var categories = await _indexReader.Read();
            
            if (categories != null && categories.Any())
            {
                if (!string.IsNullOrWhiteSpace(search))
                {
                    // search category index & find a matching item
                    Category? selectedCategory = categories.FirstOrDefault(c => c.Name.Equals(search, StringComparison.InvariantCultureIgnoreCase));

                    if (selectedCategory != null)
                    {
                        return await GetCategoryContent(selectedCategory);
                    }
                    else
                    {
                        // category was invalid, so URL must be direct to an article (backwards compatibility for older style URLs)
                        var categoryContent = await GetCategoryFromArticleIdentifier(categories, search);
                        if (categoryContent != null)
                        {
                            return categoryContent;
                        }
                    }
                }

                // if we get this far, then default to the first category & first article
                return await GetCategoryContent(categories.First());
            }

            // we shouldn't ever get this far unless the data file is missing
            return new CategoryContent();
        }

        internal async Task<CategoryContent> GetCategoryContent(Category category)
        {
            // we're searching by category, so get the first associated article id (sort pinned then by most recent)
            var categoryArticlesTask = _categoryReader.Read(category);
            var articleSummaryTask = _categoryReader.GetTopArticleSummary(category);

            return await GetCategoryContentResponse(
                category,
                await categoryArticlesTask,
                await articleSummaryTask);
        }

        internal async Task<CategoryContent?> GetCategoryFromArticleIdentifier(List<Category> categories, string articleIdentifier)
        {
            foreach (var category in categories)
            {
                // open associated articles list
                var categoryArticles = await _categoryReader.Read(category) ?? new List<ArticleSummary>();

                // search for associated article by id
                var targetArticle = categoryArticles.FirstOrDefault(a => a.Id.ToString() == articleIdentifier);

                if (targetArticle == null)
                {
                    targetArticle = categoryArticles.FirstOrDefault(a =>
                        a.Title.Replace(" ", "-").Equals(articleIdentifier.Replace(" ", "-"), StringComparison.InvariantCultureIgnoreCase));
                }

                if (targetArticle != null)
                {
                    return await GetCategoryContentResponse(category, categoryArticles, targetArticle);
                }
            }

            return null;
        }

        internal async Task<CategoryContent> GetCategoryContentResponse(Category category, List<ArticleSummary> articles, ArticleSummary? targetArticle)
        {
            var overrideCategory = await GetOverrideCategory(category);
            List<ArticleSummary>? overrideArticles = null;
                
            if (overrideCategory != null)
            {
                overrideArticles = await _categoryReader.Read(overrideCategory);
            }

            return new CategoryContent()
            {
                CategoryId = category.Id,
                CategoryName = category.Name ?? "",
                OverrideArticleList = category.OverrideArticleList,
                ArticleSummaries = (overrideArticles ?? articles).ToArray(),
                DefaultArticleId = targetArticle?.Name?.Replace(" ", "-") ?? "",
                SearchCategoryName = overrideCategory != null && !string.IsNullOrWhiteSpace(overrideCategory.Name)
                    ? overrideCategory.Name
                    : category.Name ?? ""
            };
        }

        internal async Task<Category?> GetOverrideCategory(Category category)
        {
            if (category.OverrideArticleList)
            {
                var categories = await ReadCategories();
                return categories.FirstOrDefault(c => c.Id == category.OverrideArticleListCategoryId);
            }

            return null;
        }

        internal async Task<ArticleSummary?> FindArticleInCategory(string articleIdentifier, Category category)
        {
            // open associated articles list
            var categoryArticles = await _categoryReader.Read(category) ?? new List<ArticleSummary>();

            // search for associated article by id
            var targetArticle = categoryArticles.FirstOrDefault(a => a.Id.ToString() == articleIdentifier);

            if (targetArticle == null)
            {
                targetArticle = categoryArticles.FirstOrDefault(a =>
                    a.Title.Replace(" ", "-").Equals(articleIdentifier.Replace(" ", "-"), StringComparison.InvariantCultureIgnoreCase));
            }

            return targetArticle;
        }

        /// <inheritdoc/>
        public async Task<Article> GetArticle(string articleIdentifier)
        {
            var categories = await _indexReader.Read();
            var article = new Article();

            if (categories != null &&
                categories.Any() &&
                !string.IsNullOrWhiteSpace(articleIdentifier))
            {
                ArticleSummary? summary = null;
                foreach (var category in categories)
                {
                    summary = await FindArticleInCategory(articleIdentifier, category);

                    if (summary != null)
                    {
                        break;
                    }
                }

                if (summary != null)
                {
                    article.Content = await _articleReader.Read(summary);
                    article.Summary = summary;
                }
            }

            return article;
        }
    }
}
