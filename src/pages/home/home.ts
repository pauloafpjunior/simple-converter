import { Conversor } from './../../util/conversor';
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _valor: number;
  private _conversor: string;
  private _inverter: boolean;

  constructor(private toastCtrl: ToastController) {
    this._valor = 0;
    this._conversor = "c2f";
    this.inverter = false;
  }

  set valor(valor: number) { this._valor = valor; }
  set conversor(conversor: string) { this._conversor = conversor; }
  set inverter(inverter: boolean) { this._inverter = inverter; }

  get valor() { return this._valor; }
  get conversor() { return this._conversor; }
  get invterter() { return this._inverter; }

  converter() {
    switch (this._conversor) {
      case 'c2f': return Conversor.celsius2far(this._valor, this._inverter);
      case 'p2m': return Conversor.pes2metros(this._valor, this._inverter);
    }
  }

  mostrarConversao() {
    let valorConvertido = this.converter();
    const toast = this.toastCtrl.create({
      message: 'Valor convertido = ' + new DecimalPipe("en").transform(valorConvertido, "1.2-2"),
      duration: 3000
    });
    toast.present();
  }

}
