<template>
  <v-card height="30vh" style="overflow: hidden;">
    <v-app id="example-4">
      <v-navigation-drawer 
        permanent
        absolute
        height="30vh"
        style="z-index: 1"
      >
        <v-list>
          <v-list-item v-for="i in 3" :key="i">
            <v-list-tile ripple>
              <v-list-tile-title>Link {{ i }}</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </v-card>
</template>