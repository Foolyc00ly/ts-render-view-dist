import {ScrollListenerConfig} from '../interface/IScrollListenerConfig';

export class ScrollStrategy {
   private readonly threshold: number;
   constructor(
      config: ScrollListenerConfig
   ){
      this.threshold = config.threshold;
   }
   shouldHandleScroll(scrollY: number):boolean{
      return scrollY > this.threshold;
   }
}