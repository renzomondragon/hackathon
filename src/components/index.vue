<template>
<div>
    <div class="jumbotron" style= "background-color:#F7C600;">
        <h1 class="display-4" ><span class="font0">El Comercio</span></h1><br>

        <a class="btn btn-primary btn-lg" @click="cambiar()"  role="button" style="background-color:black; border-color:black; color: white;">Realiza tu denuncia</a>
  
    </div>
    <div class = "container" >
        <div class="card-group">
                <div class="card">
                  <img src="../assets/entierro.jpg" class="card-img-top img-fluid" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">+3000</h5>
                    <p class="card-text">Personas que fallecieron en accidentes de pistas y carreteras en el Perú solo en el 2018.</p>
                    <p class="card-text"><small class="text-muted">Fuente: El Comercio</small></p>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/chofer.jpg" class="card-img-top img-fluid" alt="..." style="height:80%;">
                  <div class ="container">
                  <div class="card-body text-white bg-danger mb-3">
                    <h5 class="card-title">+8000</h5>
                    <p class="card-text">Conductores de transporte público, inhabilitados para manejar, siguen en las calles.</p>
                    <p  class="card-text"><small >Fuente: El Comercio</small></p>
                  </div>
                </div>
                </div>
                <div class="card">
                  <img src="../assets/51.jpg" class="card-img-top img-fluid" alt="..." Style="height:65%;">
                  <div class="card-body">
                    <h5 class="card-title">+400M</h5>
                    <p class="card-text">De soles es el total de deuda acumulada de multas por infracciones graves y muy graves. </p>
                    <p class="card-text"><small class="text-muted">Fuente: El Comercio</small></p>
                  </div>
                </div>
              </div>
            </div>

</div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
export default {
     data: () => ({
      
      
    }),
    computed:{
        ...mapState(['token', 'estado'])
    },
    methods:{
        ...mapActions(['cambiaIndex']),
        cambiar(){
            this.$store.dispatch('cambiaIndex')
        },

    },
    mounted(){
        /* this.$store.commit( localStorage.getItem('token'))
        this.$store.commit( localStorage.getItem('estado')) */
    }
}
</script>
 <style>
   @font-face{
   font-family:"canterbury-regular";
   src:
    url("../assets/Fonts/Canterbury.ttf") format("truetype");
     }
   span.font0{font-family:"canterbury-regular";font-size:100px;text-transform:none;}
 </style>