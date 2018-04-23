<template>
   <section id="login-cover">
   <nav class="navbar navbar-dark">
            <b-button class="btn-outline-secondary" v-bind:href="url">🡠</b-button>
            <img src="/static/img/letreiro.png" class="mx-auto img-fluid" style="height: 100%;">
    </nav>
    
    <div class="mx-auto">
        <div class="vertical-center">
                <div class="nb-login center">
                   <h5>Informe seu login e senha.</h5>
                    <!-- Formulario -->
                    <div class="card-block" id="cadastro">
                        <form class="form" role="form" autocomplete="off" id="formLogin" action="">
                            <div class="form-group">
                            <input type="text" class="form-control" name="usuario" required placeholder="Usuário" id="usuario">
                            </div>
                            <div class="form-group">
                            <input type="password" name="senha" class="form-control" id="senha" required placeholder="Senha">
                            </div>
                            
                            <b-button class="btn1 btn-block btn-success" to="/inicio">Entrar</b-button>
                            <h6>Não tem uma conta?</h6>
                            <b-button variant="secondary"class="cad" to="/cadastro">Cadastre-se</b-button>
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
        min-width: 100vw;
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
    }
    .nb-login .btn1 {
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
    .nb-login h6 {
        font-size: 30px;
        font-family: 'Poiret One', cursive;
        margin-top: -10px;
        margin-bottom: 20px;
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
