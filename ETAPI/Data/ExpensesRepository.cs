using System;
using ETAPI.Entities;
using ETAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ETAPI.Data;

public class ExpensesRepository(ICurrentUserService currentUserService , DataContext context) : IExpensesRepository
{
    public async Task<IEnumerable<Expense>> GetCurrentUserExpenses()
    {
        var currentUserId = currentUserService.getCurrentUserId();

        //if(currentUserId == null) return NotFound("User not found");

            return await context.Expenses
            .Include(x => x.Category)
            .Include(x => x.ModeOfPayment)
            .Where(e => e.UserId == currentUserId)
            .ToListAsync();
    }

    public async Task<IEnumerable<Expense>> GetExpensesWithId(string userId)
    {
        return await context.Expenses
            .Include(x => x.Category)
            .Include(x => x.ModeOfPayment)
            .Where(e => e.UserId == userId)
            .ToListAsync();
    }
}
