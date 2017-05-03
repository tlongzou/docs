<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col md12 lg4>
        <div class="subheading text-xs-center">Portrait</div>
        <v-date-picker v-model="picker"></v-date-picker>
      </v-col>
      <v-col md12 lg8>
        <div class="subheading text-xs-center">Landscape</div>
        <v-date-picker v-model="picker2" landscape actions>
          <template scope="{ save, cancel }">
            <v-card-row actions>
              <v-btn flat primary>Cancel</v-btn>
              <v-btn flat primary>Save</v-btn>
            </v-card-row>
          </template>
        </v-date-picker>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        picker: null,
        picker2: null
      }
    }
  }
</script>