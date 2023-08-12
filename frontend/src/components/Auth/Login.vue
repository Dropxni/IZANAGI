<!-- frontend/src/components/Auth/Login.vue -->
<template>
    <div>
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Correo electrónico" />
        <input v-model="contraseña" type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        contraseña: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/api/auth/login', {
            email: this.email,
            contraseña: this.contraseña,
          });
          const token = response.data.token;
          // Almacenar el token en Vuex o en localStorage
          alert('Inicio de sesión exitoso');
          // Redirigir a la página principal
        } catch (error) {
          alert('Error al iniciar sesión');
        }
      },
    },
  };
  </script>
  