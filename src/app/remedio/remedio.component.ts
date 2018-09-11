import { Component, Input } from '@angular/core';

@Component({
    selector: 'rem-remedio',
    template: ''
})

export class RemedioComponent {
    @Input() id;
    @Input() nome;
    @Input() qtdpdia;
    @Input() qtdestoque;
    @Input() contempquantosdias;
    @Input() observacao;
}
