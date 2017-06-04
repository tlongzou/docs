<template lang="pug">
  div(class="doc")
    v-layout(column-xs row-sm)
      v-flex(xs12 sm8 md12)
        section-def
          dt(slot="title") Frequently asked questions
          dd(slot="desc") Stuck on a particular problem? Check some of these common gotchas before creating a ticket. If you still cannot find what you are looking for, submit an <a href="https://github.com/vuetifyjs/vuetify/issues/new" target="_blank">issue</a> on github.
      ad
</template>

<script>
  export default {
    //
  }
</script>