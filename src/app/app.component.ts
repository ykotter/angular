import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  funcionarios = []

  constructor() {
    this.funcionarios = this.armazenador();
  }
  
  
  private armazenador() {
    return[ 
      {
        nome: 'Marcos',
        filial: 'Filial1',
        admissao: '18/08/2009',
        cargo: 'Cargo1',
        salario: '4.000.99',
      },
      {
        nome: 'João',
        filial: 'Filial1',
        admissao: '03/12/2018',
        cargo: 'Cargo2',
        salario: '2.500,50',
      },
      {
        nome: 'Júlia',
        filial: 'Filial3',
        admissao: '30/04/2021',
        cargo: 'Cargo3',
        salario: '3.235,00',
      },
      {
        nome: 'Maria',
        filial: 'Filial2',
        admissao: '15/10/2015',
        cargo: 'Cargo2',
        salario: '2.950,90',
      },
      {
        nome: 'Felipe',
        filial: 'Filial3',
        admissao: '20/01/2012',
        cargo: 'Cargo3',
        salario: '3.500,60',
      }
    ]
  }

  removerTodos() {
    this.funcionarios = []
  }

  removerPrimeiro() {
    this.funcionarios.shift()
  }


  maisInfo(funcionario) {
   alert(funcionario.nome);
  }
}


