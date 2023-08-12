<!-- frontend/src/components/Auth/Register.vue -->
<template>
    <div>
      <h2>Registro de Usuario</h2>
      <form @submit.prevent="register">
        <input v-model="nombre" placeholder="Nombre" />
        <input v-model="email" type="email" placeholder="Correo electrónico" />
        <input v-model="contraseña" type="password" placeholder="Contraseña" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nombre: '',
        email: '',
        contraseña: '',
      };
    },
    methods: {
      async register() {
        try {
          await axios.post('/api/auth/register', {
            nombre: this.nombre,
            email: this.email,
            contraseña: this.contraseña,
          });
          alert('Registro exitoso');
          // Redirigir a la página de inicio de sesión
        } catch (error) {
          alert('Error al registrar usuario');
        }
      },
    },
  };
  </script>
  