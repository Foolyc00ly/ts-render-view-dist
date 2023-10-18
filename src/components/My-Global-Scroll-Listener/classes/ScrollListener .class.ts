import { ScrollState } from './ScrollState.class';
import {ScrollHandler} from './ScrollHandler.class';
import { ScrollListenerConfig } from '../interface/IScrollListenerConfig';
import { ScrollStrategy } from './ScrollStrategy.class';
export class ScrollListener {
   private scrollState:ScrollState;
   private scrollHandler:ScrollHandler;

   constructor(config: ScrollListenerConfig){
      this.scrollState=new ScrollState();
      const scrollStrategy = new ScrollStrategy(config);
      this.scrollHandler=new ScrollHandler(this.scrollState,scrollStrategy);
      this.scrollHandler.subscribe();
   }
   get ScrollState() {
      return this.scrollState;
   }
   cleanup() {
      this.scrollHandler.unsubscribe();
   }
}