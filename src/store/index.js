import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:[],
    projects:null,
    education:null,
    skills:null,
    experience:null,
    testimonials:null,

  },
  getters: {
    overlay:(state)=> (name) =>{
      return state.testimonials.find(test=>test.name==name)
    }
  },
  mutations: {
    setAboutMe(state, payload){
      state.aboutMe = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
    setEducation(state, payload){
      state.education = payload
    },
    setSkills(state, payload){
      state.skills = payload
    },
    setExperience(state, payload){
      state.experience = payload
    },
    setTestimonials(state, payload){
      state.testimonials = payload
    },

  },
  actions: {
    async getData({commit}){
      try {
        let response = await fetch('https://arachnidarchitect.github.io/first_api/data/data.json')
        let data = await response.json()
        let {AboutMe,  Projects, education, skills, workExp, testimonials} = data
        console.log(AboutMe)
        commit('setAboutMe', AboutMe),
        commit('setProjects', Projects),
        commit('setEducation', education),
        commit('setSkills', skills),
        commit('setExperience', workExp),
        commit('setTestimonials', testimonials)
        return data
      } catch (error) {
        alert(error+':(')
        if(error == "TypeError: Failed to fetch"){
          alert('This is usually a network isusu. Try Again when you are reconnected')
        };
      }
      
    }
  },
  modules: {
  }
})
