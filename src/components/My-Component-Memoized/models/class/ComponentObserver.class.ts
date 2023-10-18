import { MyComponentMemoized } from "../../My-Component-Memoized.class";
import { IObserver } from "../interface/IObserver";
import { html, render } from 'lit-html';
export class ComponentObserver<T> implements IObserver<T> {
   private component: MyComponentMemoized;
   constructor(component: MyComponentMemoized) {
      this.component = component;
   }
   update(newValue:T,type:string){
      return{
         [type]:async()=>{
            const div=this.component.shadow.querySelector('div');
            if(div){
               const template=html`
               <span>${newValue}</span>
               `;
               render(template, div);
            }
         }
      }
   }
}