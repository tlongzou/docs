<template>
  <div id="example-2">
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card class="primary">
          <v-card-text>grid: xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs7 offset-xs5>
        <v-card class="secondary">
          <v-card-text>grid: xs7 offset-xs5</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card class="primary">
          <v-card-text>xs5</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5 offset-xs2>
        <v-card class="primary">
          <v-card-text>grid: xs5 offset-xs2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<style>
  #grid-view #example-2 {
    color: #fff;
    text-align: center;
  }

  #grid-view #example-2 .flex {
    margin-bottom: 16px;
  }
</style>