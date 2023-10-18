export class MyGlobalScrollListener extends HTMLElement{
   constructor(){
      super();
      this.handleScroll=this.handleScroll.bind(this);
   }
   connectedCallback(){
      globalThis.addEventListener('scroll', this.handleScroll);
   }
   disconnectedCallback(){
      globalThis.removeEventListener('scroll', this.handleScroll);
   }
   handleScroll() {
      const scrollY = globalThis.scrollY;
      if (scrollY>233) {
         console.log(scrollY);
      } else {
         console.log(scrollY);
      }
   }
}