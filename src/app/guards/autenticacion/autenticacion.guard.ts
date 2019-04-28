import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const autenticado = this.autenticacionService.autenticado();

    if (!autenticado) {
      this.router.navigate(['']);
      return false;
    } else {
      const usuario = this.autenticacionService.obtenerDatosUsuario();
      const idRed = next.paramMap.get('idRed');
      const idUsuario = next.paramMap.get('idUsuario');

      // Verifica si la ruta a acceder es de un RED
      if (idRed) {
        return this.autenticacionService
          .confirmarAutorizado(idRed)
          .then((data: any) => {
            if (data.error) {
              this.router.navigate(['/reds/' + usuario.idConectate]);
              alert(
                'No tienes autorización para realizar acciones sobre este RED'
              );
              return false;
            } else {
              return true;
            }
          })
          .catch(err => {
            return true;
          });
      } else if (idUsuario) {
        // Verifica si la ruta a acceder es de un USUARIO
        if (idUsuario === usuario.idConectate) {
          return true;
        } else {
          this.router.navigate(['/reds/' + usuario.idConectate]);
          return false;
        }
      } else {
        return true;
      }
    }
  }
}
