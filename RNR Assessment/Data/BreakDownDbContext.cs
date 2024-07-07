using Microsoft.EntityFrameworkCore;
using RNR_Assessment.Models;

namespace RNR_Assessment.Data
{
    public class BreakDownDbContext : DbContext
    {
        public BreakDownDbContext(DbContextOptions options) : base(options)
        {

        }

        //public BreakDownDbContext() : base()
        //{

        //}

        public DbSet<Breakdown> Breakdowns { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Guid guid = Guid.NewGuid();

            modelBuilder.Entity<Breakdown>().HasData(
                    new Breakdown
                    {
                        BreakdownId = 1,
                        BreakdownReference = guid.ToString(),
                        CompanyName = "Test Company",
                        DriverName = "John Doe",
                        RegistrationNumber = "1234",
                        BreakdownDate = DateTime.Now
                    }
                );
        }
    }
}
