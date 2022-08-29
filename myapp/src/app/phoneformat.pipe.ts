import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformat'
})
export class PhoneformatPipe implements PipeTransform {

  transform(value:string,limit?:number) {
    let txt:string;
    txt=value;
    let num=limit?limit:10;
    var txt1=value.substring(0,3);
    var s1='(' +txt1+')'

    var txt2=value.substring(3,6);
    var s2=' ' +txt2

    var txt3=value.substring(6,10);
    var s3='-' +txt3+')'

    var s4=s1+s2+s3;

    if(value.length>num)
    {
      return s4;
    }
    return s4;

  }

}
