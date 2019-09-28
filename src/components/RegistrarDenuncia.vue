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
                      :items="Reasons"
                      color="#ff4200"
                      label="Seleccionar Tipo Robo"
                    ></v-combobox>
                  </v-col>
                </v-row>
                <v-row>    
                  <v-col cols="20" sm="6" md="80" class=center>
                    <v-textarea
                      v-model="description"
                      color="#ff4200" 
                      height="50"
                      :auto-grow="true"
                      :clearable="true"
                      label="Descripción del Robo"
                    ></v-textarea>
                    </v-col>

                    <v-col cols="20" sm="6" md="80" class=center>
                    <v-textarea
                      v-model="description"
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
                    <v-btn  style="margin-left: 11px;" dark class="mb-2" v-on="on">Vista Previa Denuncia</v-btn>
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
                                v-model="user.name"
                                color="#ff4200" 
                                label="Edad">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="user.name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Nacionalidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="user.name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Estado Civil"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.name"
                                color="#ff4200" 
                                label="Ocupación">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.name"
                                color="#ff4200" 
                                label="Domicilio">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="user.name"
                                :items="name"
                                color="#ff4200"
                                label="Seleccionar Documento Identidad"
                                ></v-combobox>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.name"
                                color="#ff4200" 
                                label="Ingresar Número de Documento">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center >
                                <v-text-field 
                                v-model="user.name"
                                color="#ff4200" 
                                label="E-mail">
                                </v-text-field>
                            </v-col>
                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-combobox
                                v-model="razon"
                                :items="Reasons"
                                color="#ff4200"
                                label="Seleccionar Tipo Robo"
                                ></v-combobox>
                            </v-col>

                            <v-col cols="20" sm="6" md="80" class=center>
                                <v-textarea
                                v-model="description"
                                color="#ff4200" 
                                height="80"
                                :auto-grow="true"
                                :clearable="true"
                                label="Descripción del Robo"
                                ></v-textarea>
                                </v-col>

                                <v-col cols="20" sm="6" md="80" class=center>
                                <v-textarea
                                v-model="description"
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