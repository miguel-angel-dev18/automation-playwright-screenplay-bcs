export const DATA_REGISTRO = {
  usuarioValido: {
    nombre: 'Miguel Angel',
    email: 'prueba@ejemplo.com',
    password: 'Password123'
  },
  usuarioNoValido:{
    nombre: '',
    email: '',
    password: ''

  },
   usuarioConEspacios:{
    nombre: '     Miguel    ',
    email: '   prueba@gmail.com    ',
    password: '123456'

  }
};


export const DATA_LOGIN = {
  usuarioRegistrado: {
    usuario: 'admin',
    password: '1234'
    
  },
  usuarioNoRegistrado:{
    usuario: 'test',
    password: '8965'

  },

  usuarioCamposVacios:{
    usuario: '',
    password: ''

  }
};

export const DATA_SIMULADOR = {
  escenarioMontoCero: {
    monto: '0',
   
  },

   escenarioMontoNegativo: {
    monto: '-892',
    
  },
  escenarioExitoso: {
    monto: '1000000',
    
  },

   escenarioMontoLetras: {
    monto: 'cien mil cop',
    
  }
};