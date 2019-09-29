<template>
    <div>
      <!-- <div class="flex-grow-1"></div> -->
      <!-- <v-dialog v-model="dialog" max-width="1000px" class="center"> -->
<!--       <template v-slot:activator="{ on }">
          <v-btn color="#ff4200" style="color: #FAFAFA;" dark class="mb-2" v-on="on">Editar Perfil</v-btn>
       </template> -->
         <v-card 
         class="mx-auto"
         max-width="80%"
         > 
        
          <v-container>
            <v-card-title>
              <span class="headline"><strong>Registra tu Denuncia</strong></span>
             </v-card-title>
               <v-card-text>
                <v-row>
                  <v-col cols="20" sm="6" md="80" class=center>
                    <v-combobox
                      v-model="razon"
                      :items="tipo"
                      color="#ff4200"
                      label="Seleccionar Tipo Robo"
                    ></v-combobox>
                  </v-col>
                </v-row>
                <v-row>    
                  <v-col cols="20" sm="6" md="80" class=center>
                    <v-textarea
                      v-model="desc1"
                      color="#ff4200" 
                      height="50"
                      :auto-grow="true"
                      :clearable="true"
                      label="Descripción del Robo"
                    ></v-textarea>
                    </v-col>

                    <v-col cols="20" sm="6" md="80" class=center>
                    <v-textarea
                      v-model="desc2"
                      color="#ff4200" 
                      height="50"
                      :auto-grow="true"
                      :clearable="true"
                      label="Descripción del Implicado"
                    ></v-textarea>
                    </v-col> 
                </v-row>
                </v-card-text>   
              </v-container>
            <v-card-actions>
                <template>
                <div>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="1000px" class="center">
                <template  v-slot:activator="{ on }">
                    <v-btn @click="cargardatos()" style="margin-left: 11px;" dark class="mb-2" v-on="on">Vista Previa Denuncia</v-btn>
                </template>


                <v-card>
                    <v-card-title>
                        <span class="headline"><strong> Visualizando Denuncia</strong></span>
                    </v-card-title>
                <v-card-text >
                    <v-container>
                        <v-row>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.name"
                                color="#ff4200" 
                                label="Nombre Completo">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.edad"
                                color="#ff4200" 
                                label="Edad">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="user.nacionalidad"
           
                                color="#ff4200"
                                label="Seleccionar Nacionalidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="user.estadocivil"
                          
                                color="#ff4200"
                                label="Seleccionar Estado Civil"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.ocupacion"
                                color="#ff4200" 
                                label="Ocupación">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.domicilio"
                                color="#ff4200" 
                                label="Domicilio">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="user.documento"

                                color="#ff4200"
                                label="Seleccionar Documento Identidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.dni"
                                color="#ff4200" 
                                label="Ingresar Número de Documento">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.email"
                                color="#ff4200" 
                                label="E-mail">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="user.razon"
                                :items="tipo"
                                color="#ff4200"
                                label="Seleccionar Tipo Robo"
                                ></v-combobox>
                            </v-col>

                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-textarea
                                v-model="user.desc1"
                                color="#ff4200" 
                                height="80"
                                :auto-grow="true"
                                :clearable="true"
                                label="Descripción del Robo"
                                ></v-textarea>
                                </v-col>

                                <v-col cols="20" sm="6" md="80" class=center>
                                <v-textarea
                                v-model="user.desc2"
                                color="#ff4200" 
                                height="80"
                                :auto-grow="true"
                                :clearable="true"
                                label="Descripción del Implicado"
                                ></v-textarea>
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
                      <div class="flex-grow-1"></div>
                      <!-- <v-btn color="#ff4200" text @click="editUser()">Guardar cambios</v-btn> -->
         </v-card-actions>
        </v-card>
  <!--   </v-dialog> -->
</div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
    data: () => ({
      dialog: false,
      nacionalidades:[],
      estado:'',
      razon: '',
      desc1: '',
      desc2: '',
      tipo: ['Sustracción', 'Asalto', 'Arrebato'],
      user:{
        userId: '',
        name: '',
        edad: true,
        nacionalidad: '',
        estadocivil: '',
        ocupacion: '',
        domicilio: '',
        documento: '',
        email: '',
        password: '',
        dni: '',
        razon:''
      },
      show1: false,
    }),
    computed: {
        ...mapState(['token'])
    },
    mounted(){
        this.cargardatos()
    },
    methods:{
        cargardatos(){
            let nacionalidades = JSON.parse(localStorage.getItem('nacionalidades'))
            this.nacionalidades = nacionalidades
            let usuario = JSON.parse(localStorage.getItem('usuario'))
            console.log(usuario)
            
            this.user.userId = usuario.usuarioId
            this.user.name  = usuario.nombreCompleto 
            this.user.edad  = usuario.usuarioId 
            this.user.nacionalidad  = usuario.nacionalidad 
            this.user.estadocivil  = usuario.estadoCivil 
            this.user.ocupacion  = usuario.ocupacion 
            this.user.domicilio  = usuario.domicilio 
            this.user.documento  = usuario.documento 
            this.user.email  = usuario.email 
            this.user.password = usuario.password 
            this.user.dni = usuario.numeroDeDocumento 
            this.user.razon = this.razon
            this.user.desc1 = this.desc1
            this.user.desc2 = this.desc2
        },
      save(){

          this.dialog = false
          this.user = {}
       },

       async addDenuncia(){
        var datos={
            "ubicacion": "Av. Petit Thouars cdra 6",
            "descripcion": this.user.desc1,
            "descripcionImplicado": this.user.desc2,
            "tipoRobo": this.user.razon,
            "usuario": this.user.name,
            "estado": "Iniciado",
            "comisaria": "Comisaria Petit Thouars",
        }
      let config = {
        headers: {
          'Authorization': 'Bearer ' + this.token
        }  
      }
      let url = 'https://hackaton2019utp.azurewebsites.net/usuario/denuncias'
      await axios.post(url, datos, config)
      .then(response => { 
        localStorage.setItem('misdenuncias', JSON.stringify(response.data))
        this.$store.commit('misdenuncias', response.data)
      }).catch(error => {
        console.log('Hubo un error ', error)
      })
    },

    }
}
</script>