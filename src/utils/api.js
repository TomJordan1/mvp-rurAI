import { mockDB } from '../data/mockDB';
import { preguntasPorTema } from '../data/preguntasDB';

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
    const areaTema = tema ? tema.area : 'el área';

    // Obtener preguntas reales del banco centralizado
    const preguntasDelTema = preguntasPorTema[data.temaId] || preguntasPorTema['tema-1-1'];
    // Todas las preguntas usan convención: opciones[0] = correcta, respuesta = 0
    const preguntas = preguntasDelTema.map(p => ({
      pregunta: p.pregunta,
      opciones: [...p.opciones],
      respuesta: 0
    }));

    let dataIa = {};
    if (data.motor === 'RPG') {
      dataIa = {
        personajes: [
          { nombre: 'Estudiante', hp: 100 },
          { nombre: 'Jefe de ' + areaTema, hp: 80 }
        ],
        escenas: preguntas
      };
    } else if (data.motor === 'TD') {
      dataIa = {
        preguntasTrivia: preguntas
      };
    } else if (data.motor === 'ACCION') {
      dataIa = {
        personajes: [
          { nombre: 'Estudiante', hp: 100 },
          { nombre: 'Guardián de ' + (tema ? tema.nombre : 'Conocimiento'), hp: 100 }
        ],
        escenas: preguntas
      };
    } else {
      dataIa = {
        personajes: [
          { nombre: 'Estudiante', hp: 100 },
          { nombre: 'Jefe de ' + areaTema, hp: 80 }
        ],
        escenas: preguntas
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
