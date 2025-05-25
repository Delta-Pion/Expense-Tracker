
using ETAPI.DTOs;
using ETAPI.Interfaces;
using Newtonsoft.Json;
using OpenAI;
using OpenAI.Chat;
using System.ClientModel;

namespace ETAPI.Services;

public class ChatService(IConfiguration config, IExpensesRepository expensesRepository) : IChatService
{
  public async Task<ResponseDto> GetResponse(string inputPromt)
  {
    // CREATING the chat client

    var base_uri = new Uri("https://openrouter.ai/api/v1");

    var key = config["OPENAI_API_KEY"];
    if (key == null) throw new Exception("Cannot Find API key");

    var credentials = new ApiKeyCredential(key);

    OpenAIClientOptions opts = new()
    {
      Endpoint = base_uri,
    };

    ChatClient client = new(model: "google/gemini-2.5-flash-preview-05-20", credential: credentials, options: opts);

    // Getting all the expenses

    var expenses = await expensesRepository.GetCurrentUserExpenses();

    JsonSerializerSettings sets = new()
    {
      ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
    };
    var expensesString = JsonConvert.SerializeObject(expenses, sets).ToString();

    // Creating the messages

    var systemMessage = "You are an expense tracker assistant who helps the customers analyze their expensees, here are the customers expenses : " + expensesString;

    List<ChatMessage> messages =
    [
        new SystemChatMessage(systemMessage),
        new UserChatMessage(inputPromt)
    ];

    //Getting the response

    ChatCompletion completion = await client.CompleteChatAsync(messages);

    var response = completion.Content[0].Text.ToString();

    return new ResponseDto
    {
      ResponseString = response,
    };
  }
}
