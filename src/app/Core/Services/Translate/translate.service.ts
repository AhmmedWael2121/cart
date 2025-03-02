import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslateServices {
  //initiate render2 to deal with DOM 
  private readonly render2 = inject(RendererFactory2).createRenderer(null,null);
    _pLATFORM_ID = inject(PLATFORM_ID) 
  constructor(private _translateService:TranslateService) { 
    // set defult language
    if(isPlatformBrowser(this._pLATFORM_ID)){
      this._translateService.setDefaultLang("en")
      const lang = localStorage.getItem('lang');
      // get lang from local storage
      if (lang) {
        this._translateService.use(lang!);
      }
      this.changeDirection()
      
    }




  }
  changeDirection():void{
    
  // better to use render2 than (DOM-->Document)
  // render2 not work on server mode ---> inject renderFactory2 
  // Create instance called render for assign new render2
  
    if(localStorage.getItem('lang')==='en'){
     // document.documentElement.dir ='ltr'
     this.render2.setAttribute(document.documentElement,'dir','ltr')
     this.render2.setAttribute(document.documentElement,'lang','en')
    }
    else if(localStorage.getItem('lang')==='ar'){
      //document.documentElement.dir ='rtl'
      this.render2.setAttribute(document.documentElement,'dir','rtl')
      this.render2.setAttribute(document.documentElement,'lang','ar')
    }

  }
  changeLang(lang:string):void{
    if(isPlatformBrowser(this._pLATFORM_ID)){
      localStorage.setItem('lang',lang)
      this._translateService.use(lang)
      this.changeDirection()
    }
  }
}
