<template lang="pug">
  v-app
    main-navigation
    v-navigation-drawer(
      right
      persistent
    )
      v-list
        v-list-item
          v-list-tile
            v-list-tile-title Hello
    main-toolbar
    main
      v-container(fluid)
        transition(name="slide" mode="out-in")
          router-view
    main-footer
</template>

<script>
  import MainNavigation from 'components/MainNavigation'
  import MainToolbar from 'components/MainToolbar'
  import MainFooter from 'components/MainFooter'

  export default {
    components: {
      MainNavigation,
      MainToolbar,
      MainFooter
    }
  }
</script>