import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName = "server name";
  serverCreated = false;
  public serverCreatedStatus = "server was created";

  interns = [{
    name: "Alla",
    surname: "Davtyan",
    university:"YSU"
  },
  {
    name: "Ani",
    surname: "Khosteghyan",
    university: "YSU" 
  },
  {
    name: "Larisa",
    surname: "Malkhasyan",
    university: "AUA"
  },
  {
    name: "Karinka",
    surname: "Antonyan",
    university: "YSU"
  }];





  public servers = ["dam","enmidam"]


  constructor() { }

  ngOnInit() {
  }

  buttonClick(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
}
