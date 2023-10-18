export interface IObserver<T>{
   update(data: T,type:string):{
      [key:string]:()=>Promise<void>;
   };
}
/* interface IObserver{
   update(newValue:any):void;
} */