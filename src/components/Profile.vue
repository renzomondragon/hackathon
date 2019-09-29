<template>
    <div>
      <!-- <div class="flex-grow-1"></div> -->
      <!-- <v-dialog v-model="dialog" max-width="1000px" class="center"> -->
<!--       <template v-slot:activator="{ on }">
          <v-btn color="#ff4200" style="color: #FAFAFA;" dark class="mb-2" v-on="on">Editar Perfil</v-btn>
       </template> -->
         <v-card> 
              <v-container>
                <v-row>
                  <v-col cols="20" sm="3" md="80" class=center>
                      <v-text-field
                            color="#ff4200" 
                            prepend-icon="account_circle"
                            ref="id"
                            v-model="usuarioId"
                            label="ID"
                            placeholder=""
                            disabled
                            
                    ></v-text-field>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="group"
                            ref="groupsegment"
                            v-model="nombreCompleto"
                            label="Nombre Completo"
                            
                            placeholder=""
                        ></v-text-field>
                        <v-text-field
                            color="#ff4200" 
                            prepend-icon="account_circle"
                            ref="jefe"
                            v-model="edad"
                            label="Edad"
                           
                            placeholder=""
                        ></v-text-field>
                            <v-combobox
                                v-model="nacionalidad"
                                :items="nacionalidades"
                                color="#ff4200"
                                label="Seleccionar Nacionalidad"
                                ></v-combobox>
                             <v-combobox
                                v-model="estadoCivil"
                                :items="estados"
                                color="#ff4200"
                                label="Seleccionar Estado Civil"
                                ></v-combobox>
                        </v-col>

                  <v-col cols="20" sm="3" md="80" class=center>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="account_circle"
                            ref="id"
                            v-model="ocupacion"
                            label="Ocupación"
                            placeholder=""
                            
                    ></v-text-field>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="email"
                            ref="email"
                            v-model="domicilio"
                            label="Domicilio"
                            placeholder=""
                    ></v-text-field>
                         <v-combobox
                                v-model="documento"
                                :items="tipo_doc"
                                color="#ff4200"
                                label="Seleccionar Documento"
                                ></v-combobox>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="account_circle"
                            ref="lastname"
                            v-model="numeroDeDocumento"
                            label="Numero de Documento"
                            placeholder=""
                    ></v-text-field>
                    </v-col>

                    <v-col cols="20" sm="3" md="80" class=center>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon=""
                            ref="active"
                            v-model="email"
                            label="E-mail"
                            placeholder=""
                           
                    ></v-text-field>
                    <v-text-field
                      color="#ff4200"
                      v-model="password"
                      :append-icon="show1 ? 'visibility' : 'visibility_off'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Contraseña"
                      hint="Se recomienda 8 caracteres"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    </v-col> 
                </v-row>
              </v-container>
            <v-card-actions>
                      <div class="flex-grow-1"></div>
                      <v-btn color="#ff4200" text @click="editUser()">Guardar cambios</v-btn>
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
      estado:'',
      ocupacion: '',
      documento: '',
      domicilio: '',
      edad: '',
      email: '',
      estadoCivil: '',
      nacionalidad: '',
      nombreCompleto: '',
      numeroDeDocumento: '',
      password: '',
      rol: '',
      usuarioId: '',
      estados: ['Soltero','Casado','Viudo', 'Divorciado'],
      tipo_doc:['DNI', 'Pasaporte'],
      nacionalidades:[],
      user:{
          ocupacion: '',
        userId: 0,
        username: '',
        active: true,
        email: '',
        groupSegment: '',
        name: '',
        lastName: '',
        manager: '',
        password: '',
        role: ''
      },
      show1: false,
    }),
    mounted(){
      this.$store.dispatch('getUsuario')
      this.datosUser()
    },
    methods:{
        datosUser(){
            let user = JSON.parse(localStorage.getItem('usuario'))
            this.documento = user.documento
            this.domicilio = user.domicilio
            this.edad = user.edad
            this.email = user.email
            this.estadoCivil = user.estadoCivil
            this.nacionalidad = user.nacionalidad
            this.nombreCompleto = user.nombreCompleto
            this.numeroDeDocumento = user.numeroDeDocumento
            this.password = user.password
            this.usuarioId = user.usuarioId
            console.log(this.user)
        },
    }
}
</script>