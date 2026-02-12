import { Page } from '@playwright/test';
import { RegistroUI } from '../ui/RegistroUI';
import { Interaccion } from '../actions/Interaccion'; // Importa la capa de acciones

export class RegistrarUsuario {

  
 
  static conDatos(nombre: string, email: string, pass: string)
   {
    return async (page: Page) => {
      // Delega la escritura a la acción
      await Interaccion.escribirEn(RegistroUI.inputNombre, nombre)(page);
      await Interaccion.escribirEn(RegistroUI.inputEmail, email)(page);
      await Interaccion.escribirEn(RegistroUI.inputPassword, pass)(page);
      
      // Delega el clic a la acción
      await Interaccion.hacerClicEn(RegistroUI.botonRegistrar)(page);
    };
  }
}