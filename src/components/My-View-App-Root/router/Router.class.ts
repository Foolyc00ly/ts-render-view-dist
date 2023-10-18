/* 

export class Router{
   private currentView:string="";
   private observers:Function[]=[];
   public addObserver(observer:Function){
      this.observers.push(observer);
   }
   public navigate(view:string){
      this.currentView=view;
      this.notifyObservers();
   }
   public getCurrentView(): string {
      return this.currentView;
   }
   private notifyObservers(){
      this.observers.forEach((observer) => observer(this.currentView));
   }

} */
/* 

export class Router extends HTMLElement {
   private currentView: HTMLElement | null = null;
   private viewCache: Map<string, HTMLElement> = new Map();
   private shadow:ShadowRoot;
   constructor(){
      super();
      this.shadow=this.attachShadow({ mode: 'closed' });
      this._handleViewChange=this._handleViewChange.bind(this);
      console.log("first")
   }
   connectedCallback() {
      this._handleViewChange();
   }
   disconnectedCallback(){
      this.clearShadow();
   }
   private _handleViewChange() {
      const viewName = this.getAttribute('data-view') as string;
      const newView = this.viewCache.get(viewName) || this.createAndCacheView(viewName);
      if (!this.areViewsEqual(this.currentView, newView)) {
         this.clearShadow();
         console.log(this.currentView)
         console.log(newView)
         this.currentView = newView;
         this.shadow.appendChild(this.currentView);
      }
   }
   private createAndCacheView(viewName: string): HTMLElement {
      const viewStrategy = ViewFactoryStore.getMethodStrategy(viewName);
      const newView = viewStrategy.backTo();
      console.log(this.currentView)
      console.log(newView)
      this.viewCache.set(viewName, newView);
      return newView;
   }
   private areViewsEqual(viewA: HTMLElement | null, viewB: HTMLElement | null): boolean {
      return !!viewA && !!viewB ;
   }
   private clearShadow() {
      if (this.currentView) {
         this.shadow.removeChild(this.currentView);
         this.currentView = null;
      }
   }

}

 */