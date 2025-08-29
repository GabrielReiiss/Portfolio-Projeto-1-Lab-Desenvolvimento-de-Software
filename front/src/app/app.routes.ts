import { Routes } from '@angular/router';
import { PaginaInicial } from './components/pagina-inicial/pagina-inicial';
import { Projetos } from './components/projetos/projetos';
import { Experiencias } from './components/experiencias/experiencias';
import { Contato } from './components/contato/contato';

export const routes: Routes = [
    {path: '', component: PaginaInicial},
    {path: 'projetos', component: Projetos},
    {path: 'experiencias', component: Experiencias},
    {path: 'contato', component: Contato}
];
