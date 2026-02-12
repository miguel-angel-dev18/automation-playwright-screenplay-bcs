import { test, expect } from '@playwright/test';
import { Actor } from '../src/actors/Actor';
import { DATA_LOGIN } from '../src/data/Constantes';
import { LoguearUsuario } from '../src/tasks/LoguearUsuario';
import { ResultadoDeLogin } from '../src/questions/ResultadoDeLogin';


test.beforeEach(async ({ page }) => {
  await page.goto('/login.html'); // ruta relativa
});


test('usuario registrado ingresa en el portal', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Miguel Angel', page);
  const datos = DATA_LOGIN.usuarioRegistrado;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    LoguearUsuario.conDatos(datos.usuario, datos.password)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDeLogin.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('Bienvenido');
});

test('usuario NO registrado ingresa en el portal', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Anonimo', page);
  const datos = DATA_LOGIN.usuarioNoRegistrado;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    LoguearUsuario.conDatos(datos.usuario, datos.password)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDeLogin.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('Credenciales inválidas');
});


test('usuario intenta login sin ingresar datos', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Anonimo', page);
  const datos = DATA_LOGIN.usuarioCamposVacios;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    LoguearUsuario.conDatos(datos.usuario, datos.password)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDeLogin.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('Todos los campos son obligatorios');
});




