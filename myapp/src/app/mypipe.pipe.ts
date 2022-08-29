import { Xtb } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value:any,limit?:number): unknown {
    if(value)
    {
       let txt:string;
       txt=value;
       let num=limit?limit:50;
       txt=value.substring(0,num);
       if(value.length>num)
       {
        txt=txt+'...readonly';
       }
      return txt;

    }   

    return null;
  }

}
