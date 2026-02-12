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
  escenarioBug: {
    monto: '0',
    mensajeEsperado: 'Monto inválido'
  },
  escenarioExitoso: {
    monto: '1000000',
    mensajeEsperado: 'Simulación procesada'
  }
};