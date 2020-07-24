<template>
  <v-card
    class="mx-auto"
    max-width="420"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline blue--text mb-4">Online</div>
        <v-list-item-title class="headline mb-1">{{ user.login }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        size="100"
      >
        <img :src="user.avatar" :alt="user.login">
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    user: Object
  }
}
</script>

<style>

</style>