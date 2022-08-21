using PersonalWebsite.Data.Interfaces;
using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Readers
{
    public class DataReader : IDataReader
    {
        private readonly IIndexReader _indexReader;
        private readonly ICategoryReader _categoryReader;
        private readonly IArticleReader _articleReader;

        public DataReader(IIndexReader indexReader, ICategoryReader categoryReader, IArticleReader articleReader)
        {
            _indexReader = indexReader;
            _categoryReader = categoryReader;
            _articleReader = articleReader;
        }

        public async Task<List<Category>> ReadCategories()
        {
            await _indexReader.Read();
            return _indexReader.Categories;
        }
    }
}
