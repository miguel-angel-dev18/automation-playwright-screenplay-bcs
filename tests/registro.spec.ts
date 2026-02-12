import { test, expect } from '@playwright/test';
import { Actor } from '../src/actors/Actor';
import { RegistrarUsuario } from '../src/tasks/RegistrarUsuario';
import { ResultadoDelRegistro } from '../src/questions/ResultadoDelRegistro';
import { DATA_REGISTRO } from '../src/data/Constantes'; // Importamos datos


test.beforeEach(async ({ page }) => {
  await page.goto('/registro.html'); // la ruta relativa
});

test('Un usuario nuevo intenta registrarse en el portal', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Miguel Angel', page);
  const datos = DATA_REGISTRO.usuarioValido;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    RegistrarUsuario.conDatos(datos.nombre, datos.email, datos.password)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDelRegistro.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('Registro exitoso');
});

test('Un usuario nuevo intenta registrarse en el portal sin ingresar datos en el formulario', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Usuario Anonimo', page);
  const datos = DATA_REGISTRO.usuarioNoValido;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    RegistrarUsuario.conDatos(datos.nombre, datos.email, datos.password)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDelRegistro.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('Ingresar Datos');
});

test('Un usuario nuevo intenta registrarse en el portal Ingresa texto con espacios', async ({ page }) => {
  // 1. Inicializar  Actor con su nombre y la página (habilidad)
  const usuario = Actor.llamado('Usuario Anonimo', page);
  const datos = DATA_REGISTRO.usuarioConEspacios;

  // 2. El actor realiza la Tarea
  await usuario.intentar(
    RegistrarUsuario.conDatos(datos.nombre, datos.email, datos.password)
  );

  // 3. El actor hace una Pregunta
  const respuesta = await usuario.preguntar(ResultadoDelRegistro.textoVisible);

  // 4. Validación final
  expect(respuesta).toContain('los campos no debe tener espacios.');
});