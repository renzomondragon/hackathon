<template>
  <div>
  <v-container class="col-md-12">
      <template>
          <v-spacer></v-spacer>
          <v-text-field class="text-xs-center" v-model="search" append-icon="search" label="Buscar Denuncia" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-data-table
          :headers="headers"
          :items="values"
          :search="search"
          multi-sort
          class="elevation-1"
        >
        </v-data-table>
      </template>
</v-container>
</div>
</template>


<script>
import axios from "axios";
import { mapState, mapActions } from 'vuex';
export default {
  data: () => ({
      search: '',
      values:[],
      headers: [
      {
        sortable: false,
        text: "",
        value: "dato"
      },
      {
        sortable: false,
        text: "Nombre Comisaría",
        value: "nombrecomisaria"
      },
      {
        sortable: false,
        text: "Dirección Comisaría",
        value: "dircomisaria"
      },
      {
        sortable: false,
        text: "Estado Denuncia",
        value: "estado"
      },
      {
        sortable: false,
        text: "Fecha Creación",
        value: "creacion"
      }
    ],
    items: [],
  })
};

</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}
.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>