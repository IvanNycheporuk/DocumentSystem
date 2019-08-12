using DocumentSystem.API.Models;

namespace DocumentSystem.API.DTOs
{
    public class SaveUserDTO : UserDTO
    {
        public string Password { get; set; }
    }
}