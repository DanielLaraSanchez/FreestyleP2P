using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.DataLayer.Entities;
using Microsoft.EntityFrameworkCore;


namespace Infrastructure.DataLayer
{
    class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
