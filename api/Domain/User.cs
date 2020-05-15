using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Domain
{
    class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public int Points { get; set; }

        public User(string name, string emailAddress, string password)
        {
            Name = name;
            EmailAddress = emailAddress;
            Password = password;
            Points = 0;
        }

        private void VoteOponent(User oponent)
        {
            oponent.Points += 1;
        }




    }
}
