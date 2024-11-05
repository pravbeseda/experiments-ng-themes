import {
    Component,
    ComponentRef,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
    Type,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { ButtonBase } from '../../models/button-base';
import { BUTTON_COMPONENT } from '../../tokens/button-component.token';

@Component({
    selector: 'app-my-button',
    standalone: true,
    imports: [],
    template: '<ng-template #buttonContainer></ng-template>',
})
export class MyButtonComponent implements OnInit {
    @Input() label: string = 'My Button';
    @Output() clicked = new EventEmitter<void>();

    @ViewChild('buttonContainer', { read: ViewContainerRef, static: true })
    public viewContainerRef!: ViewContainerRef;

    private componentRef!: ComponentRef<ButtonBase>;

    constructor(
        @Inject(BUTTON_COMPONENT) private buttonComponent: Type<ButtonBase>
    ) {}

    ngOnInit() {
        this.loadButtonComponent();
    }

    private loadButtonComponent() {
        this.viewContainerRef.clear();
        this.componentRef = this.viewContainerRef.createComponent(
            this.buttonComponent
        );
        this.componentRef.instance.label = this.label;
        this.componentRef.instance.clicked.subscribe(() => this.clicked.emit());
    }
}
