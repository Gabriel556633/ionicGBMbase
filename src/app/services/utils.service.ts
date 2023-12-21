import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  //constructor() { }
  loadingCtrl = inject(LoadingController);
  toastCrtl = inject(ToastController);
  router = inject(Router)



  //---------Loading---
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }
  //----------Toast---
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCrtl.create(opts);
    toast.present();
  }

  //////////////enruta a cualqueir pagina disponible///
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  //-------------guardar datos en local stotrage---
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }
  //-------------obtenemos datos en local stotrage---
  getInLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }


}
