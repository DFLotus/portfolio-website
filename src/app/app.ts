import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  isDarkMode: boolean = true;
  iconPath: string = "./assets/light_mode_sun_icon.png";

  ngOnInit(): void {
    document.body.classList.add('dark-theme');
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    const body: any = document.body;

    if (this.isDarkMode) {
      body.classList.add('dark-theme');
      this.iconPath = "./assets/light_mode_sun_icon.png";
    } else {
      body.classList.remove('dark-theme');
      this.iconPath = "./assets/dark_mode_moon_icon.png";
    }
  }
}
