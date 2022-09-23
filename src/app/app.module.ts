import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DcorComponent } from './pages/dcor/dcor.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { ExamesProcedimentosComponent } from './pages/exames-procedimentos/exames-procedimentos.component';
import { AgendamentoConsultasComponent } from './pages/agendamento-consultas/agendamento-consultas.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CardBannerComponent } from './component/cards/card-banner/card-banner.component';
import { CardConsultaComponent } from './component/cards/card-consulta/card-consulta.component';
import { CardExamesComponent } from './component/cards/card-exames/card-exames.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    DcorComponent,
    MedicosComponent,
    ExamesProcedimentosComponent,
    AgendamentoConsultasComponent,
    ContatoComponent,
    CardBannerComponent,
    CardConsultaComponent,
    CardExamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
