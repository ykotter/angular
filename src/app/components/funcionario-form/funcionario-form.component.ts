import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionarioForm: FormGroup;

  constructor(
    private router: Router,
    private funcionarioService: FuncionarioService
  ){ 
    this.funcionarioForm = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.maxLength(25)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      filial: new FormControl(null, [Validators.required]),
      dataAdmissao: new FormControl(null, [Validators.required]),
      cargo: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      salario: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {}

  cadastrar() {
    if(this.funcionarioForm.valid) {
      const novoFunc = this.funcionarioForm.getRawValue();
      this.funcionarioService.adicionarFuncionario(novoFunc).subscribe(() => {
        this.router.navigate(['funcionarios']);
      })
    } else {
      console.error('Formulário inválido!');
    }
  }

  alterar() {
    const novoFunc = {
      nome: 'Adryan',
      cpf: '12453275933',
      filial: 'MATRIZ',
      dataAdmissao: '2021-07-05',
      cargo: 'Mascote',
      salario: 500.00
    };
  }

  informacoes() {
    const func = this.funcionarioForm.getRawValue();
    console.log(func);
  }
}
