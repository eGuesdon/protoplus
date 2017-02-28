import { MainContainer } from "./MainContainer" ;
import { TopContainer } from "./TopContainer" ;
import { LeftContainer } from "./LeftContainer" ;
import { RightContainer } from "./RightContainer" ;
import { WorkspaceContainer } from "./WorkspaceContainer" ;

export class LayoutManager {

    private _mainContainer : MainContainer ;
    private _topContainer : TopContainer ;
    private _leftContainer : LeftContainer ;
    private _rightContainer : RightContainer ;
    private _workspaceContainer : WorkspaceContainer ;

    constructor () {
        this.init() ;
    }

    // === Public methods === \\

    public init () : void {
        this.buildMainContainer () ;
        this.buildLeftContainer () ;
        this.buildRightContainer () ;
        this.buildTopContainer () ;
        this.buildWorkspaceContainer () ;
    }

    public displayMainContainer () : void {
        this.mainContainer.display () ;
    }

    public displayTopContainer () : void {
        this.topContainer.display () ;
    }

    public displayLeftContainer () : void {
        this.leftContainer.display () ;
    }

    public displayRightContainer () : void {
        this.rightContainer.display () ;
    }

    public displayWorkspaceContainer () : void {
        this.workspaceContainer.display () ;
    }

    // === Private methods === \\

    private buildMainContainer () : void {
        this.mainContainer = new MainContainer ("main", document.body);
    }

    private buildTopContainer () : void {
        this.topContainer = new TopContainer ("top", this.mainContainer.container) ;
    } 

    private buildLeftContainer () : void {
        this.leftContainer = new LeftContainer ("left", this.mainContainer.container );
    }

    private buildRightContainer () : void {
        this.rightContainer = new RightContainer ("right", this.mainContainer.container) ;
    }

    private buildWorkspaceContainer () : void {
        this.workspaceContainer = new WorkspaceContainer ("workspace", this.mainContainer.container) ;
    }

    // === Getter / Setter === \\

    public set mainContainer ( value : MainContainer ) {
        this._mainContainer = value ;
    }

    public get mainContainer () : MainContainer {
        return this._mainContainer ;
    }

    public set topContainer ( value : TopContainer ) {
        this._topContainer = value ;
    }

    public get topContainer () : TopContainer {
        return this._topContainer ;
    }

    public set leftContainer ( value : LeftContainer ) {
        this._leftContainer = value ;
    }

    public get leftContainer () : LeftContainer {
        return this._leftContainer ;
    }

    public set rightContainer ( value : RightContainer ) {
        this._rightContainer = value ;
    }

    public get rightContainer () : RightContainer {
        return this._rightContainer ;
    }

    public set workspaceContainer ( value : WorkspaceContainer ) {
        this._workspaceContainer = value ;
    }

    public get workspaceContainer () : WorkspaceContainer {
        return this._workspaceContainer ;
    }
    

}