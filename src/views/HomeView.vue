<template lang="">
  <navbar-comp></navbar-comp>
  <section id="landing">
    <div class='greeting'>
      <h1>Taahir Du Toit</h1>
      <p>Full-stack Web Developer</p>
    </div>
    <div class="gallery" id="projects">
      <div class="gallery-row">
        <h1>MY FAVOURITE PROJECTS</h1>
      </div>
      <div class="gallery-cards " >
        <div class="project-gallery" v-for="(project,index) in getProjects()" :key="index">
          <project-card v-if="index<amountDisplayed">
            <template #image>
              <img :src="project.image" alt="">
            </template>
            <template #project-name>
              <center><h1>{{project.name}}</h1></center>
            </template>
            
            <template #github>
              <a :href="project.github"><button><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/githubIcon.png" width="20px" height="20px" alt="githubIcon">Github</button></a>
            </template>
            <template #live>
              <a :href="project.vercel"><button><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/liveIcon.png" width="20px" height="20px" alt="liveIcon">Live</button></a>
            </template>
          </project-card>

        </div>
        <!--  -->

      </div>
      <div class="gallery-row gr-3">
        <button id="project-explore-btn" @click="amountDisplayed = 6">EXPLORE MORE</button>
      </div>
    </div>
  </section>

  <!-- this is the projects section -->
  <!-- <section id="projects">
    <projects-comp></projects-comp>
  </section> -->

  <!-- this is the about section -->
  <section id="about">
    <about-comp></about-comp>
  </section>

  <!-- this is the resume section -->
  <section id="resume">
    <resume-comp></resume-comp>
  </section>
  <!-- this is the testimonials section -->
  <section id="testimonials">
    <testimonials-comp></testimonials-comp>
  </section>
  <!-- this is the contact section -->
  <section id="contact">
    <contact-comp></contact-comp>
  </section>
</template>
<script>
import NavbarComp from '../components/NavbarComp.vue';
import ProjectCard from "../components/ProjectCard.vue";
import AboutComp from "../components/AboutComp.vue";
import ResumeComp from "../components/ResumeComp.vue";
import TestimonialsComp from "../components/TestimonialsComp.vue";
import ContactComp from "../components/ContactComp.vue";
export default {
  data(){
    return{
      amountDisplayed:3,
    }
  },
  components: {
    NavbarComp,
    ProjectCard,
    AboutComp,
    ResumeComp,
    TestimonialsComp,
    ContactComp,
  },
  methods: {
    getProjects() {
      return this.$store.state.projects
    },
    getScreenSize(){
      if (window.matchMedia("(max-width: 500px)").matches) {
        this.amountDisplayed = 4
      }
    }
  },
  computed:{
    getData(){
      return this.$store.dispatch('getData')
    }
  },
   mounted() {
     this.getData
     this.getProjects()
     this.getScreenSize()
    },
};
</script>
<style>
/* section by section code */

/* landing styling */
.greeting{
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  background-image: url('https://images.unsplash.com/photo-1714779573220-39c843a7daa3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position-x:center;
  padding-left:2em;

  font-size: 5cqi;
}
.greeting p{
  font-size: 30px;
}
.gallery{
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  height: 150vh;
  background: rgb(13,31,148);
  background: linear-gradient(180deg, rgba(13,31,148,0.15) 10%, rgba(131,25,120,0.2970081831560749) 57%, rgba(13,31,148,0.1) 100%);}

.gallery-row{
  display: flex;
  flex: row;
  height: fit-content;
  padding-bottom: 2em;

}
.gallery-cards{
  flex-wrap: wrap;
  width:95vw;
  display:grid;
  grid-template-columns: repeat(auto-fit, minMax(350px, 1fr));
  gap: 1em;
}
.gallery-cards img{
width: 100%;
}
.gr-3 button{
  background-color: #005C86;
  border: 5px solid #0DDFC3;
  color:#C7D5FF;
  font-size: 1.2em;
  padding: 1em 2em 1em 2em;
}
.project-gallery{
  width:100%;
  height:auto;
  margin: 0 .5em 0 .5em;
  
}
.card{
  width: fit-content;
}

/* project github and live styling */
.links>a{
    width:40%;
    height:100%;
   
}
.links button{
  opacity: 0;
  background-color: #1F1E1E;
  padding: 1em;
  color:white;
  transition-duration: .5s;
  border-radius:1em;
  width: 100%;
  height:100%;
  display:flex;
  justify-content:center
}
.links button img{
width: 20px;
height: 20px;
}
.card:hover .links button{
    opacity: 100;
}
button:hover{
    background-color: #3f3d3d;
}

@media only screen and (max-width: 500px){
  .gallery-cards{
    grid-template-columns: repeat(auto-fit, minMax(170px, 1fr));
  }
}
</style>
