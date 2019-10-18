import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverik',
  templateUrl: './serverik.component.html',
  styleUrls: ['./serverik.component.css']
})
export class ServerikComponent implements OnInit {

  public serverID = "10";
  public serverStatus = "online";




  constructor() {
    this.serverStatus = (Math.random() >0.5 )?"online":"ofline";
   }

  ngOnInit() {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'red' : 'blue';
  }

}
