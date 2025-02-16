using ETAPI.Entities;
using ETAPI.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ETAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(ICurrentUserService currentUserService , UserManager<User> userManager) : ControllerBase
    {
        [HttpGet("current")]
        [Authorize]
        public async Task< ActionResult> GetID()
        {
            var userID = currentUserService.getCurrentUserId();

            if (userID == null) return BadRequest("didn't work");

            var user = await userManager.FindByIdAsync(userID);

            return Ok(user);
        }
    }
}
