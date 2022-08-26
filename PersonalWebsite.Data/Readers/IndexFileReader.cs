using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Readers
{
    /// <summary>
    /// Read category list from JSON.
    /// </summary>
    public class IndexFileReader : JsonDeserialiser<List<Category>>, IIndexReader
    {
        private const string FILE_NAME = "index.json";
        private readonly string fileName = string.Empty;

        /// <summary>
        /// Create a new instance of CategoryFileReader.
        /// </summary>
        /// <param name="searchLocation">Target search location.</param>
        public IndexFileReader(string searchLocation)
        {
            if (!string.IsNullOrWhiteSpace(searchLocation))
            {
                fileName = $"{searchLocation.TrimEnd('\\')}\\{FILE_NAME}";
            }
        }

        /// <inheritdoc/>
        public async Task<List<Category>> Read()
        {
            if (!string.IsNullOrWhiteSpace(fileName))
            {
                var fileContent = await ReadJson(fileName);
                Categories = Deserialise(fileContent) ?? new List<Category>();
                return Categories;
            }

            return new List<Category>();
        }

        /// <inheritdoc/>
        public List<Category> Categories { get; private set; } = new List<Category>();
    }
}
