using System;
using Microsoft.AspNetCore.Identity;

namespace ETAPI.Entities;

public class User : IdentityUser
{
    public string KnownAs { get; set; } = "AxT USER";
    public ICollection<Expense> Expenses{ get; set; } = [];
}
