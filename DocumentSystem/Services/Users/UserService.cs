using System.Collections.Generic;
using System.Linq;

using DocumentSystem.API.API;
using DocumentSystem.API.DTOs;
using DocumentSystem.API.Models;

namespace DocumentSystem.API.Services.Users
{
    public class UserService : Service, IUserService
    {
        public IResult<List<UserDTO>> GetUsers()
        {
            var users = this.context.Users.ToList()
                .Select(user => new UserDTO
                {
                    Id = user.Id,
                    Name = user.Name,
                    SecondName = user.SecondName,
                    Email = user.Email
                }).ToList();

            return new Result<List<UserDTO>>(users, Status.Success);
        }

        public IResult RemoveUser(int userId)
        {
            var user = context.Users.Find(userId);
            if (user == null)
                return new Result(Status.Error, $"User with {userId} not found");

            context.Users.Remove(user);
            context.SaveChanges();

            return Result.Success;
        }

        public IResult AddUser(string name, string secondName, string email, string password)
        {
            var entity = new DAL.Entities.Users
            {
                Name = name,
                SecondName = secondName,
                Email = email,
                Password = password
            };

            context.Users.Add(entity);
            context.SaveChanges();

            return Result.Success;
        }
    }
}