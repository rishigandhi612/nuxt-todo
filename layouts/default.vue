<template>
  <v-app dark>

    <v-main class="my-16">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Rishi - Nuxt - Todo',
    }
  },
  computed: {
    // Computed property to detect if screen size is mobile or tablet
    isMobileOrTablet() {
      return this.$vuetify.breakpoint.smAndDown; // True for small and down screens
    }
  },
}
</script>
