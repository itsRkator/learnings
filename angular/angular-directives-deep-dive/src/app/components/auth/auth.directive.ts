import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainerRef = inject(ViewContainerRef);

  // constructor(private readonly authService: AuthService, private readonly templateRef: TemplateRef<any>, private readonly viewContainerRef: ViewContainerRef) {
  constructor(private readonly authService: AuthService) {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
