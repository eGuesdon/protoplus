import { Container } from "../Core/Container" ;

export class Panel extends Container {

    private _header : HTMLDivElement ;
    private _contentContainer : HTMLDivElement ;
    private _searchContainer : HTMLDivElement ;
    private _filterContainer : HTMLDivElement ;
    private _isSearchContainerDisplayed : boolean = false ;
    private _isFilterContainerDisplayed : boolean = false ;

    constructor ( id? : string ) {
        super();

        if (id) {
            this.containerID = id ;
        }
    }

    protected init () : void {
        super.init() ;
        console.log ("je suis dans init de Panel") ;

        this.buildHeader () ;
        this.buildContentContainer () ;

        this.appendContainerWithHeader () ;
        this.appendContainerWithContentContainer () ;
    }

    // === Handler === \\



    // === Public === \\

    public displaySearchField () : void {
        this._isSearchContainerDisplayed = true ;
        this.buildSearchContainer () ;
        this.appendContainerWithSearchContainer () ;
    }

    public hideSearchField () : void {
        this._isSearchContainerDisplayed = false ;
        this.container.removeChild( this._searchContainer ) ;
    }

    public displayFilterField () : void {
        this._isFilterContainerDisplayed = true ;
        this.buildFilterContainer () ;
        this.appendContainerWithFilterContainer () ;
    }

    public hideFilderField () : void {
        this._isFilterContainerDisplayed = false ;
        this.container.removeChild ( this._filterContainer ) ;
    }


    // === Private === \\ 

    /**
     * Create Header container
     */
    private buildHeader () : void {
        this._header = document.createElement ("div") ;
    }


    /**
     * Create ContentContainer
     */
    private buildContentContainer () : void {
        this._contentContainer = document.createElement ("div") ;
    }

    /**
     * Create Search Field Container
     */
    private buildSearchContainer () : void {
        this._searchContainer = document.createElement ("div") ;
    }

    /**
     * Create Filter Field Container
     */
    private buildFilterContainer () : void {
        this._filterContainer = document.createElement ("div") ;
    }
    
    /**
     * Allows to add Header to container
     */
    private appendContainerWithHeader () : void {
        this.container.appendChild ( this._header ) ;
    }

    /**
     * Allows to add contentContainer to container
     */
    private appendContainerWithContentContainer () : void {
        this.container.appendChild ( this._contentContainer ) ;
    }

    /**
     * TODO : Display SearchContainer at the right position
     */
    private appendContainerWithSearchContainer () : void {
        if (this._isFilterContainerDisplayed){
            this.container.insertBefore ( this._searchContainer, this._contentContainer ) ;
        }else {
            this.container.insertBefore ( this._searchContainer, this._filterContainer ) ;
        }
    }

    /**
     *  TODO : Display SearchContainer at the right position
     */
    private appendContainerWithFilterContainer () : void {
        this.container.insertBefore ( this._filterContainer, this._contentContainer ) ;
    }

    // === Getter / Setter === \\

    public get header () : HTMLDivElement {
        return this._header ;
    }

    public get contentContainer () : HTMLDivElement {
        return this._contentContainer ;
    }

    public get searchContainer () : HTMLDivElement {
        return this._searchContainer ;
    }

    public get filterContainer () : HTMLDivElement {
        return this._filterContainer ;
    }

}