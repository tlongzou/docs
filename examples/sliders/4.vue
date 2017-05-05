<template>
  <v-card class="e4">
    <v-card-row height="300px" v-bind:style="{ background: `rgb(${red}, ${green}, ${blue})` }"></v-card-row>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-col xs9>
            <v-slider label="R" light v-bind:max="255" v-model="red"></v-slider>
          </v-col>
          <v-col xs3>
            <v-text-field light v-model="red" type="number"></v-text-field>
          </v-col>
          <v-col xs9>
            <v-slider label="G" light v-bind:max="255" v-model="green"></v-slider>
          </v-col>
          <v-col xs3>
            <v-text-field light v-model="green" type="number"></v-text-field>
          </v-col>
          <v-col xs9>
            <v-slider label="B" light v-bind:max="255" v-model="blue"></v-slider>
          </v-col>
          <v-col xs3>
            <v-text-field light v-model="blue" type="number"></v-text-field>
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
        red: 64,
        green: 128,
        blue: 0
      }
    }
  }
</script>

<style lang="stylus">
  .e4
    width: 400px
    margin: auto
</style>