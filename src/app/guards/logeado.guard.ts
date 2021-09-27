import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LogeadoGuard implements CanActivate {

  usuario: usuario = null;
  constructor(private storage: Storage, private router: Router) {


  }

  async status() {
    this.usuario = await this.storage.get('wacoldo');
    console.log(this.usuario.sesion);
    if (this.usuario.sesion === 1) {
      return true;
    }
    else{
      this.router.navigate(['/login']);
    }
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.status();


  }

}
