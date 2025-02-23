using AutoMapper;
using ETAPI.DTOs;
using ETAPI.Entities;

namespace API.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<User,UserDTO>();
    }
}