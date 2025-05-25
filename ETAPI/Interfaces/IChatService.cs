using ETAPI.DTOs;
namespace ETAPI.Interfaces;


public interface IChatService
{
  Task<ResponseDto> GetResponse(string inputPrompt);

}
