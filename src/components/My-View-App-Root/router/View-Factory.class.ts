import {HomeView,AboutView,ContactView} from '../views'
export class ViewStrategy{
   private renderView:()=>void;
   constructor(renderView:()=>void){
      this.renderView=renderView;
   }
   render(){
      this.renderView();
   }
}
export class ViewFactoryStore{
   private views:{[key:string]:ViewStrategy}={};
   constructor(public container:HTMLElement){
      this._initializeViews();
   }
   private _initializeViews(){
      const homeView=new HomeView(this.container);
      const aboutView=new AboutView(this.container);
      const contactView=new ContactView(this.container);
      this.views['home']=new ViewStrategy(()=>homeView.render());
      this.views['about']=new ViewStrategy(()=>aboutView.render());
      this.views['contact']=new ViewStrategy(()=> contactView.render());
   }

   getMethodStrategy(viewName:string):ViewStrategy{
      return this.views[viewName]!==undefined
         ?this.views[viewName]: this.views['home'];
   }
}