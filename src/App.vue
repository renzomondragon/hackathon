<template>
<div>

   <v-app v-if="estado==false && otroestado==false && otrootro==false">
    <index></index>
  </v-app>
  <v-app v-if="estado==false && otroestado==true &&  otrootro==false">
    <Login></Login>
  </v-app>
  <!-- <v-app 
  v-if="(token!=null || accessToken!=null) && estado==false && (localStorageLength>0 && localStorageLength<3) && (((lenghLS>0 && lenghLS<3) || (lenghLS==null)) ||  (otherLenght>0 && otherLenght<3 || otherLenght==null))">
    <Carga></Carga>
  </v-app>  -->

  <v-app
  v-if="estado==false && otroestado==false &&  otrootro==true">
    <NavBar></NavBar>
    <Contenido></Contenido>
    <Menu></Menu>
    <Footer></Footer> 
  </v-app>  

</div>
</template>


<script>
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import Maps from './components/Maps';
import Contenido from './components/Contenido';
import index from './components/index';
/* import Carga from './components/Carga' */


/* import RegitrarDenuncia from './components/RegistrarDenuncia'; */
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    index, 
    NavBar,
    Menu,
    Footer, 
    Login,
    Profile, 
    Maps, 
    Contenido,
   /*  Carga, */

  },
  data: () => ({
    accessToken: null,
    state: localStorage.getItem('estado'),
    lenghLS: 0,
    otherLenght:0,
    


  }),
  computed: {
    ...mapState(['token','estado', 'localStorageLength', 'objects', 'otroestado', 'otrootro']),
    lenght(){
      this.lenghLS = parseInt(localStorage.getItem('objects'))
    }
  },
  mounted(){
    this.$store.dispatch('misDenuncias')
    this.$store.dispatch('procesoDenuncias')
    this.$store.dispatch('getComisarias')

  }
  /* mounted() {
   console.log(this.localStorageLength)
    console.log(this.lenghLS) 
     localStorage.removeItem('token')
     localStorage.removeItem('objects') 
     localStorage.removeItem('estado')
     localStorage.removeItem('usuario')  
    try {
    this.$store.commit('localStorageLength', localStorage.getItem('objects'))
    this.$store.commit('otherLenght', localStorage.getItem('objects'))
    this.lenghLS = parseInt(localStorage.getItem('objects'))
     
    this.state = localStorage.getItem('estado') 
    this.accessToken = localStorage.getItem('token')     
    console.log(this.token)
    console.log(this.estado)
    console.log(this.otroestado)

    } catch (error) {
    }
  }, */
  /* updated(){

  } */



};
</script>



