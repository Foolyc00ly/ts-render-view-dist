import { ComponentObserver } from "./models/class/ComponentObserver.class";
import { Observable } from "./models/class/Observable.class";
import { html, render } from 'lit-html';
export class MyComponentMemoized extends HTMLElement{
   private observable:Observable<number>;
   private observer:ComponentObserver<number>;
   public shadow:ShadowRoot;
   private state:number=0;
   constructor() {
      super();
      this.shadow=this.attachShadow({mode:'closed'});
      this.observable=new Observable();
      this.observer=new ComponentObserver(this);
   }
   connectedCallback() {
      this._setupUI();
      const button=this.shadow.querySelector('button');
      (button as HTMLButtonElement).addEventListener('click',this._handleButtonClick.bind(this));
   }
   disconnectedCallback() {
      const button=this.shadow.querySelector('button');
      this.observable.removeObserver(this.observer,'value');
      (button as HTMLButtonElement).removeEventListener('click',this._handleButtonClick.bind(this));
   }
   private _setupUI(){
      this.observable.addObserver(this.observer,'value');
      const template=html`
         <div>Valor actual:</div>
         <button>Cambiar Valor</button>
      `
      render(template, this.shadow);
   }
   private _handleButtonClick(){
      this.observable.setPropertyValue(++this.state,'value');
   };
}
