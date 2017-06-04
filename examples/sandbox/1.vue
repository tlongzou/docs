<template>
  <v-app
    id="sandbox"
    :dark="dark"
    :light="!dark"
  >
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.permanent"
      :persistent="primaryDrawer.persistent"
      :temporary="primaryDrawer.temporary"
      :clipped="primaryDrawer.clipped"
      absolute
    ></v-navigation-drawer>
    <v-toolbar light>
      <v-toolbar-side-icon light></v-toolbar-side-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs8>
            <v-card height="200px"></v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dark: false,
      primaryDrawer: {
        model: true,
        permanent: false,
        persistent: true,
        temporary: false,
        clipped: false
      }
    })
  }
</script>

<style>
  #sandbox {
    border: 1px solid rgba(0, 0, 0, .1);
  }
  #sandbox .container, #sandbox {
    min-height: 700px;
  }
</style>
