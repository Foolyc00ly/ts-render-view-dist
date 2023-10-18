import './sass/style.scss';
import {ComponentHandler, Main as MainApp} from './common';

class MainStrategy{
  private methodFunction:()=>void;
  constructor(methodFunction:()=>void){
    this.methodFunction = methodFunction;
  }
  execute(){
    this.methodFunction();
  }
}

class MainStore{
  private methods:{[key: string]:MainStrategy}={};
  constructor(){
    this._initializeMain();
  }
  private _initializeMain(){
    this.methods['method1']=new MainStrategy(() => ComponentHandler.logAction(MainApp));
    this.methods['method2']=new MainStrategy(() => {});
  }
  getMethodStrategy(methodName:string):MainStrategy {
    return this.methods[methodName]!==undefined
      ?this.methods[methodName]:this.methods['method1'];
  }
}
class Main {
  constructor() {
    this.setup=this.setup.bind(this)
    this.init();
  }

  private init() {
    document.addEventListener('DOMContentLoaded', this.setup);
  }

  private async setup(): Promise<void>{
    const method=this.methodFromElement as string;
    const methodStrategy=new MainStore();
    methodStrategy.getMethodStrategy(method).execute();
  }

  private get methodFromElement(): string | null {
    return document.body.getAttribute('data-method');
  }
}

new Main();
