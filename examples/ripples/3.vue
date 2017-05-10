<template>
  <v-tabs grow>
    <v-tab-item 
      v-for="i in 3" 
      :key="i"
      :href="'#mobile-tabs-1-' + i" ripple
      slot="activators"
    >
        Item {{ i }}
      </v-tab-item>

    <v-tab-content 
      v-for="i in 3"
      :key="i"
      :id="'mobile-tabs-1-' + i"
    >
      ...
    </v-tab-content>
  </v-tabs>
</template>