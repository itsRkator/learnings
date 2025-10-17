import { Pipe, PipeTransform } from '@angular/core';

type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(
    temperatureValue: number | string | null,
    sourceTemperatureUnit: TemperatureUnit,
    targetTemperatureUnit?: TemperatureUnit
  ): string | null {
    if (temperatureValue === null) {
      return temperatureValue;
    }
    
    let numericTemperatureValue: number;

    if (typeof temperatureValue === 'string') {
      numericTemperatureValue = parseFloat(temperatureValue);
    } else {
      numericTemperatureValue = temperatureValue;
    }

    // Default target unit if not provided
    if (!targetTemperatureUnit) {
      targetTemperatureUnit = 'fahrenheit';
    }

    let convertedTemperatureValue: number;
    let temperatureUnitSymbol: '°C' | '°F' | 'K';

    // Convert to Celsius first if needed
    let temperatureInCelsius: number;
    if (sourceTemperatureUnit === 'celsius') {
      temperatureInCelsius = numericTemperatureValue;
    } else if (sourceTemperatureUnit === 'fahrenheit') {
      temperatureInCelsius = (numericTemperatureValue - 32) * (5 / 9);
    } else if (sourceTemperatureUnit === 'kelvin') {
      temperatureInCelsius = numericTemperatureValue - 273.15;
    } else {
      temperatureInCelsius = numericTemperatureValue;
    }

    // Convert from Celsius to target unit
    if (targetTemperatureUnit === 'celsius') {
      convertedTemperatureValue = temperatureInCelsius;
      temperatureUnitSymbol = '°C';
    } else if (targetTemperatureUnit === 'fahrenheit') {
      convertedTemperatureValue = temperatureInCelsius * (9 / 5) + 32;
      temperatureUnitSymbol = '°F';
    } else if (targetTemperatureUnit === 'kelvin') {
      convertedTemperatureValue = temperatureInCelsius + 273.15;
      temperatureUnitSymbol = 'K';
    } else {
      convertedTemperatureValue = numericTemperatureValue;
      temperatureUnitSymbol = '°F';
    }

    return `${convertedTemperatureValue.toFixed(2)} ${temperatureUnitSymbol}`;
  }
}
