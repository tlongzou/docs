<template>
  <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
</template>

<script>
  export default {
    data () {
      return {
        valueDeterminate: 0
      }
    }
  }
</script>
