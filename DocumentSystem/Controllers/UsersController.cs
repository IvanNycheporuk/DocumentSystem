using System.Collections.Generic;
using System.Web.Http;

using DocumentSystem.API.API;
using DocumentSystem.API.DTOs;
using DocumentSystem.API.Models;
using DocumentSystem.API.Services.Users;

namespace DocumentSystem.API.Controllers
{
    public class UsersController : BaseController
    {
        private readonly IUserService userService;

        public UsersController()
            => this.userService = new UserService();

        [HttpGet]
        public IResult<List<UserDTO>> GetUsers()
            => this.userService.GetUsers();

        [HttpPost]
        public IResult RemoveUser([FromBody]int userId)
            => this.userService.RemoveUser(userId);

        [HttpPost]
        public IResult AddUser([FromBody] SaveUserDTO user) 
            => this.userService.AddUser(
                user.Name, 
                user.SecondName, 
                user.Email, 
                user.Password);
    }
}

//[HttpPost]
//public IHttpActionResult LoginUser([FromBody] LoginUserDTO userDto)
//{
//    //var user = context.Users.FirstOrDefault(x => x.Name == userDto.Name);
//    //if (user == null)
//    //    throw new System.Exception("Invalid user name");

//    //if (user.Password != userDto.Password)
//    //{
//    //    throw new System.Exception("Invalid user name");
//    //}
//    var service = new AuthenticationService();
//    var result = service.Authenticate(userDto.Name, userDto.Password);


//    return Ok(result);
//}

//[HttpOptions]
//public IHttpActionResult Options()
//{
//    HttpContext.Current.Response.Headers.Add("Access-Control-Allow-Origin", "*");
//    HttpContext.Current.Response.Headers.Add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");

//    return Ok();
//}