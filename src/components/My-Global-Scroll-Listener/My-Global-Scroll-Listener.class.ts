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
      const navigationBarElement=document.querySelector('.barra-navegacion') as Element;
      if (scrollY>150) {
         //console.log(scrollY);
         navigationBarElement.classList.add('fixed-top')
      } else {
         //console.log(scrollY);
         navigationBarElement.classList.remove('fixed-top')
      }
   }
}