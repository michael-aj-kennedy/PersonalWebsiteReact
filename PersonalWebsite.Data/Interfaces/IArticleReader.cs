using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface IArticleReader
    {
        /// <summary>
        /// Executes read operation.
        /// </summary>
        /// <param name="articleSummary">Target article</param>
        Task<Article> Read(IArticleSummary articleSummary);
    }
}