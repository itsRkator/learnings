import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  // host property add the key value pairs as properties to the host element
  host: {
    class: 'control',
    // event binding
    '(click)': 'onClick()',
  },
})
export class Control implements OnInit, AfterContentInit {
  // HostBinding should be omitted
  // @HostBinding('class') className = 'control';

  // HostListener is a cleaner and better approach for event binding to the host
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // Using signal
  // private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  label = input.required<string>();

  // Accessing the host element by DI as well as constructor
  // private readonly hostElement = inject(ElementRef);
  constructor(private readonly hostElement: ElementRef) {}

  ngOnInit(): void {
    console.log('On Init in Control Component');
    console.log(this.control?.nativeElement);
  }

  ngAfterContentInit(): void {
    console.log('After Content Init');
    console.log(this.control?.nativeElement);
  }

  onClick() {
    console.log('Clicked');
    console.log(this.hostElement);
    console.log(this.control?.nativeElement);
  }
}
