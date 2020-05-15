using API.DataLayer.Entities;
using Microsoft.EntityFrameworkCore;


namespace API.DataLayer
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
