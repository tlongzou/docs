<template>
  <v-card class="grey lighten-4">
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-col xs12 sm3>
            <v-checkbox v-model="x" value="left" label="Left" light></v-checkbox>
          </v-col>
          <v-col xs6 sm3>
            <v-checkbox v-model="x" value="right" label="Right" light></v-checkbox>
          </v-col>
          <v-col xs6 sm3>
            <v-checkbox v-model="y" value="top" label="Top" light></v-checkbox>
          </v-col>
          <v-col xs6 sm3>
            <v-checkbox v-model="y" value="bottom" label="Bottom" light></v-checkbox>
          </v-col>
          <v-col xs12 sm3>
            <v-checkbox v-model="mode" value="multi-line" label="Multi-line (mobile)" light></v-checkbox>
          </v-col>
          <v-col xs12 sm3>
            <v-checkbox v-model="mode" value="vertical" label="Vertical (mobile)" light></v-checkbox>
          </v-col>
          <v-col xs12 sm4 offset-sm4>
            <v-text-field v-model="text" type="text" label="Text"></v-text-field>
          </v-col>
          <v-col xs12 sm4>
            <v-text-field v-model.number="timeout" type="number" label="Timeout"></v-text-field>
          </v-col>
        </v-layout>

      </v-container>
      <v-btn block primary @click.native="snackbar = true" dark>Show Snackbar</v-btn>
    </v-card-text>
    <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :bottom="y === 'bottomm'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        text: 'Hello, I\'m a snackbar'
      }
    }
  }
</script>
