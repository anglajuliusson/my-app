import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  portrattImage: string = "/images/portratt.png";
  boatImage: string = "/images/boat.png";
  flowersImage: string = "/images/flowers.png";
  houseImage: string = "/images/house.png";
  ozzyImage: string = "/images/ozzy.png";
  sunsetImage: string = "/images/sunset.png";
  raceImage: string = "/images/race.png";
}
