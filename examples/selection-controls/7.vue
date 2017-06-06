<template>
  <v-card class="elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm4 md2>
            <v-radio label="Primary" v-model="ex10" value="radio-1" primary hide-details></v-radio>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-radio label="Secondary" v-model="ex10" value="radio-2" secondary hide-details></v-radio>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-radio label="Success" v-model="ex10" value="radio-3" success hide-details></v-radio>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-radio label="Info" v-model="ex10" value="radio-4" info hide-details></v-radio>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-radio label="Warning" v-model="ex10" value="radio-5" warning hide-details></v-radio>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-radio label="Error" v-model="ex10" value="radio-6" error hide-details></v-radio>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        ex10: 'radio-1',
      }
    }
  }
</script>
