<template>
<div>
  <v-app> 
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
export default {
  name: 'App',
  components: {
    NavBar,
    Menu,
    Footer,
  },
  data: () => ({

    //
  }),
};
</script>



