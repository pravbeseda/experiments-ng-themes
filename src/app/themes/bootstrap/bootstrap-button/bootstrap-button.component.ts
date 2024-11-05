import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonBase } from '../../../ui/models/button-base';

@Component({
    selector: 'app-bootstrap-button',
    standalone: true,
    imports: [],
    template: `<button class="btn btn-primary" (click)="onClick()">
        {{ label }}
    </button>`,
})
export class BootstrapButtonComponent implements ButtonBase {
    @Input() label: string = 'Bootstrap Button';
    @Output() clicked = new EventEmitter<void>();

    onClick() {
        this.clicked.emit();
    }
}
