import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { IExperiencias } from '../interface/IExperiencias.interface';

@Component({
  selector: 'app-pagina-inicial',
  imports: [RouterModule, Footer],
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.css', '../navbar.css']
})

export class PaginaInicial implements AfterViewInit {

  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary: {
        strong: 'COLOQUEI AQUI O CARGO',
        p: 'COLOQUE AQUI A EMPRESA | DATA',
      },
      text: "COLOQUE AQUI UMA BREVE DESCRIÇÃO DA SUA EXPERIÊNCIA",
    },
    {
      summary: {
        strong: 'COLOQUEI AQUI O CARGO',
        p: 'COLOQUE AQUI A EMPRESA | DATA',
      },
      text: "COLOQUE AQUI UMA BREVE DESCRIÇÃO DA SUA EXPERIÊNCIA",
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