using System.ComponentModel.DataAnnotations;

namespace RNR_Assessment.Models
{
    public class Breakdown
    {
        [Key]
        public int BreakdownId { get; set; }
        public string BreakdownReference { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        public string DriverName { get; set; } = string.Empty;
        public string RegistrationNumber { get; set; } = string.Empty;
        public DateTime BreakdownDate { get; set; } = DateTime.MinValue;
    }
}
