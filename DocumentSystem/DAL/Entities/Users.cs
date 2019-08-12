using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace DocumentSystem.API.DAL.Entities
{
    public class Users
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string SecondName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

    }
}