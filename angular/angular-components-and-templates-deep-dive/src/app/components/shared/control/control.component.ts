import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements OnInit, AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }
  label = input.required<string>();
  private readonly el = inject(ElementRef); // Access to the Host Element

  // Native approach: Using Decorators (Zone.js)
  @ContentChild('input') private readonly control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  // Modern Approach: Using Signals (Subscriptions)
  // private readonly control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('After Render');
    });

    afterNextRender(() => {
      console.log('After Next Render');
    });
  }

  ngOnInit(): void {
    console.log('On Init');
    console.log(this.control?.nativeElement);
  }

  ngAfterContentInit(): void {
    console.log('After Content Init');
    console.log(this.control?.nativeElement);
  }

  onClick() {
    console.log('Clicked');
    console.log('Host Element: ', this.el);

    console.log(this.control);
  }
}
