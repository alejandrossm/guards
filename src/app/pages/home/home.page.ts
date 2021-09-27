import { Component } from '@angular/core';
import { usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: usuario = {
    username: '',
    password: '',
    sesion: 0
  }

  datos: usuario[] = [];


  constructor(private storage: Storage) { }

  onSubmit() {
    this.guardar();

  }

  async guardar() {

    let existe = await this.storage.get(this.usuario.username);
    console.log(existe);

    if (existe == null) {
      await this.storage.set(this.usuario.username, this.usuario);
      console.log("Usuario guardado");
    }
    else {
      console.log("EL usuario ya existe!!!");
    }

  }

  async cambiarEstado() {
    let objeto: usuario = await this.storage.get('wacoldo');
    if (objeto.sesion === 0) {
      objeto.sesion = 1;
    }
    else {
      objeto.sesion = 0;
    }
    await this.storage.set('wacoldo', objeto);
  }

  async cargarDatos() {

    let keys = await this.storage.keys();
    keys.forEach(async clave => {
      this.datos.push(await this.storage.get(clave));
    });
    console.log(this.datos);
  }

}
