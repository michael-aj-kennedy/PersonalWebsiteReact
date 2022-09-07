using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Readers
{
    /// <summary>
    /// Read category list from JSON.
    /// </summary>
    public class IndexFileReader : JsonDeserialiser<List<Category>>, IIndexReader
    {
        internal const string FILE_NAME = "index.json";
        internal readonly string fileName = string.Empty;

        /// <summary>
        /// Create a new instance of CategoryFileReader.
        /// </summary>
        /// <param name="searchLocation">Target search location.</param>
        public IndexFileReader(string searchLocation)
        {
            if (!string.IsNullOrWhiteSpace(searchLocation))
            {
                fileName = $"{searchLocation.Trim().TrimEnd('\\')}\\{FILE_NAME}";
            }
        }

        /// <inheritdoc/>
        public async Task<List<Category>> Read()
        {
            if (!string.IsNullOrWhiteSpace(fileName))
            {
                var fileContent = await ReadFile(fileName);
                return Deserialise(fileContent) ?? new List<Category>();
            }

            return new List<Category>();
        }
    }
}
