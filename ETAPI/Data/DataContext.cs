using System;
using ETAPI.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;

namespace ETAPI.Data;

public class DataContext(DbContextOptions<DataContext> options) : IdentityDbContext<User>(options)
{
    public DbSet<Expense> Expenses { get; set; }

    public DbSet<Category> Categories{ get; set; }

    public DbSet<ModeOfPayment> ModeOfPayments { get; set; }
}
