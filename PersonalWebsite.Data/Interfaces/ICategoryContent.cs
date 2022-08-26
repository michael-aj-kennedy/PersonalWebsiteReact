using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface ICategoryContent
    {
        /// <summary>
        /// Category Id.
        /// </summary>
        int CategoryId { get; set; }

        /// <summary>
        /// Category Name.
        /// </summary>
        string CategoryName { get; set; }

        /// <summary>
        /// Article summaries associated with category.
        /// </summary>
        ArticleSummary[] ArticleSummaries { get; set; }

        /// <summary>
        /// First article to select.
        /// </summary>
        int DefaultArticleId { get; set; }
    }
}
