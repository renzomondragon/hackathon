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
                            v-model="user.userId"
                            label="ID"
                            placeholder=""
                            disabled
                            
                    ></v-text-field>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="group"
                            ref="groupsegment"
                            v-model="user.groupSegment"
                            label="Nombre Completo"
                            
                            placeholder=""
                        ></v-text-field>
                        <v-text-field
                            color="#ff4200" 
                            prepend-icon="account_circle"
                            ref="jefe"
                            v-model="user.manager"
                            label="Edad"
                           
                            placeholder=""
                        ></v-text-field>
                            <v-combobox
                                v-model="name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Nacionalidad"
                                ></v-combobox>
                             <v-combobox
                                v-model="name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Estado Civil"
                                ></v-combobox>
                        </v-col>

                  <v-col cols="20" sm="3" md="80" class=center>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="account_circle"
                            ref="id"
                            v-model="user.userId"
                            label="Ocupación"
                            placeholder=""
                            
                    ></v-text-field>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="email"
                            ref="email"
                            v-model="user.email"
                            label="Domicilio"
                            placeholder=""
                    ></v-text-field>
                         <v-combobox
                                v-model="name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Documento"
                                ></v-combobox>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon="account_circle"
                            ref="lastname"
                            v-model="user.lastName"
                            label="Numero de Documento"
                            placeholder=""
                    ></v-text-field>
                    </v-col>

                    <v-col cols="20" sm="3" md="80" class=center>
                    <v-text-field
                            color="#ff4200" 
                            prepend-icon=""
                            ref="active"
                            v-model="estado"
                            label="E-mail"
                            placeholder=""
                           
                    ></v-text-field>
                    <v-text-field
                      color="#ff4200"
                      v-model="user.password"
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
      user:{
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
}
</script>