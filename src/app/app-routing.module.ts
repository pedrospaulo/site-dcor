import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DcorComponent } from './pages/dcor/dcor.component';
import { ExamesProcedimentosComponent } from './pages/exames-procedimentos/exames-procedimentos.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { AgendamentoConsultasComponent } from './pages/agendamento-consultas/agendamento-consultas.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dcor', component: DcorComponent },
  { path: 'exames', component: ExamesProcedimentosComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'consultas', component: AgendamentoConsultasComponent },
  { path: 'contato', component: ContatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
