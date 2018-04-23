<template>
    <section id="usuario-nao-autenticado-cover">
        <div id="cover-caption">
            <div class="container">
                <div class="text-center">
                   <b-img src="/static/img/logotipoEXT.png" id="logot" fluid alt="Logo"/>
                    <div class="text-center" style="padding-top: 20px;">
                        <router-link class="btn btn-outline-info btn-lg" role="button" aria-pressed="true" to="/login">Entrar</router-link>
                        <router-link class="btn btn-outline-info btn-lg" role="button" aria-pressed="true" to="/cadastro">Cadastrar-se</router-link>
                    </div>
                </div>
            </div>    
        </div>
    </section>
</template>


<script>
export default {
   
}
</script>


<style>
    
    #usuario-nao-autenticado-cover {
        height: 100vh;
        width: 100vw;
        background-color: #ffffff;
        background-size: cover;
        text-align: center;
        display: flex;
        align-items: center;

    }
    #cover-caption {
        width: 100%;
    }
    
    #logot{
         display: block;
        align-content: center;
    
    }
    
    .btn {
        border-radius: 50px;
        margin: 3px;
    }
</style>