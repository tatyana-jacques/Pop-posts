using System.ComponentModel.DataAnnotations;

namespace PopProject.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Text { get; set; }
        public DateTime DataPostagem { get; set; } = DateTime.Now;
    }
}
