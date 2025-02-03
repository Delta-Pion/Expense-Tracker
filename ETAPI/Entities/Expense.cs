using System;

namespace ETAPI.Entities;

public class Expense
{
    public int Id { get; set; }
    public required int Amount { get; set; }

    public required string Name { get; set; }

    public required string UserId { get; set; }

    public required User User { get; set; }

    public int CategoryId { get; set; }

    public required Category Category { get; set; }

    public DateTime DateCreated { get; set; }

    public string? Description { get; set; }

    public int ModeOfPaymentId { get; set; }

    public required ModeOfPayment ModeOfPayment { get; set; }

}
