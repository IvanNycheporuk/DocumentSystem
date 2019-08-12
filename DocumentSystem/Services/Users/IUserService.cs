using System.Collections.Generic;

using DocumentSystem.API.API;
using DocumentSystem.API.Models;

namespace DocumentSystem.API.Services.Users
{
    public interface IUserService : IService
    {
        IResult<List<UserDTO>> GetUsers();
        IResult RemoveUser(int userId);
        IResult AddUser(string name, string secondName, string email, string password);
    }
}
