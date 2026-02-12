import { Page } from '@playwright/test';
import { RegistroUI } from '../ui/RegistroUI';

export class ResultadoDelRegistro {
  //obtener el mensaje
  static async textoVisible(page: Page): Promise<string | null> {
    const locator = page.locator(RegistroUI.mensajeResultado);
    return await locator.textContent();
  }
}