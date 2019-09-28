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
                                v-model="name"
                                color="#ff4200" 
                                label="Nombre Completo">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="name"
                                color="#ff4200" 
                                label="Edad">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Nacionalidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Estado Civil"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="name"
                                color="#ff4200" 
                                label="Ocupación">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="name"
                                color="#ff4200" 
                                label="Domicilio">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Documento Identidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="name"
                                color="#ff4200" 
                                label="Ingresar Número de Documento">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="name"
                                color="#ff4200" 
                                label="E-mail">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-text-field
                                  color="#ff4200"
                                  v-model="name"
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
                                <v-btn color="#ff4200" text @click="save()">Save</v-btn>
                        </v-card-actions>
                </v-card-text>
                </v-card>         
                </v-dialog>


                </div>
                </template>

            <v-col cols="12">
            <v-row justify="center">
            <v-col
            cols="6"
            md="4"
             >
              <v-btn color="#000000" class="white--text" @click="login1()">Ingresar</v-btn>
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
      name:'',
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
      dialog: false,
      show1: false,
        password: 'Password',
        rules: {
        required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        }

    }
  },
  computed: {
      ...mapState([
          'estado'
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