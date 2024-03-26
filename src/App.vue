<script>
import AppHeader from "./components/HeaderApp.vue";
import AppMain from "./components/MainApp.vue";
import AppFooter from "./components/FooterApp.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  // Utilizzo prima questo spazio, poi sistemo tutto nelle parti più consone
  

}
</script>

<template>
  <div id="site-container">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>

</template>

<style scoped>

</style>
