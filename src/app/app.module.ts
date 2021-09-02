import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ComponentComponent } from './components/detalhes/detalhes.component';
import { NomesPipe } from './pipes/nomes.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NomesPipe,
    CpfPipe,
    FuncionarioFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
