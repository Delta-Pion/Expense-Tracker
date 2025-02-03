using System;

namespace ETAPI.Interfaces;

public interface ICurrentUserService
{
    public string? getCurrentUserId();
}
