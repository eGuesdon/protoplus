import {UIComponent} from "./UIComponent" ;

export class Container extends UIComponent {
    

    // Static 
    public static RESIZE_HORIZONTAL : string = "horizontal" ;
    public static RESIZE_VERTICAL : string = "vertical" ;
    public static RESIZE_ALLDIRECTION : string = "allDirection" ;

    // Private
    private _resizable : boolean = false ;
    private _resizableDirection : string = Container.RESIZE_ALLDIRECTION ;
    // indicate if the container is either draggable
    private _isDraggable : boolean = false ;
    // indicate if the container is either collasable
    private _isCollapsable : boolean = false ;
    // indicate if the container is either Closable 
    private _isClosable : boolean = false ;
    // indicate if the container is stickable
    private _isStickable : boolean = false ;
    // represents the core Container 
    private _container : HTMLDivElement ;
    // represents the id of the container
    private _containerID : string = "coreContainer" ;
    // represents the parent container. The one within container is displayed
    private _parent : HTMLElement ;

    constructor ( id : string, parent : HTMLElement ) {
        super() ;

        this.containerID = id ;
        this.parent = parent ;
    }

    /**
     * Initialization process.
     * Is automatically called by UIComponent
     */
    protected init () : void {
        super.init() ;
        this.buildContainer () ;
    }

    // === public === \\

    public setSize ( width? : number , height? : number ) {
        if (!this.resizable) {
            throw new Error ("This container is not resizable.") ;
        }

        if ( width ){
            this.setWidth ( width ) ;
        }

        if ( height ) {
            this.setHeight ( height ) ;
        }
    }

    /**
     * 
     */
     public display () : void {
         this.parent.appendChild ( this.container ) ;
     }

    // === Private method === \\

    private buildContainer () : void {
        this.container = document.createElement("div");
        console.log (this.container) ;
        this.setContainerID () ;
    }

    private setContainerID () : void {
        this.container.id = this._containerID ;
    }

    private setWidth ( width : number ) : void {
        this.container.style.width = width + "px" ; 
    }

    private setHeight ( height : number ) : void {
        this.container.style.height = height + "px" ;
    }

    // === Getter / Setter === \\

    public set resizable ( value : boolean ) {
        if (this._resizable != value ) {
            this._resizable = value ;
        }
    }

    public get resizable () : boolean {
        return this.resizable ;
    }

    public set isDraggable ( value : boolean ) {
        if ( this._isDraggable != value ) {
            this._isDraggable = value ;
        }
    }

    public get isDraggable () : boolean {
        return this._isDraggable ;
    }

    public set isCollapsable ( value : boolean ) {
        if ( this._isCollapsable != value ) {
            this._isCollapsable = value ;
        }
    }

    public get isCollapsable () : boolean {
        return this._isCollapsable ;
    }

    public set isClosable ( value : boolean ) {
        if ( this._isClosable != value ) {
            this._isClosable = value ;
        }
    }

    public get isClosable () : boolean {
        return this._isClosable ;
    }

    public set isStickable ( value : boolean ) {
        if ( this._isStickable != value ) {
            this._isStickable = value ;
        }
    }

    public get isStickable () : boolean {
        return this._isStickable ;
    }

    public set container ( value : HTMLDivElement ) {
        if ( !this._container ){
            this._container = value ;
        }
    }

    public get container () : HTMLDivElement {
        return this._container ;
    }

    public set containerID ( value : string ) {
        if ( this._containerID != value ) {
            this._containerID = value ;
            this.setContainerID () ;
        }
    }

    public get containerID () : string {
        return this._containerID ;
    }

    public set parent ( value : HTMLElement ) {
        if ( !this._parent ) {
            this._parent = value ;
        }
    }

    public get parent () : HTMLElement {
        return this._parent ;
    }
}