/// <reference path="../../../../typings/globals/nw.js/index.d.ts" />

import { Component } from '@angular/core';

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
    // Create an empty menubar
    this.menu = new nw.Menu({type:"menubar"});
    this.menu.createMacBuiltin("Proto+", { hideWindow : true , hideEdit : true } ) ;

    // Create a submenu as the 2nd level menu
    var submenu : nw.Menu = new nw.Menu();
    submenu.append(new nw.MenuItem({ label: 'Eric' }));
    submenu.append(new nw.MenuItem({ label: 'Corinne' }));
    submenu.append(new nw.MenuItem({ label: 'Agnès' }));
    submenu.append(new nw.MenuItem({ label: 'Hina' }));

    // Create and append the 1st level menu to the menubar
    this.menu.append(new nw.MenuItem({
        label: 'Famille',
        submenu: submenu
      }));
    nw.Window.get().menu = this.menu;
    nw.Window.get().moveBy(0, -200);
    nw.Window.get().showDevTools();
    console.log(nw.Window.get()) ;
  }
  
  // ==== Getter / Setter ==== \\

  private set menu (m : nw.Menu) {
    this._menu = m ;
  }

  private get menu () : nw.Menu {
    return this._menu ;
  }
  
}