import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent {
@Input() myhobby:any[]=[];
@Output() rhobby=new EventEmitter;
  constructor() { }

  
delhobby(data:number)
{
  this.rhobby.emit(data);
}
afav()
{
  
}
}
