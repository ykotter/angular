import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../interface';

@Component({
  selector: 'app-component',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class ComponentComponent implements OnInit {

  @Input() funcionario: Funcionario;

  @Output() deselecionarFuncionario = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deselecionar() {
    this.deselecionarFuncionario.emit();
  }
}
