import { Page } from '@playwright/test';
import { LoginUI} from '../ui/LoginUI';
import { Interaccion } from '../actions/Interaccion';

export class LoguearUsuario {

  
 
  static conDatos(usuario: string, password: string)
   {
    return async (page: Page) => {
      // Delega la escritura a la acción
      await Interaccion.escribirEn(LoginUI.inputUsuario, usuario)(page);
      await Interaccion.escribirEn(LoginUI.inputpassword, password)(page);
    
      
      // Delega el clic a la acción
      await Interaccion.hacerClicEn(LoginUI.botonIngresar)(page);
    };
  }
}
