import { EventEmitter } from '@angular/core';

export interface ButtonBase {
    label: string;
    readonly clicked: EventEmitter<void>;
}
