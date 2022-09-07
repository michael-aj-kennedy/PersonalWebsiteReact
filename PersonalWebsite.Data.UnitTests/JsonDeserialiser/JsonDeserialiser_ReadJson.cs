using Xunit;
using PersonalWebsite.Data.Readers;

namespace PersonalWebsite.Data.UnitTests.CategoryFileReader
{
    public class CategoryFileReader_Ctor
    {
        [Fact]
        public async Task ReadFile_ReturnsEmptyStringIfInvalidPath()
        {
            // arrange
            var deserialiser = new JsonDeserialiser<string>();
            var filePath = "c:\thisfiledoesntexist.json";

            // act
            var result = await deserialiser.ReadFile(filePath);

            // assert
            Assert.Empty(result);
        }

        [Fact]
        public async Task ReadFile_ReturnsFileContent()
        {
            // arrange
            var deserialiser = new JsonDeserialiser<string>();
            var filePath = $"{Environment.CurrentDirectory}\\Data\\categories.json";

            // act
            var result = await deserialiser.ReadFile(filePath);

            // assert
            Assert.NotEmpty(result);
        }
    }
}