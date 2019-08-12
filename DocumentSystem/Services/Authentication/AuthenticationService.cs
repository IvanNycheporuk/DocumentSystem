using System.Collections.Generic;
using System.Linq;

using DocumentSystem.API.API;
using DocumentSystem.API.DTOs;
using DocumentSystem.API.Models;

namespace DocumentSystem.API.Services.Authentication
{
    public class AuthenticationService : Service, IAuthenticationService
    {
        public IResult Authenticate(string userName, string password)
        {
            var user = context.Users.FirstOrDefault(x => x.Name == userName);
            if (user == null)
                throw new System.Exception("Invalid user name");

            if (user.Password != password)
            {
                throw new System.Exception("Invalid user name");
            }

            return Result.Success;
        }
    }
}