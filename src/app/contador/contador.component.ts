import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  contador = signal(0);
  acoes = signal<string[]>([]);

  incremetar() {
    this.contador.update((oldValue) => oldValue + 1);
    this.acoes.update((oldValue) => [...oldValue, 'INCREMENTAR']);
  }

  decrementar() {
    this.contador.set(this.contador() - 1);
    this.acoes.mutate((oldValue) => oldValue.push('DECREMENTAR'));
  }
}
