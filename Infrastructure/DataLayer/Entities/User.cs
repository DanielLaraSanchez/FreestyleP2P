using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.DataLayer.Entities
{
    public class User
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public int Points { get; set; }


    }
}
