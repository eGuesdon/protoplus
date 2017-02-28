import { Container } from "../Core/Container" ;

export class Header extends Container {

    private _menu : HTMLImageElement ;
    private _search : HTMLImageElement ;
    private _filter : HTMLImageElement ;

    constructor ( id : string, parent : HTMLElement ) {
        super( id, parent ) ;
    }

    protected init () {
        super.init () ;
        console.log ("je suis dans init de Header") ;
    }
}