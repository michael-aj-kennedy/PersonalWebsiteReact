using PersonalWebsite.Data.Interfaces;
using System.Text.Json.Serialization;

namespace PersonalWebsite.Data.Models
{
    public class Category : ICategory
    {
        /// <inheritdoc/>
        [JsonPropertyName("id")]
        public int Id { get; set; }

        /// <inheritdoc/>
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Indicates that the article list can be overridden.
        /// </summary>
        public bool OverrideArticleList
        {
            get
            {
                return OverrideArticleListCategoryId.GetValueOrDefault() > 0;
            }
        }

        /// <inheritdoc/>
        [JsonPropertyName("overrideArticleListCategoryId")]
        public int? OverrideArticleListCategoryId { get; set; }

        /// <inheritdoc/>
        [JsonPropertyName("articleSource")]
        public string ArticleSource { get; set; } = string.Empty;

        /// <inheritdoc/>
        [JsonPropertyName("default")]
        public bool Default { get; set; }
    }
}
