import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[btn-plus1]'
})
export class BtnNumberPlus1Directive {

  constructor() { }

  @HostListener('click', ['$event.target'])
  plus1(btn: HTMLButtonElement) {
    let num = +btn.innerText;
    num++;
    btn.innerText = num.toString();
  }
}
