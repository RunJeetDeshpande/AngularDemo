import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
selector: '[appMydir]'

})
export class MydirDirective {
   @Input() appMydir:any;
  constructor(private el:ElementRef) { }

  @HostListener('keyup') keyup(){

    let val:string = this.el.nativeElement.value;
    if(val.length==10){
    let val1=val.slice(0,3);
      let val2=val.slice(3,6);
      let val3=val.slice(6);
      this.el.nativeElement.value="("+val1+") "+val2+"-"+val3;
    }

}
  

}
