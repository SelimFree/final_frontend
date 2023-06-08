import { Component } from '@angular/core';

interface Developer {
  picture: string;
  name: string;
  country: string;
  position: string;
  introduction: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  developers: Developer[] = [
    {
      picture: 'developer0.jpg',
      name: 'Anass El Aqli',
      country: 'Morocco',
      position: 'Frontend Developer',
      introduction: 'Anass served as frontend developer using Angular and HTML/CSS.'
    },
    {
      picture: 'developer1.jpg',
      name: 'Selim Altayev',
      country: 'Turkmenistan',
      position: 'Frontend Developer',
      introduction: 'Selim served as frontend developer using Angular and HTML/CSS.'
    },
    {
      picture: 'developer2.jpg',
      name: 'Aliento',
      country: 'China',
      position: 'Database Administrator',
      introduction: 'Aliento is served as Database Administrator using SQLite.'
    },
    {
      picture: 'developer3.jpg',
      name: 'Firdovsi Ismayilov',
      country: 'Azerbaijan',
      position: 'Backend Developer',
      introduction: 'Firdovsi served as backend developer using Laravel.'
    }
  ];

  currentDeveloperIndex = 0;

  previousDeveloper(): void {
    this.currentDeveloperIndex = Math.max(0, this.currentDeveloperIndex - 1);
  }

  nextDeveloper(): void {
    this.currentDeveloperIndex = Math.min(this.developers.length - 1, this.currentDeveloperIndex + 1);
  }

  getDeveloperPicture(): string {
    return `assets/${this.developers[this.currentDeveloperIndex].picture}`;
  }





}
