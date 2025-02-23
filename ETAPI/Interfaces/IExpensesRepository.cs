using System;
using ETAPI.Entities;

namespace ETAPI.Interfaces;

public interface IExpensesRepository
{
    Task<IEnumerable<Expense>> GetCurrentUserExpenses();

    Task<IEnumerable<Expense>> GetExpensesWithId(string userId);
}
