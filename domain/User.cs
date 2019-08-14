using System;
using System.Collections.Generic;
using System.Text;

namespace domain
{
    class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }

        public User(string name, string emailAddress, string password) {
            Name = name;
            EmailAddress = emailAddress;
            Password = password;
        }



    }
}
