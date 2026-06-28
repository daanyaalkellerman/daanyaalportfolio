<template>
  <LandingPage v-if="isHomePath" />
  <NotFoundRedirect v-else />
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import NotFoundRedirect from './components/NotFoundRedirect.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
    NotFoundRedirect
  },
  computed:{
    isHomePath() {
      return window.location.pathname === '/' || window.location.pathname === '';
    },
    getProjects(){
      return this.$store.dispatch("getProjects")
    },
    getSkills(){
      return this.$store.dispatch("getSkills")
    }
  },
  mounted(){
    this.getProjects
    this.getSkills
  }
}

</script>

<style>

</style>
