import { IObserver } from "../interface/IObserver";
export class Observable<T>{
   //private observers:IObserver[]=[];
   private observers:Map<string, Set<IObserver<T>>>=new Map();
   // Método para registrar un Observador
   addObserver(observer:IObserver<T>, interest:string){
      !this.observers.has(interest)&&this.observers.set(interest, new Set());
      (this.observers.get(interest) as Set<IObserver<T>>).add(observer);
   }
   // Método para eliminar un Observador
   removeObserver(observer:IObserver<T>, interest:string){
      this.observers.has(interest)&&
         (this.observers.get(interest) as Set<IObserver<T>>).delete(observer);
   }
   // Método para establecer el valor de la propiedad y notificar a los Observadores
   setPropertyValue(data:T, interest:string){
      this.notifyObservers(data,interest);
   }
   // Método para notificar a los Observadores
   private notifyObservers(data:T,interest:string){
      this.observers.has(interest)&&
         (this.observers.get(interest) as Set<IObserver<T>>)
            .forEach(async observer=>await observer.update(data,interest)[interest]());
   }
}