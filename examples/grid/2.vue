<template>
  <div id="example-2">
    <v-layout row wrap>
      <v-col xs10 offset-xs1>
        <v-card class="primary">
          <v-card-text>grid: xs10 offset-xs1</v-card-text>
        </v-card>
      </v-col>
      <v-col xs7 offset-xs5>
        <v-card class="secondary">
          <v-card-text>grid: xs7 offset-xs5</v-card-text>
        </v-card>
      </v-col>
      <v-col xs5>
        <v-card class="primary">
          <v-card-text>xs5</v-card-text>
        </v-card>
      </v-col>
      <v-col xs5 offset-xs2>
        <v-card class="primary">
          <v-card-text>grid: xs5 offset-xs2</v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </div>
</template>

<style>
  #example-2 {
    color: #fff;
    text-align: center;
  }

  #example-2 .col {
    margin-bottom: 16px;
  }
</style>