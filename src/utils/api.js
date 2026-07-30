import { mockDB } from '../data/mockDB';

// Simula la latencia de red (network latency)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper para obtener el usuario autenticado
const getAuthUser = () => {
  const token = localStorage.getItem('accessToken');
  if (token && token.startsWith('fake-access-token-')) {
    const id = token.replace('fake-access-token-', '');
    return { id };
  }
  return null;
};

// Generador de tokens aleatorios para las salas
const generateToken = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

const handleRequest = async (method, url, data) => {
  // Simulamos un delay base
  await delay(500);

  // AUTH RUTAS
  if (url === '/auth/login' && method === 'post') {
    const usuarios = mockDB.getUsuarios();
    const user = usuarios.find(u => u.correo === data.correo && u.password === data.password);
    if (!user) throw { response: { status: 401, data: { message: 'Credenciales inválidas' } } };
    
    // Create fake tokens
    const accessToken = 'fake-access-token-' + user.id;
    const refreshToken = 'fake-refresh-token-' + user.id;
    
    return { data: { accessToken, refreshToken, user } };
  }

  if (url === '/auth/profile' && method === 'get') {
    const authUser = getAuthUser();
    if (!authUser) throw { response: { status: 401 } };
    
    const usuarios = mockDB.getUsuarios();
    const user = usuarios.find(u => u.id === authUser.id);
    return { data: user };
  }

  // TEMAS RUTAS
  if ((url === '/temas' || url === 'http://localhost:3000/api/v1/temas') && method === 'get') {
    return { data: mockDB.getTemas() };
  }

  // ACTIVIDAD RUTAS
  if (url === '/actividad/historial' && method === 'get') {
    const authUser = getAuthUser();
    if (!authUser) throw { response: { status: 401 } };
    
    const allActivities = mockDB.getActividades();
    const userActivities = allActivities.filter(a => a.usuarioId === authUser.id);
    return { data: { data: userActivities } };
  }

  if (url.startsWith('/actividad/token/') && url.endsWith('/ranking') && method === 'get') {
    return { data: [] }; // Mock empty ranking
  }

  if (url.startsWith('/actividad/token/') && !url.endsWith('/ranking') && !url.endsWith('/score') && method === 'get') {
    const token = url.split('/token/')[1];
    const allActivities = mockDB.getActividades();
    const actividad = allActivities.find(a => a.tokenCorto === token);
    if (!actividad) throw { response: { status: 404, data: { error: 'Actividad no encontrada' } } };
    return { data: actividad };
  }

  if (url.startsWith('/actividad/token/') && url.endsWith('/score') && method === 'post') {
    return { data: { success: true } };
  }

  if (url.startsWith('/actividad/') && url.endsWith('/reporte') && method === 'get') {
    return { data: { url: '#' } };
  }

  if (url.startsWith('/exportar/') && method === 'get') {
    return { data: 'mock-docx-data-base64', headers: { 'content-type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' } };
  }

  if (url.startsWith('/actividad/') && method === 'delete') {
    const id = url.split('/actividad/')[1];
    const allActivities = mockDB.getActividades();
    const filtered = allActivities.filter(a => a.id !== id);
    mockDB.saveActividades(filtered);
    return { data: { message: 'Eliminado' } };
  }

  // GENERAR RUTA
  if (url === '/generar' && method === 'post') {
    const authUser = getAuthUser();
    if (!authUser) throw { response: { status: 401 } };

    // Simulamos la latencia de un LLM generando contenido
    await delay(2000);

    const temas = mockDB.getTemas();
    const tema = temas.find(t => t.id === data.temaId);
    
    const nombreTema = tema ? tema.nombre : 'este tema';
    const areaTema   = tema ? tema.area   : 'el área';

    let dataIa = {};
    if (data.motor === 'RPG') {
      dataIa = {
        personajes: [
          { nombre: 'Estudiante', hp: 100 },
          { nombre: 'Jefe de ' + areaTema, hp: 80 }
        ],
        escenas: [
          {
            pregunta: `¿Cuál es el concepto principal de "${nombreTema}"?`,
            opciones: ['La base teórica del tema', 'Una aplicación práctica errónea', 'Un concepto de otra área', 'No tiene utilidad curricular'],
            respuesta: 0
          },
          {
            pregunta: `Si aplicas "${nombreTema}" en la vida real, ¿qué resultado obtienes?`,
            opciones: ['Se resuelve un problema concreto', 'Se genera confusión adicional', 'No cambia nada', 'Solo sirve en teoría'],
            respuesta: 0
          },
          {
            pregunta: `¿En qué área curricular se trabaja "${nombreTema}"?`,
            opciones: [areaTema, 'Educación Física', 'Arte y Cultura', 'Inglés'],
            respuesta: 0
          }
        ]
      };
    } else if (data.motor === 'TD') {
      dataIa = {
        preguntasTrivia: [
          {
            pregunta: `¿Cuál es la característica principal de "${nombreTema}"?`,
            opciones: ['Permite comprender y aplicar el tema', 'Es una actividad física', 'No tiene relación con el currículo', 'Solo se usa en primaria'],
            respuesta: 0
          },
          {
            pregunta: `¿En qué área se estudia "${nombreTema}"?`,
            opciones: [areaTema, 'Ciencias Sociales', 'Inglés', 'Arte y Cultura'],
            respuesta: 0
          },
          {
            pregunta: `¿Cuál de estos es un ejemplo de "${nombreTema}"?`,
            opciones: [`Aplicación directa de ${nombreTema}`, 'Concepto ajeno al tema', 'Actividad deportiva', 'Recurso de otra materia'],
            respuesta: 0
          },
          {
            pregunta: `¿Qué habilidad desarrolla "${nombreTema}" en el estudiante?`,
            opciones: ['Pensamiento crítico y analítico', 'Habilidad motriz fina', 'Expresión artística', 'Comunicación oral únicamente'],
            respuesta: 0
          },
          {
            pregunta: `¿Cómo se evalúa el aprendizaje de "${nombreTema}"?`,
            opciones: ['Mediante resolución de problemas', 'Solo con exámenes escritos', 'No se evalúa', 'Con actividades físicas'],
            respuesta: 0
          }
        ]
      };
    } else if (data.motor === 'ACCION') {
      dataIa = {
        escenas: [
          {
            pregunta: `¿Cuál es la definición correcta de "${nombreTema}"?`,
            opciones: [`Definición precisa de ${nombreTema}`, 'Concepto incorrecto del tema', 'Definición de otro tema', 'Ninguna de las anteriores'],
            respuesta: 0
          },
          {
            pregunta: `¿Qué elemento es fundamental en "${nombreTema}"?`,
            opciones: [`Elemento clave de ${nombreTema}`, 'Elemento ajeno al tema', 'Dato irrelevante', 'Concepto opuesto'],
            respuesta: 0
          },
          {
            pregunta: `¿Cómo se aplica "${nombreTema}" en un contexto real?`,
            opciones: [`Aplicando los principios de ${nombreTema}`, 'Ignorando el concepto base', 'Mezclando con otra área', 'No tiene aplicación real'],
            respuesta: 0
          },
          {
            pregunta: `¿Qué relación tiene "${nombreTema}" con "${areaTema}"?`,
            opciones: [`Es un contenido central de ${areaTema}`, 'No tiene relación con el área', 'Es de nivel universitario', 'Solo aplica en primaria'],
            respuesta: 0
          },
          {
            pregunta: `¿Cuál es el error más común al estudiar "${nombreTema}"?`,
            opciones: ['Confundir los conceptos base', `Aplicar correctamente ${nombreTema}`, 'Relacionarlo con su área', 'Practicar con ejemplos'],
            respuesta: 0
          }
        ]
      };
    } else {
      // Fallback genérico con 4 opciones válidas
      dataIa = {
        escenas: [
          {
            pregunta: `¿Cuál es el concepto central de "${nombreTema}"?`,
            opciones: [`Concepto correcto de ${nombreTema}`, 'Concepto incorrecto A', 'Concepto incorrecto B', 'Concepto incorrecto C'],
            respuesta: 0
          }
        ]
      };
    }

    const newActivity = {
      id: 'act-' + Date.now(),
      temaId: data.temaId,
      tipoMotor: data.motor,
      usuarioId: authUser.id,
      tokenCorto: generateToken(),
      titulo: `Desafío de ${tema ? tema.nombre : 'Aprendizaje'}`,
      descripcion: `Una aventura interactiva para dominar ${tema ? tema.nombre : 'el tema'}.`,
      dataIa: dataIa,
      scores: [],
      createdAt: new Date().toISOString()
    };

    const allActivities = mockDB.getActividades();
    allActivities.push(newActivity);
    mockDB.saveActividades(allActivities);

    return { data: { ...newActivity, token: newActivity.tokenCorto } };
  }

  // Rutas mock por defecto
  return { data: {} };
};

const api = {
  get: (url, config) => handleRequest('get', url, null, config),
  post: (url, data, config) => handleRequest('post', url, data, config),
  put: (url, data, config) => handleRequest('put', url, data, config),
  delete: (url, config) => handleRequest('delete', url, null, config),
};

export default api;
