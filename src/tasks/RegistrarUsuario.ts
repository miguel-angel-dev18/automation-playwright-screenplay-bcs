import { Page } from '@playwright/test';
import { RegistroUI } from '../ui/RegistroUI';

export class RegistrarUsuario {
 
  static conDatos(nombre: string, email: string, pass: string) {
    return async (page: Page) => {
      await page.fill(RegistroUI.inputNombre, nombre);
      await page.fill(RegistroUI.inputEmail, email);
      await page.fill(RegistroUI.inputPassword, pass);
      await page.click(RegistroUI.botonRegistrar);
    };
  }
}