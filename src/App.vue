<script>
import AppHeader from "./components/HeaderApp.vue";
import AppMain from "./components/MainApp.vue";
import AppFooter from "./components/FooterApp.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  
}
</script>

<template>
  <div id="site-container">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>

</template>

<style scoped></style>
