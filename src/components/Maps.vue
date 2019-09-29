<template>
  
        
   <div >
    
    <v-card light >
                <v-card-title>
                  <v-list-item two-line>
                    <v-list-item-avatar class="ml-0" color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        
                      ></v-img>
                    </v-list-item-avatar>
                    <span class="title font-weight-light">{{comisaria.nombre}}</span>
                   
                 </v-list-item>
              
                </v-card-title>

               <!--  <v-row>
                    <v-card-title>
                    <v-col cols="12" class="md">
                         <label style="font-size: 20px;">
                            <gmap-autocomplete
                            @place_changed="setPlace">
                            </gmap-autocomplete>
                            <v-btn color="#f7c600" @click="addMarker">Elegir</v-btn>
                          </label>
                    </v-col>
                    </v-card-title>
                </v-row> -->

                <div class="position-relative mb-4">
                
                <!-- <h2>Search and add a pin</h2> -->
                
                <br/>
                <gmap-map
                :center="center"
                :zoom="11"
                style="width:100%;  height: 400px;"
                id="map"
                >
                <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"

                ></gmap-marker>
                </gmap-map>
    
                  
                </div>
                <v-col cols="12">
        <v-row justify="center">
          <v-col cols="6"   md="6" >
            <v-combobox color="#f7c600" :items="Namecomisarias" label="Selecciona otra comisaria"></v-combobox>
          </v-col>
        </v-row>
      </v-col>
               <!--  <v-row justify-center>
                    <v-col cols="6"
                        md="6">
                        <label style="font-size: 20px;">
                            <gmap-autocomplete
                            @place_changed="setPlace">
                            </gmap-autocomplete>
                            <v-btn color="#f7c600" @click="addMarker">Elegir</v-btn>
                        </label>

                     </v-col> 
                </v-row> -->

                <v-card-actions>
                   <v-list-item>
                       
                   </v-list-item>
                  <v-list-item class="grow">
                   
                   <v-row>
                    <v-col cols="6" class="md">
                     <p> <strong> Comisaria:</strong>  {{comisaria.nombre}}</p>
                    </v-col>
                    <v-col cols="6" class="md">
                        <p> <strong> Dirección:</strong> {{comisaria.direccion}}</p>
                    </v-col>
    <!--                 <v-col cols="6" class="md">
                       <p> <strong> Telefono:</strong>  {{comisaria.telefono}}</p>
                    </v-col>
                    <v-col cols="6" class="md">
                        <p> <strong> Encargado:</strong>  CHUPETIN</p>
                    </v-col> -->
                   </v-row>

                  </v-list-item>
                </v-card-actions>
            </v-card>
        <br>
         <v-btn  color="#ff4200" style="color: #FAFAFA;" dark class="text-right"><a style="text-decoration: none; color: white;" href="/#/registrar-denuncia">Registrar Denuncia</a> </v-btn> 
    <br>
   
</div>

  
</template>
<script>
import { mapState } from 'vuex';
export default {
    data: () => ({
    comisariaSelected: '',
    comisaria: {
        id: '',
        nombre: '',
        telefono: '',
        direccion: '',
    },
    Namecomisarias:[],
      /* center: { lat: -12.066134900000002, lng: -77.0368683}, */
      markers: [
          {
            position: { 
                lat: -12.1649994,
                lng: -76.99662089999998
           }    
          },
          {
            position: { 
                lat: -10.1649994,
                lng: -75.99662089999998
           },   
          },
          {
            position: { 
                lat: -11.9941227,
                lng: -77.00690580000003
           },   
          }
      ],
      center:{
        lat: -11.9941227,
        lng: -77.00690580000003,
      },
      
      places: [],
      currentPlace: null
    }),
    computed:{
        /* ...mapState(['comisarias']) */
    },
    mounted() {
    this.$store.dispatch('getComisarias')
      this.geolocalizar()  
     this.geolocate();
     this.getNameComisarias()
     this.hallardistancia()
    },
    methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
      addMarker() {
      if (this.currentPlace) {
        console.log(this.currentPlace)
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        console.log(this.markers)
        console.log(this.places)

      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }, 

    geolocalizar: function() {
	    navigator.geolocation.getCurrentPosition(this.mostrarLoc, this.mostrarError);   
    },
  
    mostrarError: function(error){                
	    console.log(error);
    },

    mostrarLoc: function (geo){                   
        this.center.lat=geo.coords.latitude;
        this.center.lng=geo.coords.longitude;
        /* this.hallardistancia() */
    },
    hallardistancia(){
      let comisarias = JSON.parse(localStorage.getItem('comisarias'))
      let menor = 999999999999
      var indice = 0
        for(let i=0; i< comisarias.length; i++){
          console.log('aa')
          let x1 = (this.center.lng).toFixed(5)
          let x2 = parseFloat((comisarias[i].longuitud).toFixed(5))
          let diff1 = x2-x1
          let diff1pow1 = diff1*diff1
          let y1 = parseFloat((this.center.lat).toFixed(5))
          let y2 = parseFloat((comisarias[i].latitud).toFixed(5))
          let diff2 = y2-y1
          let diff1pow2 = diff2*diff2
          let potencia = diff1pow2+diff1pow1
          let diff = Math.sqrt(potencia)
          console.log(i, 'diff ', diff)
          if(diff<menor){
            menor = diff
            indice = i
            console.log('pos', i)
            }
        }
        this.markers = []
        this.markers.push(
                {
                position: { 
                lat: comisarias[indice].latitud,
                lng: comisarias[indice].longuitud,
                } 
                 }
        )
        this.comisaria.nombre = comisarias[indice].nombre
        this.comisaria.direccion = comisarias[indice].direccion
        this.comisaria.id =comisarias[indice].comisariaId

      },
      getNameComisarias(){
      let comisarias = JSON.parse(localStorage.getItem('comisarias'))
      for(let i=0; i< comisarias.length; i++){
          this.Namecomisarias.push(comisarias[i].nombre)
      }
  }
  },

  
  
  
 
}
</script>
<style>
     
</style>