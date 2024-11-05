// src/app/theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Themes } from '../models/themes';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private renderer: Renderer2;
    private linkElement: HTMLLinkElement | null = null;
    private _currentTheme: Themes = 'bootstrap';

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);

        this.switchTheme(this.currentTheme);
    }

    public get currentTheme(): 'bootstrap' | 'material' {
        return this._currentTheme;
    }

    public switchTheme(theme: Themes) {
        this._currentTheme = theme;

        if (this.linkElement) {
            this.renderer.removeChild(document.head, this.linkElement);
        }

        this.linkElement = this.renderer.createElement('link');
        if (!this.linkElement) {
            return;
        }
        this.linkElement.rel = 'stylesheet';
        this.linkElement.href = `${theme}-theme.css`;
        this.renderer.appendChild(document.head, this.linkElement);
    }
}
