<template>
    <v-footer
      color="#3F004F"
      height="auto"
    >
      <v-row>
        <v-col>
            <v-img
                src="@/assets/img-footer1.png"
                class="img-footer"
                id="img-footer1"
            ></v-img>
        </v-col>

        <v-col id="text-footer">
            <p>LSM</p>
            <p>Lengua de Señas Mexicana</p>
        </v-col>

        <v-col>
            <v-img
                src="@/assets/img-footer2.png"
                class="img-footer"
                id="img-footer2"
            ></v-img>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script lang="ts" setup>
  //
</script>

<style>
.img-footer{
    width: 89px;
    height: 65px;
}

#img-footer2{
    float: right;
}

#text-footer{
    color: white;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 6px;
    margin-bottom: 6px;
}
</style>