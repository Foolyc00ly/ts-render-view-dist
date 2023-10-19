import { html, render } from 'lit-html';
/**
 *
 * @extends HTMLElement
 */
interface MenuButton {
   element: Element;
   eventName: string;
   view: string;
}
export class NavigationComponent extends HTMLElement{
   private menuItems:Map<string,MenuButton>=new Map();
   public shadow:ShadowRoot;
   constructor(){
      super();
      this.shadow=this.attachShadow({mode:'closed'});
      this._handleMenuItemClick=this._handleMenuItemClick.bind(this);
   }
   connectedCallback(){
      this._renderAppShadow();
      this._getNavLinks();
   }
   disconnectedCallback(){
      this.menuItems.forEach((menuButton) => {
         menuButton.element.removeEventListener('click', this._handleMenuItemClick);
      });
      this.menuItems.clear();
   }
   private _renderAppShadow(){
      const template=html`
         <slot></slot>
      `;
      render(template,this.shadow)
   }
   private _getNavLinks(){
      this.querySelectorAll('.menu__item').forEach((menuItem,index)=>{
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
      menuButton.element!.addEventListener('click',this._handleMenuItemClick);
   }
   private _handleMenuItemClick(e:Event){
      const target = e.target as HTMLElement;
      const view = target.textContent?.trim().toLowerCase();
      const event=new CustomEvent(view as string,{
         detail:{view:view},
         bubbles:true,
         composed:true
      });
      target!.dispatchEvent(event);
      console.log(view)
   }
}