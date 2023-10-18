export class ScrollState {
   private scrollY: number = 0;
   private subscribers:((scrollY: number)=>void)[]=[];
   constructor(){
      this.updateScroll=this.updateScroll.bind(this);
   }
   updateScroll(scrollY: number){
      if (this.scrollY !== scrollY) {
         this.scrollY = scrollY;
         this.notifySubscribers();
      }
   }
   subscribe(callback: (scrollY: number)=>void ){
      this.subscribers.push(callback);
   }
   unsubscribe(callback: (scrollY: number) => void) {
      const index = this.subscribers.indexOf(callback);
      if (index !== -1) {
         this.subscribers.splice(index, 1);
      }
   }
   private notifySubscribers() {
      this.subscribers.forEach(callback => {
         callback(this.scrollY);
      });
   }
}