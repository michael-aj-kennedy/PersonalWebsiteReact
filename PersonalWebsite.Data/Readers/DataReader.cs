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

        public async Task<List<Category>> ReadCategories()
        {
            return await _indexReader.Read();
        }

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

        internal async Task<List<ArticleSummary>?> OverrideCategoryList(Category category)
        {
            if (category.OverrideArticleList)
            {
                var categories = await ReadCategories();
                var overrideCategory = categories.FirstOrDefault(c => c.Id == category.OverrideArticleListCategoryId);
                if (overrideCategory != null)
                {
                    return await _categoryReader.Read(overrideCategory);
                }
            }

            return null;
        }

        internal async Task<CategoryContent> GetCategoryContentResponse(Category category, List<ArticleSummary> articles, ArticleSummary? targetArticle)
        {
            var overrideArticles = await OverrideCategoryList(category);

            return new CategoryContent()
            {
                CategoryId = category.Id,
                CategoryName = category.Name ?? "",
                ArticleSummaries = (overrideArticles ?? articles).ToArray(),
                DefaultArticleId = targetArticle?.Id ?? 0
            };
        }
    }
}
