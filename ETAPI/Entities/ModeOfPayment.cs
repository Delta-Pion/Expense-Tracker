using System;
using System.Text.Json.Serialization;

namespace ETAPI.Entities;

public class ModeOfPayment
{
    public int Id { get; set; }

    public required string Name { get; set; }

    [JsonIgnore]
    public ICollection<Expense> Expenses { get; set; } = new List<Expense>();
}
