<template>
<div>
  <v-app v-if="state==true">
    <Login></Login>
  </v-app>
  <v-app v-if="state==false"> 
    <NavBar></NavBar>
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
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar,
    Menu,
    Footer,
    Login,
  },
  data: () => ({

    //
  }),
  computed: {
    ...mapState(['state'])
  },
  mounted() {
    console.log(this.state)
  }
};
</script>



