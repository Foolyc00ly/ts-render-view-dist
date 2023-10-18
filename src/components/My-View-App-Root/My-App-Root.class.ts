import { ComponentRoot } from './app/My-Component-Root.class';
import { ViewFactoryStore } from './router/View-Factory.class';
/**
 *
 * @extends HTMLElement
 */
export class AppRoot extends HTMLElement{
   public shadow:ShadowRoot;
   public container:HTMLDivElement|null=null;
   public countElement: HTMLElement|null=null;
   public componentRoot!:ComponentRoot|null;
   public observer: MutationObserver|null=null;
   constructor() {
      super();
      this.shadow=this.attachShadow({mode:'closed'});
      this._renderView=this._renderView.bind(this);
   }
   connectedCallback() {
      this.observer=new MutationObserver(this._handleShadowDOMChanges.bind(this));
      this.componentRoot=new ComponentRoot(this);
      this.componentRoot._setupUI();
   }
   disconnectedCallback(){
      this._clearShadow();
   }
   private _renderView(view:string){
      const viewFactory=new ViewFactoryStore(this.container as HTMLElement);
      const ViewStrategy=viewFactory.getMethodStrategy(view);
      ViewStrategy.render();
   }
   private _clearShadow() {
      if(this.container){
         this.shadow.removeChild(this.container);
         this.container=null;
      }
      if(this.observer){
         this.observer.disconnect();
         this.observer=null
      }
   }
   private _handleShadowDOMChanges(_mutations: MutationRecord[]) {
      console.log(this.container)
      let elementCount;
      if(this.container){
         elementCount = this.container.children.length;
      }
      if(this.countElement){
         this.countElement.textContent = `Número de elementos: ${elementCount}`;
      }
   }
   get renderView(){
      return this._renderView
   }
}
