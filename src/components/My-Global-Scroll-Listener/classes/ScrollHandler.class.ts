import { ScrollState } from './ScrollState.class';
import { ScrollStrategy } from './ScrollStrategy.class';

export class ScrollHandler {
   private scrollState: ScrollState;
   private scrollStrategy: ScrollStrategy;
   constructor(
      scrollState: ScrollState,
      scrollStrategy: ScrollStrategy
   ){
      this.scrollState = scrollState;
      this.scrollStrategy = scrollStrategy;
   }
   handleScroll(){
      const scrollY = window.scrollY
      if (this.scrollStrategy.shouldHandleScroll(scrollY)) {
         this.scrollState.updateScroll(scrollY);
      }
   }
   subscribe(){
      globalThis.addEventListener('scroll', this.handleScroll);
   }
   unsubscribe(){
      globalThis.removeEventListener('scroll', this.handleScroll);
   }
}