export class UIComponent {
    
    public _uuid : string ;

    constructor () {
        this.init();
    }

    protected init () : void {
        console.log ("Je suis dans init de UIComponent") ;
    }

    // === Getter / Setter === \\

    public set uuid ( value : string ){
        if ( !this._uuid ) {
            this._uuid = value ;
        }
    }
    public get uuid () : string {
        return this._uuid ;
    }

}