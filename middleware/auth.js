export default function ({ store, redirect }) {
  if (!store.getters.getIsUserLoggedIn) {
    redirect('/')
  }
}