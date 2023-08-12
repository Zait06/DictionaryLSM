<template>
    <div class="cont-img-lsm">
        <v-img
        src="@/assets/lsm-img.png"
        class="img-dicc-lsm"
        ></v-img>
    </div>
    <div id="cont-pag-palabras">
        <p>Seleccionar letra...</p>
        <ul id="alfabeto">
            <li v-for="x in alphabet">{{ x }} |</li>
        </ul>
        <div id="cont-buscador">
            <input type="text" placeholder="Buscar palabra..." id="buscador">
            <v-icon icon="fas fa-magnifying-glass" id="search-icon"/>
        </div>
        <div id="words-list">
            <h2>Palabras en español.</h2>
            <ul>
                <li>Palabra 1</li>
                <li>Palabra 2</li>
                <li>Palabra 3</li>
                <li>Palabra 1</li>
                <li>Palabra 2</li>
                <li>Palabra 3</li>
                <li>Palabra 1</li>
                <li>Palabra 2</li>
                <li>Palabra 3</li>
                <li>Palabra 1</li>
                <li>Palabra 2</li>
                <li>Palabra 3</li>
            </ul>
        </div>
    </div>
</template>

<style>
#alfabeto, #cont-pag-palabras p, h2{
    margin: 15px;
    text-align: justify;
}
#alfabeto li{
    display: inline;
    margin-right: 5px;
    list-style-type: none;
}
#alfabeto li:hover, #words-list ul li:hover{
    cursor: pointer;
    color: #01B413;
}
#cont-buscador{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
#buscador{
    border: 1px solid black !important;
    width: 350px !important;
    border-radius: 10px;
}
#search-icon{
    margin-left: 10px;
}
#words-list ul{
    margin-left: 30px;
}
</style>

<script lang="ts">
  export default {
    data(){
        return {
            alphabet: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
        }
    },
  }
</script>