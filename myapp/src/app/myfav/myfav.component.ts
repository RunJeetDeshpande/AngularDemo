import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfav',
  templateUrl: './myfav.component.html',
  styleUrls: ['./myfav.component.css']
})
export class MyfavComponent implements OnInit {

  @Input() myhobby:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  
  
}
