import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService} from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public readonly title = 'exp-themes';

  constructor(private themeService: ThemeService) {}

  switchTheme(theme: string) {
    const themePath =
      theme === 'bootstrap'
        ? 'bootstrap-theme.css'
        : 'material-theme.css';
    this.themeService.loadTheme(themePath);
  }
}
