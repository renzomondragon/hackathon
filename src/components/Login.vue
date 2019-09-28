<template>
  <div id="login">
  <br><br><br>
  <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      max-width="450"
      :height="height"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="343px"
        src="../assets/elcomercio.jpg"
      >
      </v-img>  
       <v-form>
        <v-col cols="12">
            <v-text-field color="#f7c600" v-model="email" label="Usuario" required></v-text-field>
            <v-text-field
              color="#f7c600"
              v-model="password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Contraseña"
              hint="At least 8 characters"
              counter
            ></v-text-field>
            <v-col cols="12">
        <v-row justify="center">
          <v-col
            cols="6"
            md="4"
          >
            <v-btn color="#000000" class="white--text" @click="login1()">Ingresar</v-btn>
          </v-col>

          <v-col
            cols="6"
            md="4"
          >
            <v-btn color="#000000" class="white--text" @click="login()">Registrar</v-btn>
          </v-col>
        </v-row>
      </v-col>
            <br>
        </v-col>
    </v-form>
    </v-card>
	</div>
</template>

<script>
import axios from 'axios'
import { mapActions,mapState } from 'vuex'

export default {
  data(){
    return{
      password: '',
      email: '',
      show1: false,
      flat: false,
      media: true,
      loading: false,
      outlined: false,
      elevation: undefined,
      raised: false,
      height: undefined,

    }
  },
  computed: {
      ...mapState([
          'state'
      ])
  },
  methods: {
      login1(){
          this.$store.commit('state',false)
      },
      ...mapActions([
        'verLogin',
        'getHotels',
        'getDashboard',
        'getAllLeads',
        'getUsers',
        'getManagers',
        'getDashboard',
        'redirigir',
      ]),
    async login(){
      try {
      var sendData = {
        username: this.email,
        password: this.password
      }
      
      } catch (error) { 
          alert('No tienes acceso')
      }
    }
  }
}
</script>
<style scoped>
  .v-input__slider {
    width: 100%;
  }
  #login{
    height: 100%;
    /* background-color: #000000; */
    /* background-image: url('~@/assets/casa-andina-fondo.jpg'); */
    background-image: -webkit-linear-gradient(to right, rgb(34, 34, 34), rgb(68, 68, 68), #3A1C71);
    background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0));
  }
</style>