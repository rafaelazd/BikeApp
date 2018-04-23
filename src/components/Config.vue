<template>
  <div class="cog">
      <nav class="navbar">
       <b-button class="btn btn-outline-secondary" v-bind:href="ini"> <i class="fa fa-arrow-left" aria-hidden="true"></i> </b-button> 
        <img src="/static/img/letreiro.png" class="mx-auto img-fluid" style="height: 100%;">
        <b-button class="btn btn-outline-secondary" v-bind:href="config"> <i class="fa fa-cog" aria-hidden="true"></i> </b-button> 
      </nav>
      <div class="button-group row">
            <b-button  class="btn btn-danger col options"><i class="fa fa-user" aria-hidden="true"></i><br><h6>Alterar Perfil</h6></b-button>
            <b-button class="col options btn-success"><i class="fa fa-question-circle" aria-hidden="true"></i><br><h6>Envie suas dúvidas</h6></b-button>
      </div>
      <div class="button-group row">
            <b-button class="col options btn-info"><i class="fa fa-info" aria-hidden="true"></i><br><h6>Quem somos nós</h6></b-button>
            <b-button class="col options btn-dark"><i class="fa fa-sign-out" aria-hidden="true"></i><br><h6>Sair</h6></b-button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            config: '#/config',
            ini: '#/inicio'
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400');
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
    .fa-arrow-left {
        color: white;
    }
    
    .options {
       height:300px;
       width:0px;
       cursor:pointer;
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 100px;
        margin-right: 100px;
        font-size: 50px;
        border-radius: 15px;
    }
    
    .options h6 {
        font-size: 19px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        text-align: center;
        margin-bottom: -10px;
    }
    
</style>
