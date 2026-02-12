import { Page } from '@playwright/test';
import { SimuladorUI} from '../ui/SimuladorUI';
import { Interaccion } from '../actions/Interaccion';

export class SimularCredito{


  static conDatos(monto: string)
   {
    return async (page: Page) => {
      // Delega la escritura a la acción
      await Interaccion.escribirEn(SimuladorUI.inputmonto,monto)(page);
      
      // Delega el clic a la acción
      await Interaccion.hacerClicEn(SimuladorUI.botonSimular)(page);
    };
  }
}