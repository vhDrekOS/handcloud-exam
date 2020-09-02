using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace HandCloud.Backend.Models
{
    public class Car
    {
        [Key]
        [JsonProperty("id")]
        public int? Id { get; set; }

        [Required]
        [StringLength(50)]
        [JsonProperty("model")]
        public string Model { get; set; }

        [Required]
        [StringLength(100)]
        [JsonProperty("description")]
        public string Description { get; set; }

        [Required]
        [Range(0, 9000)]
        [JsonProperty("year")]
        public int Year { get; set; }

        [Required]
        [StringLength(50)]
        [JsonProperty("brand")]
        public string Brand { get; set; }

        [Required]
        [Range(0, 1000000)]
        [JsonProperty("kilometers")]
        public int Kilometers { get; set; }

        [Required]
        [Range(1, 10000000.00)]
        [JsonProperty("price")]
        public decimal Price { get; set; }
    }
}