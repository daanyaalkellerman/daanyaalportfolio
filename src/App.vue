<template>
    <LandingPage/>
</template>

<script>
import LandingPage from './components/LandingPage.vue';

export default {
  name: 'App',
  components: {
    LandingPage
  },
  computed:{
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
