# Banco Caja Social – QA Automation Challenge

## 1. Objetivo
Implementar una solución de automatización UI que valide los flujos críticos del sistema (**Registro, Login y Simulador**), bajo un enfoque estructurado, mantenible y escalable.

Para asegurar un proceso de pruebas robusto, se diseñó un entorno controlado compuesto por:

* **Backend Mock:** Desarrollado en `Node.js` + `Express` para simular respuestas del servidor.
* **Frontend Mock:** Interfaz en `HTML` diseñada específicamente para pruebas de integración.
* **Automatización UI:** Implementada con `Playwright` y `TypeScript`, utilizando patrones de diseño para mayor mantenibilidad.
* **Integración Continua (CI/CD):** Configuración de `GitHub Actions` para la ejecución automática de la suite de pruebas. 


## 2. Arquitectura del Proyecto

```
AUTOMATION_BANCO_CAJA_SOCIAL
│
├── .github/workflows/
│   └── playwright.yml
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── login.html
│   ├── registro.html
│   └── simulador.html
│
├── src/
│   ├── actors/
│   ├── tasks/
│   ├── actions/
│   ├── questions/
│   ├── ui/
│   └── data/
│
├── tests/
│   ├── login.spec.ts
│   ├── registro.spec.ts
│   └── simulador.spec.ts
│
└── playwright-report/
```
## 3. Patrón de Diseño
### Screenplay Pattern
Se implementó Screenplay para:

* Separar responsabilidades
* Reducir acoplamiento
* Mejorar legibilidad de flujos
* Permitir escalabilidad futura

### Estructura aplicada:

* **Actors** → Representan el usuario
* **Tasks** → Modelan comportamiento de negocio
* **Actions** → Interacciones técnicas
* **Questions** → Validaciones y aserciones
* **UI** → Centralización de localizadores
* **Data** → Constantes reutilizables

La elección de Screenplay sobre POM tradicional se basó en mayor mantenibilidad y mejor modelado semántico del comportamiento.
## 4. Stack Tecnológico
* **Node.js**
* **Express**
* **HTML5**
* **Playwright**
* **TypeScript**
* **GitHub Actions**
## 5. Estrategia de Pruebas
Se automatizaron los flujos críticos:

* Registro exitoso y validaciones negativas
* Login exitoso y credenciales inválidas
* Validación de campos obligatorios
* Simulación de monto válido e inválido

Se incluyeron escenarios negativos para validar manejo de errores y correcta generación de reportes.
## 6. Reportes
Playwright genera reporte HTML con:

* **Evidencias**
* **Stacktrace**
* **Tiempos de ejecución**
* **Casos fallidos y exitosos**

### Ejecución:
```bash
npx playwright test
npx playwright show-report
## 8. Instrucciones de Ejecución
```
### Levantar backend
```bash
cd backend
node server.js
```
### Disponible en:
[http://127.0.0.1:3000](http://127.0.0.1:3000)

## 9. Decisiones Técnicas

* Se creó un entorno mock para evitar dependencias externas.
* Se utilizó Screenplay para mejorar mantenibilidad.
* Se estructuró el proyecto bajo principios de separación de responsabilidades.
* Se integró CI para demostrar enfoque orientado a calidad continua.
