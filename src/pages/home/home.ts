import { SplashScreen } from '@ionic-native/splash-screen';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as Acciones from './../../acciones/postAcciones';
import { Estado } from './../../reducers/postReducer';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  i:any=0;

  p:any = {
    titulo:"Post0",
    descripcion:"SoyUnPost"
  };

  posts: Observable<any>;

  subs:Subscription;

  constructor(public navCtrl: NavController, private store:Store<Estado>, public splashScreen: SplashScreen) {
    this.posts = store.select<any>("posts")
  }

  ionViewDidLoad(){
    this.splashScreen.hide();
  }

  agregarPost(){
    let id = Math.random().toString(36).substr(2, 10);
    this.store.dispatch(
      new Acciones.Agregar({
        id:id,
        titulo:this.p.titulo,
        descripcion:this.p.descripcion
      })
    );
    this.p.titulo=`Post${++this.i}`;
  }

  removerPost(post){
    this.store.dispatch(
      new Acciones.Borrar({
        id:post.id
      })
    );
  }

  resetearPost(){
    this.store.dispatch(
      new Acciones.Resetear({

      })
    );
  }

}
