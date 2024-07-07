using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RNR_Assessment.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Breakdowns",
                columns: table => new
                {
                    BreakdownId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BreakdownReference = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DriverName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RegistrationNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BreakdownDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Breakdowns", x => x.BreakdownId);
                });

            migrationBuilder.InsertData(
                table: "Breakdowns",
                columns: new[] { "BreakdownId", "BreakdownDate", "BreakdownReference", "CompanyName", "DriverName", "RegistrationNumber" },
                values: new object[] { 1, new DateTime(2024, 7, 7, 10, 18, 33, 934, DateTimeKind.Local).AddTicks(1584), "78b93e91-6957-459f-95e2-e510738b3094", "Test Company", "John Doe", "1234" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Breakdowns");
        }
    }
}
