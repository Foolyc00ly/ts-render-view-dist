import { IViewStrategy } from "../interface/IViewStrategy";
import { html, render } from 'lit-html';
import style from'./sass/style.scss?inline';
export class AboutView implements IViewStrategy {
   constructor(private container:HTMLElement){
   }
   render(){
      const template=html`
         <style>${style}</style>
         <div class="About">
            ${Array.from({ length: 8 }, (_, index) => html`<div class="about-p">About View ${index + 1}</div>`)}
         </div>
         <div></div>
      `;
      render(template, this.container);
   }
}