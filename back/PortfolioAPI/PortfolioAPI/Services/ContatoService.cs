using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PortfolioAPI.Models;
using System.Net;
using System.Net.Mail;

namespace PortfolioAPI.Services
{
    public interface IContatoService
    {
        Task EnviarEmail(InformacoesUsuario infosUser);
    }
    public class ContatoService: IContatoService
    {
        private readonly IConfiguration configuration;

        public ContatoService(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public async Task EnviarEmail(InformacoesUsuario infosUser)
        {
            var meuEmail = configuration.GetValue<string>("EMAIL_CONFIGURATION:EMAIL");
            var minhaSenha = configuration.GetValue<string>("EMAIL_CONFIGURATION:PASSWORD");
            var host = configuration.GetValue<string>("EMAIL_CONFIGURATION:HOST");
            var port = configuration.GetValue<int>("EMAIL_CONFIGURATION:PORT");

            var smtpClient = new SmtpClient(host, port);
            smtpClient.EnableSsl = true;
            smtpClient.UseDefaultCredentials = false;

            smtpClient.Credentials = new NetworkCredential(meuEmail, minhaSenha);

            var mensagemCompleta = new MailMessage(meuEmail!, infosUser.Email, infosUser.Assunto, infosUser.Mensagem);

            await smtpClient.SendMailAsync(mensagemCompleta);
        }
    }
}
