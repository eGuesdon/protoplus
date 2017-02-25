import { Component } from '@angular/core';
declare let nw: any;

@Component({
  selector: 'body',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class RootComponent {
  welcomeMsg : string = 'Bienvenu sur Proto';
  welcomeMsgPlus : string = '+' ;
  menu : Menu;

  constructor() {
    
  }

  public ngOnInit() {
    this.createMenu();
  }

  private createMenu():void {

  }
}