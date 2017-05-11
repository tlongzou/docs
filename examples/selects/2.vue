<template>
  <v-card class="secondary elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-col xs6>
            <v-subheader class="grey--text text--lighten-1" v-text="'Standard'" />
          </v-col>
          <v-col xs6>
            <v-select 
              v-bind:items="items"
              v-model="e1"
              label="Select"
              dark
              item-value="text"
            />
          </v-col>
          <v-col xs6>
            <v-subheader class="grey--text text--lighten-1" v-text="'Standard with focus'" />
          </v-col>
          <v-col xs6>
            <v-select 
              v-bind:items="items"
              v-model="e2"
              label="Select"
              class="input-group--focused"
              dark
              item-value="text"
            />
          </v-col>
          <v-col xs6>
            <v-subheader class="grey--text text--lighten-1" v-text="'Error'" />
          </v-col>
          <v-col xs6>
            <v-select
              label="Select"
              v-bind:items="items"
              v-model="e3"
              v-bind:rules="[() => e3 && e3.text && e3.text.length > 0 || 'Please select an option']"
              dark
              item-value="text"
            />
          </v-col>
          <v-col xs6>
            <v-subheader class="grey--text text--lighten-1" v-text="'Disabled'" />
          </v-col>
          <v-col xs6>
            <v-select
              label="Select"
              v-bind:items="items"
              v-model="e4"
              disabled
              dark
            />
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
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ]
      }
    }
  }
</script>