<template>
  <v-app>
    <default-bar />
      <router-view />
    <default-footer />
  </v-app>
  
</template>

<script lang="ts" setup>
  import DefaultBar from '@/layouts/default/AppBar.vue'
  import DefaultFooter from '@/layouts/default/AppFooter.vue'
</script>
