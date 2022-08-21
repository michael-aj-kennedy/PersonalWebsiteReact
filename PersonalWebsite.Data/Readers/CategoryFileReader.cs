using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;
using PersonalWebsite.Data.Readers;

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
        public async Task Read(ICategory category)
        {
            if (!string.IsNullOrWhiteSpace(_searchLocation) &&
                category != null && 
                !string.IsNullOrWhiteSpace(category.ArticleSource))
            {
                var fileName = $"{_searchLocation.TrimEnd('\\')}\\Categories\\{category.ArticleSource}";
                var fileContent = await ReadJson(fileName);
                ArticleSummaries = Deserialise(fileContent) ?? new List<ArticleSummary>();
            }
        }

        /// <inheritdoc/>
        public List<ArticleSummary> ArticleSummaries { get; private set; } = new List<ArticleSummary>();
    }
}
