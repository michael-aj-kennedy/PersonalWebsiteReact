using PersonalWebsite.Data.Interfaces;
using System.Text.Json.Serialization;

namespace PersonalWebsite.Data.Models
{
    /// <summary>
    /// Article summary.
    /// </summary>
    public class ArticleSummary : IArticleSummary
    {
        /// <inheritdoc/>
        [JsonPropertyName("id")]
        public int Id { get; set; }

        /// <inheritdoc/>
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("title")]
        public string Title { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("summary")]
        public string Summary { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("url")]
        public string Url { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("date")]
        public DateTime? Date { get; set; } = null;

        /// <inheritdoc/>
        [JsonPropertyName("articleDataFile")]
        public string ArticleDataFile { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("pinned")]
        public bool Pinned { get; set; }
    }
}