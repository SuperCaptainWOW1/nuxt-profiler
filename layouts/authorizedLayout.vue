<template>
  <v-app>
    <v-container>
      <v-row class="align-center pb-3">
        <h1>Profile Viewer</h1>
        <v-btn class="ml-auto" outlined @click="logout">Logout</v-btn>
      </v-row>

      <v-divider class="mb-10" />

      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>