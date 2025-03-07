﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RNR_Assessment.Data;

#nullable disable

namespace RNR_Assessment.Migrations
{
    [DbContext(typeof(BreakDownDbContext))]
    [Migration("20240707081834_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.31")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("RNR_Assessment.Models.Breakdown", b =>
                {
                    b.Property<int>("BreakdownId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BreakdownId"), 1L, 1);

                    b.Property<DateTime>("BreakdownDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("BreakdownReference")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DriverName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RegistrationNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BreakdownId");

                    b.ToTable("Breakdowns");

                    b.HasData(
                        new
                        {
                            BreakdownId = 1,
                            BreakdownDate = new DateTime(2024, 7, 7, 10, 18, 33, 934, DateTimeKind.Local).AddTicks(1584),
                            BreakdownReference = "78b93e91-6957-459f-95e2-e510738b3094",
                            CompanyName = "Test Company",
                            DriverName = "John Doe",
                            RegistrationNumber = "1234"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
