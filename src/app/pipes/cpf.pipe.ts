import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: number, ponto1: any, ponto2: any, ponto3: any): any {
    let cpfFomatado = `${value[0]}${value[1]}${value[2]}${ponto1}${value[3]}${value[4]}${value[5]}${ponto2}${value[6]}${value[7]}${value[8]}${ponto3}${value[9]}${value[10]}` ;
    return cpfFomatado;
  }

}
