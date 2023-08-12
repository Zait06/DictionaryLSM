<template>
  <div class="cont-img-lsm">
    <v-img
      src="@/assets/lsm-img.png"
      class="img-dicc-lsm"
    ></v-img>
  </div>
  <div id="cont-pag-principal">
    <h1 class="title">Breve Historia</h1>
    <hr class="line-below-title">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <h1 class="title">Personajes Mexicanos</h1>
    <hr class="line-below-title">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <h1 class="title">Fechas importantes</h1>
    <hr class="line-below-title">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  
</template>

<script lang="ts" setup>
  //
</script>

<style>
.cont-img-lsm{
  display: flex;
  justify-content: center;
}

.img-dicc-lsm{
  width: 215px !important;
  height: 200px !important;
  margin-top: 30px;
}

#cont-pag-principal{
  margin-top: 30px;
}

.title{
  color: #892020;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

.line-below-title{
  background-color: #892020;
  width: 139px;
  height: 3px;
  margin: auto;
}

#cont-pag-principal p{
  margin: 15px;
  text-align: justify;
}

</style>