using DocumentSystem.API.DAL;

namespace DocumentSystem.API.Services
{
    public abstract class Service: IService
    {
        protected Context context;

        public Service()
        {
            this.context = new Context();
        }
    }
}