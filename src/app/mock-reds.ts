import { Red } from './red';
import { PROYECTO_CONECTATE } from './mock-proyecto-conectate';

export const REDS : Red[] = [
  {
    codigo: 'RED001',
    nombre: 'infografía para el curso Educación, Juventud y Drogas',
    nombreCorto: 'infografía drogas',
    descripcion: 'esta es una descripción breve',
    fechaInicio: '2019-02-10',
    fechaCierre: '2019-04-01',
    fechaCreacion: '2016-02-01',
    porcentajeAvance: 80,
    tipo: 'infografía',
    solicitante: 'la profe',
    horasTrabajadas: 50,
    horasEstimadas: 60,
    proyectoConectate: PROYECTO_CONECTATE,
    historialEstados: [
      {
        fechaCambio: '2019-02-10',
        nombreEstado: 'Preproducción',
      },
      {
        fechaCambio: '2019-02-20',
        nombreEstado: 'Producción',
      },
    ],
  },
  {
    codigo: 'RED002',
    nombre: 'video para el curso Educación, Juventud y Drogas',
    nombreCorto: 'video drogas',
    descripcion: 'esta es una descripción breve',
    fechaInicio: '2019-02-25',
    fechaCierre: '2019-04-05',
    fechaCreacion: '2016-02-01',
    porcentajeAvance: 90,
    tipo: 'video',
    solicitante: 'la profe',
    horasTrabajadas: 110,
    horasEstimadas: 130,
    proyectoConectate: PROYECTO_CONECTATE,
    historialEstados: [
      {
        fechaCambio: '2019-02-25',
        nombreEstado: 'Preproducción',
      },
    ],
  },
  {
    codigo: 'RED003',
    nombre: 'animación para el curso Educación, Juventud y Drogas',
    nombreCorto: 'animación drogas',
    descripcion: 'esta es una descripción breve',
    fechaInicio: '2019-02-25',
    fechaCierre: '2019-04-05',
    fechaCreacion: '2016-02-01',
    porcentajeAvance: 50,
    tipo: 'animación',
    solicitante: 'la profe',
    horasTrabajadas: 110,
    horasEstimadas: 130,
    proyectoConectate: PROYECTO_CONECTATE,
    historialEstados: [
      {
        fechaCambio: '2019-02-25',
        nombreEstado: 'Preproducción',
      },
      {
        fechaCambio: '2019-02-28',
        nombreEstado: 'Producción',
      },
      {
        fechaCambio: '2019-03-24',
        nombreEstado: 'Postproducción',
      },
    ],
  },
]