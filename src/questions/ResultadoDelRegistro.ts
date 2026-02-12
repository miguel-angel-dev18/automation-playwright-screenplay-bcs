import { Page } from '@playwright/test';
import { RegistroUI } from '../ui/RegistroUI';
import { expect } from '@playwright/test';

export class ResultadoDelRegistro {
  static async textoVisible(page: Page): Promise<string> {
    const locator = page.locator(RegistroUI.mensajeResultado);
    
    // 1. Espera a que el elemento aparezca (Estado visible)
    await locator.waitFor({ state: 'visible' });

    // 2. REINTENTO AUTOMÁTICO
    await expect(locator).not.toHaveText("", { timeout: 10000 }); 

    const texto = await locator.textContent();
    return texto?.trim() || "";
  }
}