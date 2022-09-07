using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using PersonalWebsite.Data.Readers;

namespace PersonalWebsite.Data.UnitTests.IndexFileReader_Tests
{
    public class IndexFileReader_Read
    {
        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        [InlineData(null)]
        public void Read_IfInvalidFileName_ReturnsEmpty(string searchPath)
        {
            // arrange
            

            // act
            

            // assert
            
        }

        [Fact]
        public void Read_IfInvalidFileName_ReturnsData()
        {
            // arrange

            // act

            // assert

        }


    }
}
