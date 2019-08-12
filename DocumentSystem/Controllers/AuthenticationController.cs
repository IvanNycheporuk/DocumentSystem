using DocumentSystem.API.DTOs;
using DocumentSystem.API.Services.Authentication;
using System.Web.Http;

using DocumentSystem.API.API;

namespace DocumentSystem.API.Controllers
{
    public class AuthenticationController : BaseController
    {
        private readonly IAuthenticationService authenticationService;

        public AuthenticationController()
        {
            this.authenticationService = new AuthenticationService();
        }

        [HttpPost]
        public IResult AuthenticateUser([FromBody] LoginUserDTO userDto)
            => this.authenticationService.Authenticate(userDto.Name, userDto.Password);

    }
}
