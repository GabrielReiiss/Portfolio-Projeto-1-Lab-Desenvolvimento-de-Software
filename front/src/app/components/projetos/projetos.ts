import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-projetos',
  imports: [RouterModule, Footer],
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.css', '../navbar.css']
})

export class Projetos {

}