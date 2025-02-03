using System;
using System.Security.Claims;
using ETAPI.Interfaces;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace ETAPI.Services;

public class CurrentUserService(IHttpContextAccessor httpContextAccessor) : ICurrentUserService
{
    public string? getCurrentUserId()
    {
        var userId = httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (userId == null) return null;

        return userId;
    }
}
