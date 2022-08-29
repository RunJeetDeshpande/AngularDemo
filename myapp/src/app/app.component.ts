import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedin="true";
  invalue="";
  isActive=true;
  title = 'hobbies';
  pic="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg";
  col=2;
  
  favhobby: any
  test(data:any)
  {
    
    console.log(data);
    this.invalue=data
  
}
email="vsk@gmail.com";
currency=1000;
dob=21/11/2000
description="";
hobbies=[{name:"cricket",startdt:"2022-01-01",description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{name:"Playing Tabla",startdt:"2022-01-01",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]

addHobby($event:any)
{
  let obj={name:$event,startdt:"2022-01-01"};
  this.hobbies.unshift($event);
}

link="";
updatelink(data:string)
{
  this.link=data;
}
// delhobby($event:any)
// {
//   this.hobbies.splice($event,1);
// }
// addtofav($event:any)
// {
//   this.hobbies[$event].fav=1;
//   this.favhobby=this.hobbies.filter(item=>item.fav==1);
// }
phoneNumber="8329209870";
}
