export class Store{
   private state: Record<string, any> = {};
   public setState(key: string, value: any) {
      this.state[key] = value;
   }
   public getState(key: string) {
      return this.state[key];
   }
}