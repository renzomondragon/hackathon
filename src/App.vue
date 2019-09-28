<template>
<div>
  <v-app v-if="estado==true">
    <Login></Login>
  </v-app> 
  <v-app v-if="estado==false"> 
    <NavBar></NavBar>
    <Contenido></Contenido>
    <Menu></Menu>
    <Footer></Footer> 
    
    <!-- <Profile></Profile> -->
    <!-- <Maps></Maps> -->
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
/* import RegitrarDenuncia from './components/RegistrarDenuncia'; */
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar,
    Menu,
    Footer,
    Login,
    Profile,
    Maps,
    Contenido

  },
  data: () => ({

    //
  }),
  computed: {
    ...mapState(['estado'])
  },
  mounted() {
    console.log(this.estado)
  }
};
</script>



