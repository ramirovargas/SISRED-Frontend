import { Usuario } from './usuario';
import { Red } from './Red';

export const REDS : Red[] = [

]

export const USUARIOS : Usuario[] = [
  {
    nombres: 'Sergio', 
    apellidos: 'Cárdenas',
    email: '',
    tipoIdentificacion: '',
    numeriIdentificacion: '',
    roles: [
      {
        fechaInicio: '10-02-2019',
        fechaFin: '',
        rol: '',
        usuario: undefined,
        red: {
          codigo: 'RED001',
          nombre: 'infografía para el curso Educación, Juventud y Drogas',
          nombreCorto: 'infografía drogas',
          descripcion: 'esta es una descripción breve',
          fechaInicio: '10-02-2019',
          fechaCierre: '01-04-2019',
          fechaCreacion: '01-02-2016',
          porcentajeAvance: 80,
          tipo: 'infografía',
          solicitante: 'la profe',
          horasTrabajadas: 50,
          horasEstimadas: 60,
        },
      },
      {
        fechaInicio: '10-02-2019',
        fechaFin: '',
        rol: '',
        usuario: undefined,
        red: {
          codigo: 'RED002',
          nombre: 'video para el curso Educación, Juventud y Drogas',
          nombreCorto: 'video drogas',
          descripcion: 'esta es una descripción breve',
          fechaInicio: '25-01-2019',
          fechaCierre: '05-04-2019',
          fechaCreacion: '01-02-2016',
          porcentajeAvance: 90,
          tipo: 'video',
          solicitante: 'la profe',
          horasTrabajadas: 110,
          horasEstimadas: 130,
        },
      },
    ]
  },
  {
    nombres: 'Jairo', 
    apellidos: 'Ruano',
    email: '',
    tipoIdentificacion: '',
    numeriIdentificacion: '',
    roles: [
      {
        fechaInicio: '10-03-2019',
        fechaFin: '',
        rol: '',
        usuario: undefined,
        red: {
          codigo: 'RED001',
          nombre: 'infografía para el curso Educación, Juventud y Drogas',
          nombreCorto: 'infografía drogas',
          descripcion: 'esta es una descripción breve',
          fechaInicio: '10-02-2019',
          fechaCierre: '01-04-2019',
          fechaCreacion: '01-02-2016',
          porcentajeAvance: 80,
          tipo: 'infografía',
          solicitante: 'la profe',
          horasTrabajadas: 50,
          horasEstimadas: 60,
        },
      },
      {
        fechaInicio: '10-02-2019',
        fechaFin: '',
        rol: '',
        usuario: undefined,
        red: {
          codigo: 'RED003',
          nombre: 'animación para el curso Educación, Juventud y Drogas',
          nombreCorto: 'animación drogas',
          descripcion: 'esta es una descripción breve',
          fechaInicio: '25-01-2019',
          fechaCierre: '05-04-2019',
          fechaCreacion: '01-02-2016',
          porcentajeAvance: 50,
          tipo: 'animación',
          solicitante: 'la profe',
          horasTrabajadas: 110,
          horasEstimadas: 130,
        },
      },
    ]
  },
]