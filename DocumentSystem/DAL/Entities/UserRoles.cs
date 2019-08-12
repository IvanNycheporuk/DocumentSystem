using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace DocumentSystem.API.DAL.Entities
{
    public class UserRoles
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string RoleId { get; set; }
    }
}