using ETAPI.Data;
using ETAPI.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ETAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseController(DataContext context) : ControllerBase
    {
        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpenses(string userId) {

            return await context.Expenses
            .Include(x => x.Category)
            .Include(x => x.ModeOfPayment)
            .Where(e => e.UserId == userId)
            .ToListAsync();
        }
    }
}
