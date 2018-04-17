import { SplashScreen } from '@ionic-native/splash-screen';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as Acciones from './../../acciones/postAcciones';
import { Estado } from './../../reducers/tiendaReducer';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url = 'https://my-json-server.typicode.com/joralmo/demo/tiendas';

  i:any=0;

  t:any = {
    negocio:"",
    codigo:"",
    direccion:"",
    barrio:"",
    estado:0
  };

  tiendas: Observable<any>;

  subs:Subscription;

  constructor(public navCtrl: NavController, private store:Store<Estado>, 
              public splashScreen: SplashScreen, private apiProvider:ApiProvider) {
    this.tiendas = store.select<any>("tiendas")
  }

  ionViewDidLoad(){
    this.splashScreen.hide();
    this.getTiendas();
  }

  getTiendas(){
    this.apiProvider.get(this.url)
      .subscribe(tiendas => {
        for(let tienda of tiendas ){
          this.t = tienda;
          this.agregarTienda();
        }
      });
  }

  agregarTienda(){
    this.store.dispatch(
      new Acciones.Agregar({
        codigo:this.t.codigo,
        negocio:this.t.negocio,
        direccion:this.t.direccion,
        barrio:this.t.barrio,
        estado:this.t.estado
      })
    );
  }

  removerTienda(tienda){
    console.log(tienda.codigo)
    this.store.dispatch(
      new Acciones.Borrar({
        codigo:tienda.codigo
      })
    );
  }

  resetearTiendas(){
    this.store.dispatch(
      new Acciones.Resetear({

      })
    );
  }

}
