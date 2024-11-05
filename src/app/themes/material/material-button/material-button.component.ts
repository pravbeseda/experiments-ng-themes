import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonBase } from '../../../ui/models/button-base';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-material-button',
    standalone: true,
    imports: [MatButtonModule],
    template: `<button mat-button (click)="onClick()">
        {{ label }}
    </button>`,
})
export class MaterialButtonComponent implements ButtonBase {
    @Input() label: string = 'Material Button';
    @Output() clicked = new EventEmitter<void>();

    onClick() {
        this.clicked.emit();
    }
}
