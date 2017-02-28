import { Container } from "../Core/Container" ;

export class Filter extends Container {

    constructor ( id : string, parent : HTMLElement ) {
        super( id, parent ) ;
    }

    protected init () {
        super.init () ;
        console.log ("je suis dans init de Filter") ;
    }
}