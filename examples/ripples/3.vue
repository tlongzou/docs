<template>
  <v-tabs grow light>
    <v-tabs-bar slot="activators">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item 
        v-for="i in 3" 
        :key="i"
        :href="'#mobile-tabs-1-' + i" ripple
      >
          Item {{ i }}
      </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>