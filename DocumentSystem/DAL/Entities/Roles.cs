using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace DocumentSystem.API.DAL.Entities
{
    public class Roles
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        public string Description { get; set; }
    }
}