using DocumentSystem.API.API;

namespace DocumentSystem.API.Services.Authentication
{
    public interface IAuthenticationService: IService
    {
        IResult Authenticate(string userName, string password);
    }
}
