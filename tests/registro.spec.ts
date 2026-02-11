import { test, expect } from '@playwright/test';
import { RegistrarUsuario } from '../src/tasks/RegistrarUsuario';
import { ResultadoDelRegistro } from '../src/questions/ResultadoDelRegistro';

test.describe('Pruebas de Registro - Banco Caja Social', () => {
  
  test('Debe mostrar el mensaje correcto tras el registro', async ({ page }) => {
    await page.goto('http://localhost:3000/registro.html');

    // Tarea: Acción pura
    await RegistrarUsuario.conDatos('Miguel Angel', 'm@test.com', 'Clave123')(page);

    // Question: Consulta pura
    const mensaje = await ResultadoDelRegistro.textoVisible(page);

    // Aserción: El test solo decide si el resultado es válido
    expect(mensaje).toContain('Registro exitoso'); 
  });

});