using System;
using Microsoft.AspNetCore.Identity;

namespace ETAPI.Entities;

public class User : IdentityUser
{
    public ICollection<Expense> Expenses{ get; set; } = [];
}
