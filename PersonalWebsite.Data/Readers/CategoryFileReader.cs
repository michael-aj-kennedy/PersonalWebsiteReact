using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Readers
{
    /// <summary>
    /// Read category list from JSON.
    /// </summary>
    public class CategoryFileReader : JsonDeserialiser<List<ArticleSummary>>, ICategoryReader
    {
        private readonly string _searchLocation;

        /// <summary>
        /// Create a new instance of CategoryFileReader.
        /// </summary>
        /// <param name="searchLocation">Target search location.</param>
        public CategoryFileReader(string searchLocation)
        {
            _searchLocation = searchLocation;
        }

        /// <inheritdoc/>
        public async Task<List<ArticleSummary>> Read(ICategory category)
        {
            var returnData = new List<ArticleSummary>();

            if (!string.IsNullOrWhiteSpace(_searchLocation) &&
                category != null && 
                !string.IsNullOrWhiteSpace(category.ArticleSource))
            {
                var fileName = $"{_searchLocation.TrimEnd('\\')}\\Categories\\{category.ArticleSource}";
                var fileContent = await ReadFile(fileName);
                returnData = Deserialise(fileContent) ?? new List<ArticleSummary>();
            }

            return returnData
                .OrderBy(s => s.Pinned)
                .ThenByDescending(s => s.Date)
                .ToList();
        }

        /// <inheritdoc/>
        public async Task<ArticleSummary?> GetTopArticleSummary(ICategory category)
        {
            var articleSummaries = await Read(category);

            return articleSummaries
                .FirstOrDefault();
        }
    }
}
