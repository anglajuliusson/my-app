import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertion',
  imports: [ FormsModule],
  templateUrl: './convertion.component.html',
  styleUrl: './convertion.component.css'
})
export class ConvertionComponent {
  // Properties
  meter: number = 0;
  feet: number = 0;
  celsius: number = 0;
  fahrenheit: number = 0;
  meterResult: number = 0;
  feetResult: number = 0;
  celsiusResult: number = 0;
  fahrenheitResult: number = 0;

  // Methods
  metersToFeet() : void{
    this.meterResult = this.meter * 3.28084;
  }

  feetToMeters() : void {
    this.feetResult = this.feet / 3.28084;
  }

  celsiusToFahrenheit() : void {
    this.celsiusResult = (this.celsius * 9/5) + 32;
  }
  fahrenheitToCelsius() : void {
    this.fahrenheitResult = (this.fahrenheit - 32) * 5/9;
  }
}
