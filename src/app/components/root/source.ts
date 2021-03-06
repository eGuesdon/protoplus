import { Component } from '@angular/core';
import { Panel } from '../../UIComponents/Panel/Panel' ;
import { LayoutManager } from "../../Layout/LayoutManager" ;

@Component({
  selector: 'body',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class RootComponent {
  private _menu: nw.Menu;
  private _panel : Panel ;
  private _layout : LayoutManager ;

  constructor() {}

  public ngOnInit(): void {
    // Create an empty menubar
    this.menu = new nw.Menu({ type: "menubar"});
    // Needs to be define for MacOS
    // add - { hideWindow : true , hideEdit : true } - to remove Edit and Window menu entries
    // how to replace nwjs and replace it by the my-app-name : have a look at http://docs.nwjs.io/en/latest/For%20Users/Advanced/Customize%20Menubar/#mac-os-x
    
    this.menu.createMacBuiltin("Proto+", {hideEdit: true, hideWindow:true});
    
    
    if (process.platform === "darwin") {
    }

    // Create a submenu as the 2nd level menu
    var submenu: nw.Menu = new nw.Menu();
    
    var ssubmenu: nw.Menu = new nw.Menu();
    ssubmenu.append(new nw.MenuItem({ label: 'Noelle' }));
    ssubmenu.append(new nw.MenuItem({ label: 'Ugo' }));

    submenu.append(new nw.MenuItem({
      label: 'Famille Parlange',
      submenu: ssubmenu
    }));
    

    submenu.append(new nw.MenuItem({ type: 'separator' }));

    var sssubmenu: nw.Menu = new nw.Menu();
    sssubmenu.append(new nw.MenuItem({ label: 'Corinne' }));
    sssubmenu.append(new nw.MenuItem({ label: 'Agnès' }));
    sssubmenu.append(new nw.MenuItem({ label: 'Hina' }));
    sssubmenu.append(new nw.MenuItem({ label: 'Eric' }));

    submenu.append(new nw.MenuItem({
      label: 'Famille Guesdon',
      submenu: sssubmenu
    }));

    // Create and append the 1st level menu to the menubar
    this.menu.append(new nw.MenuItem({
      label: 'Famille(s)',
      submenu: submenu
    }));
    nw.Window.get().menu = this.menu;
    nw.Window.get().moveBy(0, -200);
    nw.Window.get().showDevTools();

    // ========== \\

    this._layout = new LayoutManager () ;


    this._panel = new Panel("panel", this._layout.leftContainer.container) ;
    this._panel.display();
  }

  // ==== Getter / Setter ==== \\

  private set menu(m: nw.Menu) {
    this._menu = m;
  }

  private get menu(): nw.Menu {
    return this._menu;
  }

}