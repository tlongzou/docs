<template lang="pug">
  component(:is="component")
</template>

<script>
  import one from './one'
  import two from './two'
  export default {
    components: {
      one,
      two
    },
    data: () => ({
      component: 'two'
    })
  }
</script>