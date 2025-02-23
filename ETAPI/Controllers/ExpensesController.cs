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
    public class ExpensesController(IExpensesRepository expensesRepository) : ControllerBase
    {
        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpensesWithId(string userId) {

            var expenses = await expensesRepository.GetExpensesWithId(userId);

            return Ok(expenses);
        }

        [HttpGet("current")]
        [Authorize]

        public async Task<ActionResult<IEnumerable<Expense>>> CurrentUserExpenses() {

            var expenses = await expensesRepository.GetCurrentUserExpenses();

            return Ok(expenses);            
        }
    }
}
