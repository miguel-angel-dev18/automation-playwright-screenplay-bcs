import { test, expect } from '@playwright/test';
import { Actor } from '../src/actors/Actor';
import { SimularCredito } from '../src/tasks/SimularCredito';
import { DATA_SIMULADOR } from '../src/data/Constantes';
import { ResultadoDelSimulador } from '../src/questions/ResultadoDelSimulador';

test.beforeEach(async ({ page }) => {
  await page.goto('/simulador.html'); // la ruta relativa
});

test('usuario simula credito', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Miguel Angel', page);
  const datos = DATA_SIMULADOR.escenarioExitoso;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    SimularCredito.conDatos(datos.monto)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDelSimulador.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('12.000 COP');
});

test('usuario simula credito con monto 0', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Miguel Angel', page);
  const datos = DATA_SIMULADOR.escenarioMontoCero;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    SimularCredito.conDatos(datos.monto)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDelSimulador.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('El monto debe ser mayor que 0');
});

test('usuario simula credito con monto Negativo', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Miguel Angel', page);
  const datos = DATA_SIMULADOR.escenarioMontoNegativo;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    SimularCredito.conDatos(datos.monto)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDelSimulador.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('El monto debe ser mayor que 0');
});


test('usuario simula credito  monto inválido con letras', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Miguel Angel', page);
  const datos = DATA_SIMULADOR.escenarioMontoLetras;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    SimularCredito.conDatos(datos.monto)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDelSimulador.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('El monto debe ser numérico');
});

