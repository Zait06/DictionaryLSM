<template>
  <div id="cont-nav-bar">
    <v-bottom-navigation
      v-model="value"
      :elevation="0"
      grow
      :bg-color="color"
      color="#D9D9D9"
      id="navbar"
    >
      <v-btn>
        <router-link to="/" class="link-bar-nav">Inicio</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/" class="link-bar-nav">Palabras</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/" class="link-bar-nav">Contacto</router-link>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
  export default {
    data: () => ({ value: 1 }),

    computed: {
      color () {
        return '#3F004F'
      },
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#cont-nav-bar{
  height: 57px;
}

.link-bar-nav{
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}

.v-bottom-navigation__content{
  justify-content: left !important;
}

#navbar{
  top: 0;
}
</style>