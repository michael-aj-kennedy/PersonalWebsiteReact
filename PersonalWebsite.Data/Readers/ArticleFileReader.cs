using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Readers
{
    public class ArticleFileReader : JsonDeserialiser<Article>, IArticleReader
    {
        private readonly string _searchLocation;

        public ArticleFileReader(string searchLocation)
        {
            _searchLocation = searchLocation;
        }

        /// <inheritdoc/>
        public async Task<string> Read(IArticleSummary articleSummary)
        {
            if (!string.IsNullOrWhiteSpace(_searchLocation) &&
                articleSummary != null &&
                !string.IsNullOrWhiteSpace(articleSummary.ArticleDataFile))
            {
                var fileName = $"{_searchLocation.TrimEnd('\\')}\\Articles\\{articleSummary.ArticleDataFile}";
                var fileContent = await ReadFile(fileName);
                return fileContent ?? string.Empty;
            }

            return string.Empty;
        }
    }
}
