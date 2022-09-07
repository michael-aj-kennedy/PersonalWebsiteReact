using Xunit;
using PersonalWebsite.Data.Models;
using PersonalWebsite.Data.Readers;

namespace PersonalWebsite.Data.UnitTests.IndexFileReader_Tests
{
    public class IndexFileReader_Ctor
    {
        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        [InlineData(null)]
        public void Ctor_IgnoresEmptySearchLocation(string searchPath)
        {
            // arrange
            
            // act
            var fileReader = new IndexFileReader(searchPath);

            // assert
            Assert.Empty(fileReader.fileName);

        }

        [Theory]
        [InlineData("c:\\ThisPathDoesNotExist")]
        [InlineData("c:\\ThisPathDoesNotExist   ")]
        [InlineData("c:\\ThisPathDoesNotExist\\")]
        [InlineData("c:\\ThisPathDoesNotExist\\  ")]
        public void Ctor_CleansFileName(string searchPath)
        {
            // arrange
            var expectedPath = $"c:\\ThisPathDoesNotExist\\{IndexFileReader.FILE_NAME}";

            // act
            var fileReader = new IndexFileReader(searchPath);

            // assert
            Assert.Equal(expectedPath, fileReader.fileName, true);
        }
    }
}
