using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedSculptAesthetics.Models
{
    public class CustomerReview
    {
        public string first_name { get; set; }

        public string last_name { get; set; }

        public string email { get; set; }

        public string phone { get; set; }

        public int rating { get; set; }
        public string review { get; set; }

        public DateTime created_dt { get; set; }
    }
}
