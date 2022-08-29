using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface IArticleReader
    {
        /// <summary>
        /// Executes read operation.
        /// </summary>
        /// <param name="articleSummary">Target article</param>
        Task<string> Read(IArticleSummary articleSummary);
    }
}