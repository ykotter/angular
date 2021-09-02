import { Component } from '@angular/core';
import { Funcionario } from './model/interface'
import { EnumFilial } from './model/filial'
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  funcionarios: Funcionario[] = [];

  novoFuncionario;

  funcionarioAlteracao;

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
    this.funcionarioService.removerFuncionario(funcionario.id).subscribe((respostaBackend) => {
      this.funcionarioSelecionado = respostaBackend
      this.armazenador();
    })
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