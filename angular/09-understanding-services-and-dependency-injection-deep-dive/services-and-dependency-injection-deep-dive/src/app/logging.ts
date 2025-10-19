import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class Logging {
  log(message: string) {
    const timeStamp = new Date().toLocaleDateString();

    console.log(`[${timeStamp}]: ${message}`);
  }
}
