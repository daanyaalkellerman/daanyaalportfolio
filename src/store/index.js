import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    skills:[],
    projects:[]
  },
  getters: {
  },
  mutations: {
    setSkills(state,skills){
      state.skills = skills
    },
    setProjects(state,projects){
      state.projects = projects
    }
  },
  actions: {
    getSkills (context){
      try{
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then ( res => {
          context.commit('setSkills' , res.data.skills)
        })
      }catch (e){
        alert('skills busy manifesting')
      }
    },
    getProjects (context){
      try{
        axios.get('https://daanyaalkellerman.github.io/vueJSON1/')
        .then ( res => {
          console.log(res.data.projects)
          context.commit('setProjects' , res.data.projects)
        })
      }catch (e){
        alert('projects busy manifesting')
      }
    }
  },
  modules: {
  }
})
