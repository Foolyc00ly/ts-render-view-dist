import { html, render } from 'lit-html';
import{AppRoot} from '../My-App-Root.class';
interface MenuButton {
   element: Element;
   eventName: string;
   view: string;
}
export class ComponentRoot{
   private component:AppRoot;
   private menuItems:Map<string,MenuButton>=new Map();
   constructor(component: AppRoot){
      this.component=component;
   }
   public _setupUI(){
      this.component.container=document.createElement('div');
      this.component.countElement=document.createElement('p');
      this._renderAppShadow();
      this._getNavLinks();
   }
   private _renderAppShadow(){
      this.component.renderView('');
      const template=html`
         <slot></slot>
         ${this.component.container}
         ${this.component.countElement}
      `;
      render(template,this.component.shadow)
   }
   private _getNavLinks(){
      this.component.querySelectorAll('app-root .menu__item').forEach((menuItem,index)=>{
         const eventName=`menu-item-${index}`;
         const view=(menuItem.textContent?.trim() || '').toLowerCase();
         if(!this.menuItems.has(view)){
            this.menuItems.set(view,{
               element: menuItem,
               eventName:eventName,
               view:view
            });
            this._setupMenuButtons((this.menuItems.get(view) as MenuButton));
         }
      });
   }
   private _setupMenuButtons(menuButton:MenuButton){
      menuButton.element!.addEventListener('click',()=>{
         const event=new CustomEvent(menuButton.view,{detail:{view:menuButton.view}})
         menuButton.element!.dispatchEvent(event);
         this.component.renderView(event.detail.view);
         console.log(event.detail.view);
      });
   }
}