<template>
  <main>
    {{ user }}
  </main>
</template>

<script>
export default {
  // asyncData() used to simulate api call
  asyncData({ store }) {
    const user = store.getters.getActiveUserData

    return { user }
  },
}
</script>

<style>

</style>