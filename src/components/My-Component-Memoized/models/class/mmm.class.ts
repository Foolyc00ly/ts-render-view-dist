/* import { IObserver } from "../interface/IObserver";

export class MemoizedObserver implements IObserver {
   private memoizedResults:Map<string, any>=new Map();
   update(taskId:number,newState: string){
      const cacheKey = `${taskId}_${newState}`;
      if(this.memoizedResults.has(cacheKey)) {
         console.log(`Resultado memoizado para Tarea ${taskId} en estado ${newState}: ${this.memoizedResults.get(cacheKey)}`);
      }else{
         const result = this.expensiveCalculation(taskId, newState);
         this.memoizedResults.set(cacheKey, result);
         console.log(`Cálculo realizado para Tarea ${taskId} en estado ${newState}: ${result}`);
      }
   }
   private expensiveCalculation(taskId: number, newState: string): any {
      return `Resultado para Tarea ${taskId} en estado ${newState}`;
   }
} */