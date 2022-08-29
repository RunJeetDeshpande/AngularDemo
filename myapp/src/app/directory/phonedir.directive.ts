import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPhonedir]'
})
export class PhonedirDirective {

  @Input() appPhonedir:any;
  constructor(private el:ElementRef) { }

@HostListener('keyup') Keyup(){
  let val:string = this.el.nativeElement.value;
  //if (this.appMydir=="uppercase")
  this.el.nativeElement.value = val.toUpperCase();
  // else
  // this.el.nativeElement.value = val.toLocaleLowerCase();

}

}
