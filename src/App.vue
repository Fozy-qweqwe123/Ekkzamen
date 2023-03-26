  <template>
    <div id="app">
      <VHeader v-if="showHeader"> </VHeader>
     <RouterView></RouterView>
      <Vfooter></Vfooter>
    </div>    
  </template>

<script>

import Vfooter from './components/v-footer.vue';
import VHeader from './components/v-header.vue'

export default {
  name: 'App',
  data() {
return {

  showHeader:true 
}

  },
  components: {
     Vfooter,
    VHeader,
}
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
</style>
