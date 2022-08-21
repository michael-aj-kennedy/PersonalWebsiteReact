using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface IArticleReader
    {
        /// <summary>
        /// Executes read operation.
        /// </summary>
        /// <param name="articleSummary">Target article</param>
        Task Read(IArticleSummary articleSummary);

        /// <summary>
        /// Article content.
        /// </summary>
        Article ArticleContent { get; }
    }
}