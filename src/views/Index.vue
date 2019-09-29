<template>
    <div>
        <v-content>
      <v-container
        fluid
      >
        
          <v-flex shrink>
              <router-view></router-view>
            <!-- <TableDash></TableDash> -->
          </v-flex>
      </v-container>
    </v-content>
    </div>
</template>
<script>
/* import TableDash from './TableDash';
import RegisterLead from './RegisterLead'; */
import index from '../components/index'
import Login from '../components/Login'





export default {
    components:{
        index,
        Login,

    }
    
}
</script>