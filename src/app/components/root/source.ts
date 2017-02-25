/// <reference path="../../../../typings/globals/nw.js/index.d.ts" />

import { Component } from '@angular/core';
declare let nw ;

@Component({
  selector: 'body',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class RootComponent {
  public welcomeMsg : string = 'Bienvenu sur Proto';
  public welcomeMsgPlus : string = '+' ;
  private _menu : nw.Menu;

  constructor() {
    
  }

  public ngOnInit () : void {
    this.menu = new nw.Menu( { type : 'menubar' } );
  }

  private setSubMenu () : void {
    this.menu.append(new nw.MenuItem( { label : 'Item A' } ) ) ;
    this.menu.append(new nw.MenuItem( { label : 'Item B' } ) ) ;
    this.menu.append(new nw.MenuItem( { label : 'Separator' } ) ) ;
    this.menu.append(new nw.MenuItem( { label : 'Item C' } ) ) ;
  }

  
  // ==== Getter / Setter ==== \\

  private set menu (m : nw.Menu) {
    this._menu = m ;
    this.setSubMenu() ;
  }

  private get menu () : nw.Menu {
    return this._menu ;
  }
  
}