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
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>
