import { IViewStrategy } from "../interface/IViewStrategy";
import { html, render } from 'lit-html';
import style from'./sass/style.scss?inline';
export class HomeView implements IViewStrategy {
   constructor(private container:HTMLElement){
   }
   render(){
      const template=html`
         <style>${style}</style>
         <div class="Home">
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
            <div class="home-p">Home View</div>
         </div>
         <div></div>
         <div></div>
         <div></div>
      `;
      render(template, this.container);
   }
}