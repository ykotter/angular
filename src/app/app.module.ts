import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ComponentComponent } from './component/detalhes.component';
import { NomesPipe } from './pipes/nomes.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { HttpClientModule } from '@angular/common/http'
registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NomesPipe,
    CpfPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
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
