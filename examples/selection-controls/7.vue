<template>
  <v-card class="elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-col xs12 sm4 md2>
            <v-radio label="Primary" v-model="ex10" value="radio-1" primary light hide-details/>
          </v-col>
          <v-col xs12 sm4 md2>
            <v-radio label="Secondary" v-model="ex10" value="radio-2" secondary light hide-details/>
          </v-col>
          <v-col xs12 sm4 md2>
            <v-radio label="Success" v-model="ex10" value="radio-3" success light hide-details/>
          </v-col>
          <v-col xs12 sm4 md2>
            <v-radio label="Info" v-model="ex10" value="radio-4" info light hide-details/>
          </v-col>
          <v-col xs12 sm4 md2>
            <v-radio label="Warning" v-model="ex10" value="radio-5" warning light hide-details/>
          </v-col>
          <v-col xs12 sm4 md2>
            <v-radio label="Error" v-model="ex10" value="radio-6" error light hide-details/>
          </v-col>
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
