using ETAPI.DTOs;
using ETAPI.Entities;
using ETAPI.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ETAPI.Controllers
{

  [Route("api/[controller]")]
  [ApiController]

  public class ChatController(IChatService chatService) : ControllerBase
  {
    [HttpPost]
    [Authorize]

    public async Task<ActionResult<ResponseDto>> Chat(ChatDto chatDto)
    {

      var response = await chatService.GetResponse(chatDto.InputPrompt);

      return Ok(response);
    }
  }
}


