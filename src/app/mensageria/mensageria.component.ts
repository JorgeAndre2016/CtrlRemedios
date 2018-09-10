import { Component, Input } from '@angular/core';

@Component({
  selector: 'rem-mensageria',
  templateUrl: './mensageria.component.html',
  styleUrls: ['./mensageria.component.css']
})

export class MesangeriaComponent {
  @Input() mensagem;
  constructor() {
  }
}
