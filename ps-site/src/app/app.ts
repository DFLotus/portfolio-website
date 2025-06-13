import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isDarkMode: boolean = false;
  iconPath: string = "../assets/dark_mode_moon_icon.png";

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    const body: any = document.body;

    if (this.isDarkMode) {
      //Make it dark mode
      body.classList.add('dark-theme');
      this.iconPath = "../assets/light_mode_sun_icon.png";
    }
    else {
      body.classList.remove('dark-theme');
      this.iconPath = "../assets/dark_mode_moon_icon.png";
    }

  }

}
