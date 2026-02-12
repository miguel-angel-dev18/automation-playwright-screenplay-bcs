import { Page } from '@playwright/test';

export class Interaccion {
  // Acción de escribir texto
  static escribirEn(selector: string, texto: string) {
    return async (page: Page) => {
      await page.fill(selector, texto);
    };
  }

  // Acción de hacer clic
  static hacerClicEn(selector: string) {
    return async (page: Page) => {
      await page.click(selector);
    };
  }

  // Acción de navegar
  static abrir(url: string) {
    return async (page: Page) => {
      await page.goto(url);
    };
  }
}