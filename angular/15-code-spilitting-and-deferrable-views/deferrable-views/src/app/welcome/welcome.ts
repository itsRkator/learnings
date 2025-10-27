import { Component } from '@angular/core';
import { OfferPreview } from '../offer-preview/offer-preview';

@Component({
  selector: 'app-welcome',
  imports: [OfferPreview],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {}
