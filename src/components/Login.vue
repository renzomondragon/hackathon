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
            <template>
                <div>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="1000px" class="center">
                <template  v-slot:activator="{ on }">
                    <v-btn  style="margin-left: 11px;" dark class="mb-2" v-on="on">Regístrate</v-btn>
                    <v-btn color="#000000" class="white--text" style="margin-bottom:5px" @click="login1()">Ingresar</v-btn>
                </template>
                <v-card >
                    <v-card-title>
                        <span class="headline"><strong> Registrarse</strong></span>
                    </v-card-title>
                <v-card-text >
                    <v-container>
                        <v-row>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="nombreCompleto"
                                color="#ff4200" 
                                label="Nombre Completo">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="edad"
                                color="#ff4200" 
                                label="Edad">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="nacionalidad"
                                :items="nacionalidades"
                                color="#ff4200"
                                label="Seleccionar Nacionalidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="estadoCivil"
                                :items="estados"
                                color="#ff4200"
                                label="Seleccionar Estado Civil"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="ocupacion"
                                color="#ff4200" 
                                label="Ocupación">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="domicilio"
                                color="#ff4200" 
                                label="Domicilio">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="documento"
                                :items="tipo_doc"
                                color="#ff4200"
                                label="Seleccionar Documento Identidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="numeroDeDocumento"
                                color="#ff4200" 
                                label="Ingresar Número de Documento">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="email"
                                color="#ff4200" 
                                label="E-mail">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-text-field
                                  color="#ff4200"
                                  v-model="password"
                                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                                  :rules="[rules.required, rules.min]"
                                  :type="show1 ? 'text' : 'password'"
                                  name="input-10-1"
                                  label="Password"
                                  hint="At least 8 characters"
                                  counter
                                  @click:append="show1 = !show1"
                                  
                                ></v-text-field>
                              </v-col>
                        </v-row>

                    </v-container>
                    <v-card-actions>
                                <div class="flex-grow-1"></div>
                                <v-btn color="#ff4200" text @click="addUser()">Save</v-btn>
                        </v-card-actions>
                </v-card-text>
                </v-card>         
                </v-dialog>


                </div>
                </template>

            <!-- <v-col cols="12">
            <v-row justify="center">
            <v-col
            cols="6"
            md="4"
             >
              <v-btn color="#000000" class="white--text" @click="login1()">Ingresar</v-btn>
             </v-col>
    
             
        </v-row>
      </v-col> -->
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
        usuarioId: 0,
        nombreCompleto: "",
        edad: '',
        ocupacion: "",
        domicilio: "",
        email: "",
        password: "",
        numeroDeDocumento: "",
        nacionalidad: "",
        estadoCivil: "",
        rol: "",
        documento: "",
        estados: ['Soltero','Casado','Viudo', 'Divorciado'],
        tipo_doc:['DNI', 'Pasaporte'],
        nacionalidades:['Peruano'],

      name:'',

      email: '',
      show1: false,
      flat: false,
      media: true,
      loading: false,
      outlined: false,
      elevation: undefined,
      raised: false,
      height: undefined,
      dialog: false,
      show1: false,

        rules: {
        required: value => !!value || 'Required.',
            min: v => v.length >= 5 || 'Min 5 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        }

    }
  },
  computed: {
      ...mapState([
          'estado',
          'token'
      ])
  },
  mounted(){
      this.getNacionalidades()
  },
  methods: {
    login1(){
         this.$store.dispatch('cambialog')
     },
    ...mapActions([
     'verLogin',
    ]),
    async login(){
      try {
      var sendData = {
        "username": this.email,
        "password": this.password
      }
      console.log(sendData)
      console.log(this.email, this.password)
      await axios.post('https://hackaton2019utp.azurewebsites.net/login', sendData)
      .then((res) => { 
        console.log(res.data.token)
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('estado', false)
          localStorage.setItem('token',res.data.token)  
          const token= localStorage.getItem('token')
          this.$store.commit('Token', token)
          this.$store.dispatch('verLogin')
          this.$store.dispatch('getUsuario') 
          this.$store.commit('estado', false)
          this.$store.commit('otroestado', true)
          this.$store.commit('otrootro', false)

          
        /*   location.reload() */
    /* 
            
            const token= localStorage.getItem('token')
            this.$store.commit('Token', token)
            console.log('No se habia cargado el token')
            this.$store.dispatch('verLogin')
            this.$store.dispatch('getUsuario') 
            location.reload() */
        
        
      })  
      } catch (error) { 
          alert('No tienes acceso')
      }
    },
    async addUser(){
      var datos = {	
        "usuarioId": this.usuarioId,
        "nombreCompleto": this.nombreCompleto,
        "edad": parseInt(this.edad),
        "ocupacion": this.ocupacion,
        "domicilio": this.domicilio,
        "email": this.email,
        "password": this.password,
        "numeroDeDocumento": this.numeroDeDocumento,
        "nacionalidad": this.nacionalidad,
        "estadoCivil": this.estadoCivil,
        "rol": this.rol,
        "documento": this.documento,
      }

      let url = 'https://hackaton2019utp.azurewebsites.net/usuario'
      await axios.post(url, datos)
      .then(response => { 
        alert('Se registró correctamente')
        this.$store.dispatch('')
      }).catch(error => {
        console.log('Hubo un error ', error)
      })
    }, 
    async getNacionalidades(){
      await axios.get('https://hackaton2019utp.azurewebsites.net/nacionalidades')
      .then(response =>{
        this.nacionalidades = response.data
        localStorage.setItem('nacionalidades', JSON.stringify(response.data))
      }).catch(error =>{
        console.log(error)
        /* localStorage.removeItem('token')
        localStorage.removeItem('usuarios')
        localStorage.removeItem('dashboard')
        localStorage.removeItem('leads')
        localStorage.removeItem('hoteles')
        localStorage.removeItem('segmentos')
        localStorage.removeItem('accounts')
        localStorage.removeItem('usuario')
        localStorage.removeItem('objects')
        localStorage.removeItem('categories')
        localStorage.removeItem('branchs')
        localStorage.removeItem('dashjefe')
        localStorage.removeItem('visitas')
        commit('Token', null)
        commit('localStorageLength', -8)
        state.localStorageLength = 0
        window.location.href = '/' */
      }); 
    },
   
    limpiaPass(){
    this.password = ''
     },
     otrolog(){
        this.$store.commit('estado', false)
        this.$store.commit('otroestado', true)
        this.$store.commit('otrootro', false)
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