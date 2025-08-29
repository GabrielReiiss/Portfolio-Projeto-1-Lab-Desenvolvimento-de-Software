using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        private readonly IContatoService contatoService;
        public ContatoController(IContatoService contatoService) 
        {
            this.contatoService = contatoService;
        }

        [HttpPost]
        public async Task<IActionResult> EnviarEmail([FromBody] InformacoesUsuario infosUser)
        {
            try
            {
                Console.WriteLine($"Recebido: {infosUser.Email}, {infosUser.Assunto}");
                await contatoService.EnviarEmail(infosUser);
                return Ok(new { message = "Email enviado com sucesso" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro: {ex.Message}");
                return StatusCode(500, new { error = "Erro interno do servidor" });
            }
        }
    }
}