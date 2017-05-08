<template>
  <div>
    <div class="portrait">
      <v-card img="/public/doc-images/cards/girl.jpg" height="300px">
        <v-card-row actions class="white--text pl-3 pt-3 pb-3">Picture.png</v-card-row>
      </v-card>
    </div>
    <div class="portrait mt-3">
      <v-card img="/public/doc-images/cards/drop.jpg" height="300px">
        <v-card-row actions class="white--text pl-3 pt-3 pb-3">Picture.png</v-card-row>
      </v-card>
    </div>
  </div>
</template>

<style type="stylus" scoped>
  .portrait
    .card__row--actions
      background: rgba(0,0,0,.5)
</style>
