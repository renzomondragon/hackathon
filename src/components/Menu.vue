<template>
     <!-- MENU DE SUPERVISORES -->
    <div> 
    <v-card >
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      dark
      color="#000000"
    >
      <v-list-item  color="#f7c600">
        <v-list-item-avatar >
          <img
             src="https://cdn.vuetifyjs.com/images/john.jpg"
             alt="John"
          >
        </v-list-item-avatar>
        <v-list-item-content >
            <v-list-item-title >{{usern}}</v-list-item-title>
            <v-list-item-subtitle id="subtitle">{{correo}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group >

        <v-list-item color="#f7c600" to="/maps">       
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Registrar Denuncia </v-list-item-title>
          </v-list-item-content>     
       </v-list-item>
            <v-list-item color="#f7c600" to="/mis_denuncias">
              <v-list-item-action>
                <v-icon>dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Mis Denuncias </v-list-item-title>
              </v-list-item-content>
              </v-list-item>
            <!-- <v-list-item color="#f7c600" to="/zonas-rojas">
              <v-list-item-action>
                <v-icon>event</v-icon>
              </v-list-item-action>
              <v-list-item-content>
            <v-list-item-title> Zonas Rojas </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item color="#f7c600" to="/dashboard-denuncias">
              <v-list-item-action>
                <v-icon>event</v-icon>
              </v-list-item-action>
              <v-list-item-content>
            <v-list-item-title> Dashboard Denuncias </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="#f7c600" to="/editar-denuncias">
              <v-list-item-action>
                <v-icon>event</v-icon>
              </v-list-item-action>
              <v-list-item-content>
            <v-list-item-title> Denuncias Realizadas </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="#f7c600" to="/profile">
          <v-list-item-action>
            <v-icon>account_circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Mi Perfil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>

      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn color="#f7c600" block @click="logout()">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>

    </div>
    
</template>
<script>
import { mapActions, mapState } from 'vuex';
import router from '../router'

export default {
    data: () => ({
     correo:'',
      Usuario: {},
      items: 'HOLA',
      drawer: true,
      mini: true,
      usern:'Denunciante',
    }),
    methods:{
        logout(){
            this.$store.dispatch('log')
            localStorage.removeItem('token')
            localStorage.removeItem('objects')
            localStorage.removeItem('estado')
            localStorage.removeItem('usuario')
        }
    },
    computed:{
        ...mapState(['localStorageLength', 'otherLenght'])
    },
    mounted(){
        this.correo = JSON.parse(localStorage.getItem('usuario')).email
        var locals= localStorage.length
        this.$store.commit('localStorageLength', locals)
        this.$store.commit('otherLenght', locals) 
    },
    updated(){
        var locals= localStorage.length
        this.$store.commit('localStorageLength', locals)
        this.$store.commit('otherLenght', locals) 
    }
}
</script>
<style>
#subtitle{
  font-size: 12px;
}
</style>