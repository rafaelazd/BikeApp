<template>
   <section id="login-cover">
   <nav class="navbar navbar-dark">
            <b-button class="btn-outline-secondary" v-bind:href="url">🡠</b-button>
            <img src="/static/img/letreiro.png" class="mx-auto img-fluid" style="height: 100%;">
    </nav>
    <div class="mx-auto">
        <div class="vertical-center">
                <div class="nb-login center">
                   <h5>Informe seus dados pessoais, e os de sua bike!</h5>
                    <!-- Formulario -->
                    <div class="card-block" id="cadastro">
                        <form class="form" role="form" autocomplete="off" id="formLogin" action="">
                            <div class="form-group">
                            <input type="text" class="form-control" name="nome" required placeholder="Nome" id="nome">
                            </div>
                            <div class="form-group">
                            <input type="password" name="email" class="form-control" id="email" required placeholder="Email">
                            </div>
                             <b-form-textarea id="textarea1"
                                             v-model="text"
                                             placeholder="Informe o tipo de sua bicicleta, para facilitar o conserto "
                                             :rows="3"
                                             :max-rows="6">
                            </b-form-textarea>
                            <div class="check">
                                <b-form-checkbox id="checkbox1"
                                             v-model="status"
                                             value="accepted"
                                             unchecked-value="not_accepted">
                                             Eu concordo em compartilhar minha localização com o aplicativo. 
                            </b-form-checkbox>
                            </div>
                            <b-button class="btn btn-block" to="/inicio">Cadastrar</b-button>
                        </form>
                    </div>
                     <!--end Formulario -->
                </div>
        </div>
    </div>
  </section>
</template>


<script>
export default {
    data() {
        return {
            url: '#/',
        }
    }
}
</script>


<style scoped="true">
 @import url('https://fonts.googleapis.com/css?family=Exo|Open+Sans:300,400|Raleway:400,700,800|Poiret+One|Open+Sans+Condensed:300,300i');
    nav {
        background-color: #34495e;
        height: 53px;
        width: 100%;
        font-family: 'Exo', sans-serif;
        margin-top: -60px;
    }
    
    .nb-login {
        width: 200px;
        height: 600px;
        border-radius: 2px;
        text-align: center;
        margin-top: 100px;
        
    }
    
    .back {
        border-radius: 10px;
    }
    
    .center {
        margin: auto;
        margin-top: 5%;
        width: 50%;
        padding: 10px;
    }
    
    .nb-login h3 {
        font-size: 13px;
        line-height: 13px;
        margin: 15px 0px 25px 0px;
        text-transform: uppercase;
        color: #fff;
    }
    
    .nb-login form input,
    .nb-login form textarea {
    }
    
    .nb-login form input:focus {
        background: rgba(255, 255, 255, 0.05);
        color: #ecf0f1;
    }
    
    .nb-login .btn {
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 35px;
        background-color: #34495e;
         
    }
    
    .nb-login .cad {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    
    .nb-login h5 {
        font-size: 35px;
        font-family: 'Poiret One', cursive;
        margin-top: -10px;
        margin-bottom: 50px;
    }
    
    .nb-login .center {
        text-align: center;
    }
    
    .nb-login .or {
        color: #FFF;
    }
    
    .vertical-center {
        align-items: center;
        text-align: center;
    }
    
    .check {
       margin-top: 10px;
       font-family: 'Exo', sans-serif;
        color: darkgrey;
    }

</style>
