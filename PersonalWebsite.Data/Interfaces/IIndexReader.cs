using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface IIndexReader
    {
        /// <summary>
        /// Executes read operation.
        /// </summary>
        Task Read();

        /// <summary>
        /// Category list.
        /// </summary>
        List<Category> Categories { get; }
    }
}