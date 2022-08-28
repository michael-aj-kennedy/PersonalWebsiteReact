using PersonalWebsite.Data.Models;

namespace PersonalWebsite.Data.Interfaces
{
    public interface IArticle
    {
        string Content { get; set; }

        ArticleSummary Summary { get; set; }
    }
}
