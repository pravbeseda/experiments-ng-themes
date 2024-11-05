import {Component, Provider} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService} from './services/theme.service';
import {Themes} from './models/themes';
import {MyButtonComponent} from './ui/components/my-button/my-button.component';
import {BootstrapButtonComponent} from './themes/bootstrap/bootstrap-button/bootstrap-button.component';
import {MaterialButtonComponent} from './themes/material/material-button/material-button.component';
import {BUTTON_COMPONENT} from './ui/tokens/button-component.token';

export function buttonComponentFactory(themeService: ThemeService) {
  return themeService.currentTheme === 'bootstrap'
    ? BootstrapButtonComponent
    : MaterialButtonComponent;
}

const buttonComponentProvider: Provider = {
  provide: BUTTON_COMPONENT,
  useFactory: buttonComponentFactory,
  deps: [ThemeService],
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButtonComponent],
  providers: [buttonComponentProvider],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public readonly title = 'exp-themes';

  constructor(private themeService: ThemeService) {}

  public switchTheme(theme: Themes) {
    this.themeService.switchTheme(theme);
  }
}
