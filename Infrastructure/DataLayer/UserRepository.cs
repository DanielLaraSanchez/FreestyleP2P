using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.DataLayer.Entities;
using Infrastructure.DataLayer.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.DataLayer
{
    public class UserRepository : IRepository
    {

        public readonly DatabaseContext _context;

        public UserRepository(DatabaseContext context)
        {
            _context = context;
        }
        public async Task<User> AddUser(string name, string emailAddress, string password)
        {
            User user = null;
            if(!_context.Users.Any(x => x.EmailAddress == emailAddress))
            {
                user = new Entities.User
                {
                    Name = name,
                    EmailAddress = emailAddress,
                    Password = password
                };

                await _context.Users.AddAsync(user);
            }

            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> DeleteUser(long id)
        {
            var user = _context.Users.First(c => c.Id == id);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> Get(long id)
        {
            var user = await _context.Users.FindAsync(id);
            return user;
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            return users.AsEnumerable();
        }

        public async Task<User> Login(string email, string password)
        {
            User user = null;
            try
            {
                user = await _context.Users.Where(x => x.EmailAddress == email).Where(x => x.Password == password).FirstOrDefaultAsync(); //or SingleAsync

                if (user.EmailAddress != null)
                {
                    return user;
                }

            }
            catch (NullReferenceException error)
            {
                Console.WriteLine(error.Message);
            }

            return user;
        }
    }
}
