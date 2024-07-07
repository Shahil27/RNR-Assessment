1. Please use Visual Studio 2022 to open the Solution file.
2. Once in Visual Studio, please open the Package Manager Console in Tools > NuGet Package manager, and enter and execute the 'update-database' command.
3. Upon execution of the command above, a new database called BreakdownsDB will be created for you containing a single seeded record of data.
4. The above database will be saved in localdb, with the actual database file located in  C:\Users\<user>.
5. You can access localdb via SQL Server by entering '(LocalDB)\MSSQLLocalDB' as your Server name when connecting.
6. I have also included the database file should any of the earlier processes fail for whatever reason and you have need of it (Please remember to modify the connection string in appsettings.json if you need to)
7. Once your database is up and running, you may proceed to start the application as normal from Visual Studio.