// frontend/src/store/modules/auth.js
import axios from 'axios';

const state = {
  token: null,
};

const getters = {
  isAuthenticated: (state) => !!state.token,
};

const actions = {
  async register({ commit }, userData) {
    try {
      await axios.post('/api/auth/register', userData);
      alert('Registro exitoso');
    } catch (error) {
      alert('Error al registrar usuario');
    }
  },
  async login({ commit }, userData) {
    try {
      const response = await axios.post('/api/auth/login', userData);
      const token = response.data.token;
      commit('setToken', token);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
