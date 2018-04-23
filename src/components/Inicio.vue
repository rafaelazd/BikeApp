<template>
<div class="">
        <nav class="navbar">
            <img src="/static/img/letreiro.png" class="mx-auto img-fluid" style="height: 100%;">
            <b-button class="btn btn-outline-secondary" to="/config"> <i class="fa fa-cog" aria-hidden="true"></i> </b-button> 
        </nav>
    <div id="map">
      <v-map :zoom=16 :center="[-25.439287, -49.268833]">
        <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
        <v-marker :lat-lng="[-25.439287, -49.268833]"></v-marker>
      </v-map>
    </div>
    <div class="foot">
        <b-button class="btn btn-info" v-on:click="showhide">Chamar Ajuda</b-button>
        <b-button class="btn btn-light btn-circle"><i class="fa fa-location-arrow" aria-hidden="true"></i></b-button>
    </div>
    <div id="addFoto">
                <h5>Qual o seu problema?</h5>
                <b-form-textarea id="textarea3"
                         placeholder="Digite aqui o seu problema"
                         :rows="4"
                         :maxlength="900"
                         name="Descricao">
                </b-form-textarea>
                <b-button type="submit" class="btn btn-outline-danger" v-on:click="showhide">Cancelar</b-button>
                <b-button type="submit" class="btn btn-outline-success">Enviar ajuda</b-button>
            </div>
</div>
</template>

<script>
export default {
    methods: {
        showhide() {
           var div = document.getElementById("addFoto");
            if (div.style.display !== "block") {
                div.style.display = "block";
            }
            else {
                div.style.display = "none";
            }
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway:500');
    
    #map {
        width: 100vw;
        height: 100vh;
        z-index: -1000;
    }
    .navbar {
        background-color: #34495e;
        height: 53px;
        width: 100%;
        font-family: 'Exo', sans-serif;
        margin-top: -60px;
        z-index: 10000000;
    }
    
    .fa-cog {
        color: white;
    }
    
    .foot {
        position: fixed;
        left: 0;
        bottom:0;
        margin-left: 30px;
        margin-bottom: 30px;
        width:100%;
        background-color:  transparent;
        z-index: 100000000000;
    }
    
    .foot .btn-circle {
      width: 80px;
      height: 80px;
      font-size: 35px;
      border-radius: 55px;
      
    }
    
    .foot .btn-info {
      width: 180px;
      height: 80px;
      font-size: 25px;
      letter-spacing: 1.5px;
      border-radius: 55px;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      
    }
    
    h1, h2 {
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
    
    #addFoto {
        position: fixed;
        background-color:  white;
        border: 1px solid;
        border-color: #bdc3c7;
        z-index: 1000000000000000;
        top: 55%;
        left: 45%;
        width:50%;
        height:40%;
        margin-top: -9em;
        margin-left: -15em;
        box-shadow: 10px 30px 20px rgba(0,0,0,.5);
        padding: 20px;
        display: none;
    }
    
    #addFoto h4 {
        color: #34495e;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300; 
        text-align: left;
        margin-left: 20px;
        margin: 10px;
    } 
    
    #addFoto h5 {
        color: #34495e;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300; 
        text-align: left;
        margin-left: 10px;
    }

    #addFoto .inout {
        margin-top: 10px;
        margin-left: 20px;
    }
    
    #addFoto button {
        margin-top: 15px;
        margin-left: 20px;
    }
</style>
