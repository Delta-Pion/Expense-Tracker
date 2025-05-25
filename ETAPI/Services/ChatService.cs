
namespace ETAPI.Services;

public class ChatService() : IChatService
{
  public string? getCurrentUserId()
  {
    var userId = httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

    if (userId == null) return null;

    return userId;
  }
}
