<template>
  <v-container fluid>
    <v-layout justify-space-around class="mb-2">
      <span class="group pa-2">
        <v-icon dark>home</v-icon>
        <v-icon dark>event</v-icon>
        <v-icon dark>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon light>folder_open</v-icon>
        <v-icon light>widgets</v-icon>
        <v-icon light>gavel</v-icon>
      </span>
    </v-layout>

    <v-layout justify-space-around class="mb-2">
      <span class="group pa-2">
        <v-icon medium dark>home</v-icon>
        <v-icon medium dark>event</v-icon>
        <v-icon medium dark>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon medium light>folder_open</v-icon>
        <v-icon medium light>widgets</v-icon>
        <v-icon medium light>gavel</v-icon>
      </span>
    </v-layout>

    <v-layout justify-space-around class="mb-2">
      <span class="group pa-2">
        <v-icon large dark>home</v-icon>
        <v-icon large dark>event</v-icon>
        <v-icon large dark>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon large light>folder_open</v-icon>
        <v-icon large light>widgets</v-icon>
        <v-icon large light>gavel</v-icon>
      </span>
    </v-layout>

    <v-layout justify-space-around>
      <span class="group pa-2">
        <v-icon x-large dark>home</v-icon>
        <v-icon x-large dark>event</v-icon>
        <v-icon x-large dark>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon x-large light>folder_open</v-icon>
        <v-icon x-large light>widgets</v-icon>
        <v-icon x-large light>gavel</v-icon>
      </span>
    </v-layout>
  </v-container>
</template>

<style lang="stylus">
  .group
    display: flex
    flex: 1
    justify-content: space-around
</style>
