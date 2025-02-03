using ETAPI.Data;
using ETAPI.Entities;
using ETAPI.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ETAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController(DataContext context , ICurrentUserService currentUserService) : ControllerBase
    {
        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpensesWithId(string userId) {

            return await context.Expenses
            .Include(x => x.Category)
            .Include(x => x.ModeOfPayment)
            .Where(e => e.UserId == userId)
            .ToListAsync();
        }

        [HttpGet("current")]
        [Authorize]

        public async Task<ActionResult<IEnumerable<Expense>>> CurrentUserExpenses() {

            var currentUserId = currentUserService.getCurrentUserId();

            if(currentUserId == null) return NotFound("User not found");

            return await context.Expenses
            .Include(x => x.Category)
            .Include(x => x.ModeOfPayment)
            .Where(e => e.UserId == currentUserId)
            .ToListAsync();
        }
    }
}
