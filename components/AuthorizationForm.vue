<template>
  <v-form ref="form" @submit.prevent="authorize">
    <h2>Authorization form</h2>

    <v-text-field v-model="login" label="Login"></v-text-field>

    <v-text-field v-model="password" label="Password" type="password" ></v-text-field>

    <v-btn color="blue white--text" type="submit">Login</v-btn>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      bottom
    >
      {{ message }}
    </v-snackbar>
  </v-form>
</template>

<script>
export default {
  name: 'AuthorizationForm',
  data: () => ({
    login: '',
    password: '',
    snackbar: false,
    message: ''
  }),
  methods: {
    authorize() {
      // Get all users data
      const usersData = this.$store.getters.getUsersData

      // Search for user
      const user = usersData.find(user => user.login === this.login && user.password === this.password)

      // If found
      if (user) {
        // Save user id for future calls
        this.$store.dispatch('setActiveUserID', user.id)
        // Redirect to profile page
        this.$router.push('/profile')
      } else {
        this.message = 'Invalid login or password'
        this.snackbar = true
      }
    }
  }
}
</script>

<style scoped>
form {
  font-size: 22px;
  display: flex;
  flex-direction: column;
}
</style>