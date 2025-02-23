using System;
using AutoMapper;
using ETAPI.DTOs;
using ETAPI.Entities;
using ETAPI.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ETAPI.Data;

public class UserRepository(ICurrentUserService currentUserService , UserManager<User> userManager , IMapper mapper) : IUserRepository
{
    public async Task<UserDTO?> GetCurrentUserDTO()
    {
        var userID = currentUserService.getCurrentUserId();

        if (userID == null) return null;

        var user = await userManager.FindByIdAsync(userID);

        UserDTO userDTO= new UserDTO();

        mapper.Map(user,userDTO);

        return userDTO;
    }

    public async Task<User?> GetUserByIdAsync(string Id)
    {
        return await userManager.FindByIdAsync(Id);
    }
}
