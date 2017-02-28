import { Container } from "../Core/Container" ;
import { Header } from "./Header" ;
import { Filter } from "./Filter" ;
import { Search } from "./Search" ;
import { ContentContainer } from "./ContentContainer" ;


export class Panel extends Container {

    private _header : Header ;
    private _contentContainer : ContentContainer ;
    private _searchContainer : Search ;
    private _filterContainer : Filter ;
    private _isSearchContainerDisplayed : boolean = false ;
    private _isFilterContainerDisplayed : boolean = false ;

    constructor ( id : string, parent : HTMLElement ) {
        super( id, parent );
    }

    protected init () : void {
        super.init() ;

        this.setConf();

        this.buildHeader () ;
        this.buildContentContainer () ;   
        this.buildSearchContainer () ;
        this.buildFilterContainer () ;

        
    }

    // === Handler === \\



    // === Public === \\

    public display () : void {
        super.display() ;
        this._header.display () ;
        this._contentContainer.display () ;
    }
    
    // === Private === \\ 

    /**
     * 
     */
     private setConf () : void {
         this.isDraggable = true ;
         this.isStickable = true ;
         this.isClosable = true ;
         this.isCollapsable = true ;
     }

    /**
     * Create Header container
     */
    private buildHeader () : void {
        this._header = new Header ("panelHeader", this.container) ;
        this._header.parent = this.container ;
    }


    /**
     * Create ContentContainer
     */
    private buildContentContainer () : void {
        this._contentContainer = new ContentContainer("panelContentContainer", this.container) ;
        this._contentContainer.parent = this.container ;
    }

    /**
     * Create Search Field Container
     */
    private buildSearchContainer () : void {
        this._searchContainer = new Search ("panelSearch", this.container) ;
        this._searchContainer.parent = this.container ;
    }

    /**
     * Create Filter Field Container
     */
    private buildFilterContainer () : void {
        this._filterContainer = new Filter ("panelFilter", this.container) ;
        this._filterContainer.parent = this.container ;
    }
    
   

    // === Getter / Setter === \\

    public get header () : HTMLDivElement {
        return this._header.container ;
    }

    public get contentContainer () : HTMLDivElement {
        return this._contentContainer.container ;
    }

    public get searchContainer () : HTMLDivElement {
        return this._searchContainer.container ;
    }

    public get filterContainer () : HTMLDivElement {
        return this._filterContainer.container ;
    }

}