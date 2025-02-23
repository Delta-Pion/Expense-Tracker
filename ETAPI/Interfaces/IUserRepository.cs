using System;
using ETAPI.DTOs;
using ETAPI.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ETAPI.Interfaces;

public interface IUserRepository
{
    Task<UserDTO?> GetCurrentUserDTO();

    Task<User?> GetUserByIdAsync(string Id);
}
