<template lang="">
  <section id="landing">
    <div class='greeting'>
      <h1>Taahir Du Toit</h1>
      <p>Full-stack Web Developer</p>
    </div>
    <div class="gallery" id="projects">
      <div class="gallery-row">
        <h1>MY FAVOURITE PROJECTS</h1>
      </div>
      <div class="gallery-row gallery-cards" >
        <project-card></project-card>
        <project-card></project-card>
        <project-card></project-card>
      </div>
      <div class="gallery-row gr-3">
        <button>EXPLORE MORE</button>
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
</template>
<script>
import ProjectsComp from "../components/ProjectsComp.vue";
import ProjectCard from "../components/ProjectCard.vue";
import AboutComp from "../components/AboutComp.vue";
import ResumeComp from "../components/ResumeComp.vue";
export default {
  components: {
    ProjectsComp,
    ProjectCard,
    AboutComp,
    ResumeComp,
  },
};
</script>
<style>
/* section by section code */
#about, #resume{
  display:none
}

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
  width: 80%;
}
.gr-3 button{
  background-color: #005C86;
  border: 5px solid #0DDFC3;
  color:#C7D5FF;
  font-size: 1.2em;
  padding: 1em 2em 1em 2em;
}
</style>
