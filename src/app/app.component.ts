import { Component } from '@angular/core';
import { Funcionario } from '../app/interface'
import { EnumFilial } from '../app/filial'
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  funcionarios: Funcionario[] = [];

  novoFuncionario;

  funcionarioSelecionado: Funcionario;

  constructor(private funcionarioService: FuncionarioService) {
    this.armazenador();
  }
  

  
  private armazenador() {
    this.funcionarioService.listarFuncionario().subscribe((respostaBackend) => {
      this.funcionarios = respostaBackend;
    });
  }

  addFuncionario() { 
    this.novoFuncionario = {
      nome: "Gustavo",
      cpf: "29762743040",
      filial: "FILIAL3",
      dataAdmissao: "2006/04/16",
      cargo: "Gerente",
      salario: 6500.00
    }
    this.funcionarioService.adicionarFuncionario(this.novoFuncionario).subscribe((respostaBackend: Funcionario) => {
      respostaBackend = this.novoFuncionario;
      this.armazenador();
    })
  }

  removerTodos() {
    this.funcionarios = [];
  }

  removerPrimeiro() {
    this.funcionarios.shift();
  }

  removerUltimo() {
    this.funcionarios.pop();
  }

  removerFuncionario(funcionario) {
    const index = this.funcionarios.indexOf(funcionario);
    this.funcionarios.splice(index, 1)
  }


  maisInfo(funcionario) {
   alert('O funcionário ' + funcionario.nome + ', trabalha na filial ' + funcionario.filial + ', ocupando o cargo de ' + funcionario.cargo + ', sendo remunerado com o valor de ' + funcionario.salario + ',  desde a sua data de contratação em ' + funcionario.admissao);
  }

  selecionarFuncionario(funcionario) {
    this.funcionarioService.obterDadosFuncionario(funcionario.id).subscribe((respostaBackend) => {
      this.funcionarioSelecionado = respostaBackend
    })
  }
}