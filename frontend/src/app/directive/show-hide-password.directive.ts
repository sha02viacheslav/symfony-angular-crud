import { Directive , ElementRef } from '@angular/core';
declare var $;
@Directive({
  selector: '[appShowHidePassword]'
})
export class ShowHidePasswordDirective {
  private _shown = false;
  constructor(private _el: ElementRef) {
    this.setup();
  }
  setup() {
    const parent = this._el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.className = `fa fa-eye-slash eye_adjust`;
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this._el.nativeElement.setAttribute('type', 'text');
      span.className = `fa fa-eye eye_adjust`;
    } else {
      this._el.nativeElement.setAttribute('type', 'password');
      span.className = `fa fa-eye-slash eye_adjust`;
    }
  }
}
