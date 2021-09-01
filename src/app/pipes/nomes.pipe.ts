import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomes'
})
export class NomesPipe implements PipeTransform {
  transform(value: string, before: string): string {
    let nomes = `${before} ${value}`;
    return nomes;
  }
}