import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean=false;
  serverCreationStatus: string = 'This server was not created'
  serverName = 'TestServr'
  serverCreated = false
  
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true
    },2000);
  }

  ngOnInit(): void{
      
  }

  OnCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus='This server was created! Name is' + this.serverName;
  }

  OnUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value
  }
}
