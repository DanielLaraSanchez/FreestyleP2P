using Infrastructure.DataLayer.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.DataLayer.Interfaces
{
    public interface IRepository
    {
        Task<User> Get(long id);
        Task<IEnumerable<User>> GetAll();
        Task<User> AddUser(string name, string emailAddress, string password);
        Task<User> DeleteUser(long id);
        Task<User> Login(string emailAddress, string password);
    }
}
