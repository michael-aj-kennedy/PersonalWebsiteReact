using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface ICategoryReader
    {
        /// <summary>
        /// Executes read operation.
        /// </summary>
        /// <param name="category">Target category</param>
        Task Read(ICategory category);

        /// <summary>
        /// Article summary list.
        /// </summary>
        List<ArticleSummary> ArticleSummaries { get; }
    }
}