import { MyGlobalScrollListener,AppRoot } from '../components';
import { MyComponentMemoized } from '../components/My-Component-Memoized/My-Component-Memoized.class';

interface Main{
   showIntroduction :()=>Promise<string>;
   renderAppContent:()=>Promise<void>;
   Event:()=>Promise<void>;
}

export const ComponentHandler=(()=>{
   return{
      logAction:async (element:Main)=>{
         element.Event();
         await element.showIntroduction().then(console.log);
         ComponentHandler.initializeComponents().then;
      },
      initializeComponents:async()=>{
         customElements.define('my-component-memoized', MyComponentMemoized);
         customElements.define('global-scroll-listener', MyGlobalScrollListener);
         customElements.define('app-root', AppRoot);
      }
   }
})();

export const Main:Main=(()=>{
   return{
      showIntroduction :async()=>{
         try{
            return `
               ${'======================'}
               ${'USANDO TS EN PROYECTOS'}
               ${'======================'}
            `;
         }catch(err){
            throw err;
         }
      },
      renderAppContent:async()=>{
         const app:HTMLDivElement|null=document.querySelector('#app');
         if(app!=null){
            app.innerHTML=`
               <h1>Typescript BRAD♥○◘😎</h1>
            `;
         }
      },
      Event:async()=>{
         Object.entries(Main)
            .filter(([],index,array)=>index<array.length-1||index==0)
            .forEach(([key])=>{
               Main[key as keyof typeof Main]().then();
            });
      }
   }
})();