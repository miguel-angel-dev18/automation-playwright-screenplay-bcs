import { Page } from '@playwright/test';

export class Actor {
  private constructor(private readonly name: string, private readonly page: Page) {}

  // Método estático para "bautizar" al actor en el test
  static llamado(nombre: string, pagina: Page): Actor {
    return new Actor(nombre, pagina);
  }

  // Habilidad: El actor puede interactuar con la página
  intentar(tarea: (page: Page) => Promise<void>): Promise<void> {
    return tarea(this.page);
  }

  // Habilidad: El actor puede hacer preguntas a la página
  async preguntar<T>(pregunta: (page: Page) => Promise<T>): Promise<T> {
    return await pregunta(this.page);
  }
}