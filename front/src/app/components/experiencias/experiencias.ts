import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { IExperiencias } from '../interface/IExperiencias.interface';

@Component({
  selector: 'app-pagina-inicial',
  imports: [RouterModule, Footer],
  templateUrl: './experiencias.html',
  styleUrls: ['./experiencias.css', '../navbar.css']

})
export class Experiencias implements AfterViewInit {

  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary: {
        strong: 'Assistente de Serviços',
        p: 'Sisloc Softwares |  fev de 2025 - o momento · 7 meses',
      },
      text: "Atuo como Assistente de Serviços na Sisloc Softwares, onde sou responsável por realizar configurações dentro do sistema, elaborar documentos utilizando HTML, CSS e JavaScript, além de desenvolver funções em Java para atender cenários específicos. Também colaboro no atendimento ao cliente, oferecendo suporte técnico e auxiliando na resolução de demandas.<br><br>No meu dia a dia, tenho a oportunidade de aprimorar continuamente minhas habilidades em programação e suporte técnico, contribuindo para a melhoria e eficiência dos processos internos da empresa.",
    },
    {
      summary: {
        strong: 'Estagiário de Serviços',
        p: 'Sisloc Softwares |  mar de 2024 - fev de 2025 · 1 ano',
      },
      text: "Atuei como Estagiário de Serviços na Sisloc Softwares, onde fui responsável por auxiliar na implementação de soluções utilizando HTML, CSS e JavaScript, além de desenvolver funções simples em Java para atender necessidades específicas. Também prestei suporte no atendimento ao cliente, colaborando na resolução de demandas e garantindo uma boa experiência de uso do sistema.<br><br>Durante esse período, pude aprimorar minhas habilidades em programação e suporte técnico, contribuindo para a otimização e melhoria contínua dos processos internos da empresa.",
    }
  ]);

  constructor() {}

  ngAfterViewInit(): void {
    const detailsElements = document.querySelectorAll<HTMLDetailsElement>('.experiencias details');
    detailsElements.forEach(det => {
      det.addEventListener('toggle', () => {
        if (det.open) {
          setTimeout(() => {
            det.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 200);
        }
      });
    });
  }
}