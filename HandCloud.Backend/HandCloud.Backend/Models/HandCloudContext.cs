using Microsoft.EntityFrameworkCore;

namespace HandCloud.Backend.Models
{
    public class HandCloudContext : DbContext
    {
        public HandCloudContext(DbContextOptions<HandCloudContext> options) : base(options)
        {
        }

        public DbSet<Car> Car { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>()
                .Property(f => f.Id)
                .ValueGeneratedOnAdd();
        }
    }
}