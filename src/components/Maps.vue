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
                    <span class="title font-weight-light">Titulo</span>
                   
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
            <v-combobox color="#f7c600" label="Selecciona otra comisaria"></v-combobox>
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
                     <p> <strong> Comisaria:</strong>  CHUPETIN TRUJILLO</p>
                    </v-col>
                    <v-col cols="6" class="md">
                        <p> <strong> Dirección:</strong>  CHUPETIN TRUJILLO</p>
                    </v-col>
                    <v-col cols="6" class="md">
                       <p> <strong> Telefono:</strong>  CHUPETIN TRUJILLO</p>
                    </v-col>
                    <v-col cols="6" class="md">
                        <p> <strong> Encargado:</strong>  CHUPETIN TRUJILLO</p>
                    </v-col>
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
export default {
    data: () => ({
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
  
    mounted() {
      this.geolocalizar()  
     this.geolocate();
     /* this.hallardistancia() */
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
        console.log('lat',this.center.lat)
        console.log('long',this.center.lng) 
        this.hallardistancia()
    },
    hallardistancia(){
      this.geolocalizar()  
     /* let diff = Math.sqrt( Math.pow(this.markers[1].position.lng - this.markers[0].position.lng)+ Math.pow(this.markers[1].position.lat - this.markers[0].position.lat) ) */
      let menor = 999999999999
        for(let i=0; i< this.markers.length; i++){
          let x1 = (this.center.lng).toFixed(5)
          let x2 = parseFloat((this.markers[i].position.lng).toFixed(5))
          let diff1 = x2-x1
          let diff1pow1 = diff1*diff1
          let y1 = parseFloat((this.center.lat).toFixed(5))
          let y2 = parseFloat((this.markers[i].position.lat).toFixed(5))
          let diff2 = y2-y1
          let diff1pow2 = diff2*diff2
          let potencia = diff1pow2+diff1pow1
          let diff = Math.sqrt(potencia)
          console.log(i, 'diff ', diff)
          if(diff<menor){
            menor = diff
          }
        }
        console.log(menor)

      }
  },
  
  
 
}
</script>
<style>
     
</style>