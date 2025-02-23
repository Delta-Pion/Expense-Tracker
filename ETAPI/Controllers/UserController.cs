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
    public class UserController(IUserRepository userRepository) : ControllerBase
    {
        [HttpGet("current")]
        [Authorize]
        public async Task<ActionResult> GetCurrentUserDTO()
        {
            var user = await userRepository.GetCurrentUserDTO();

            if(user == null) return NotFound("Couldn't Find User");

            return Ok(user);
        }
    }
}
