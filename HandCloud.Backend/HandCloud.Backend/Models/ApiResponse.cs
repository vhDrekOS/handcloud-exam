using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandCloud.Backend.Models
{
    public class ApiResponse
    {
        public bool Success { get; set; }
        public string Description { get; set; }
        public object Data { get; set; }
    }
}
