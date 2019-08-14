using System;
using System.Collections.Generic;
using System.Text;

namespace domain
{
    class Freestyler
    {
        public int Points { get; set; }



        public Freestyler()
        {
            Points = 0;
        }

        private void VoteOponent(Freestyler oponent)
        {
            oponent.Points += 1;
        }




    }
}
