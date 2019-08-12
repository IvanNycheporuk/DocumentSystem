using DocumentSystem.API.DAL.Entities;
using System.Data.Entity;

namespace DocumentSystem.API.DAL
{
    public class Context : DbContext
    {
        public Context() : base("Context") { }

        public DbSet<Users> Users { get; set; }
    }
}