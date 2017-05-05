<template>
  <div>
    <v-slider v-model="value1" light thumb-label step="2"></v-slider>
    <v-slider v-model="value2" light disabled></v-slider>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: 0,
        value2: 0
      }
    }
  }  
</script>