import { Page } from '@playwright/test';
import { RegistroUI } from '../ui/RegistroUI';

export class ResultadoDelRegistro {
  // La lógica de "cómo obtener el mensaje" vive aquí y solo aquí
  static async textoVisible(page: Page): Promise<string | null> {
    const locator = page.locator(RegistroUI.mensajeResultado);
    return await locator.textContent();
  }
}