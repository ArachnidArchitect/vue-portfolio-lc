<template>
  <div class="about">
    <div class="about-row"><h1>About Me</h1></div>
    <div class="about-row">
      <div class="about-column ac1 show" >
        <h1>I am...</h1>
        <h3 data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="700">Self motivated</h3>
        <h3 data-aos="fade-right"
     data-aos-easing="linear" 
     data-aos-duration="700">Goal orientated</h3>
        <h3 data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="700">Helpful</h3>
        <h3 data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="700">A team player</h3>
        <h3 data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="700">Curious</h3>
        <h3 data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="700">Determined</h3>
      </div>
      <div class="about-column ac2 show">
        <img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/proffesionalPic.jpg"  alt="">
        <h2><button @click="aboutAnimation">More about me</button></h2>
      </div>
      <div class="about-column ac3 show">
        <h1>SOME SOFT SKILLS</h1>
        <div  v-for="(skill, index) in getSoftSkills()" :key="index">
          <h3 v-if="index<3"><img :src="skill.image" alt="">{{ skill.name }}</h3>
        </div>
    <router-link to="/fullSkills" class="resume-views"><button><i class="fa-solid fa-layer-group" style="color: #ffffff;"></i> <span class="desktop-alt">All Skills</span></button></router-link>

      </div>
      <div class="about-column ac4">
  <p v-for="(par, index) in getAboutInfo()" :key="index">{{ par }}</p>
</div>
        <!-- <p>My name is Taahir Du Toit, and I am passionate about technology, particularly in the fields of web development and data engineering. I believe in living an integrated lifestyle, approaching everything holistically, and applying all that I learn.</p>

<p>I started teaching myself to code at the age of 12 after being fascinated by the endless control the digital realm has to offer. Since then, I've expanded my skills from coding to video editing,some basic programming and more.</p>

<p>In my free time, I enjoy playing pool, surfing, spending time with friends and family, learning new skills, and reading. I am outgoing and thrive on meeting new people and exploring new activities.</p>

<p>Diligence and focus are important to me. I approach tasks systematically to ensure comprehensive coverage. I excel in communication and thrive in team environments.</p>
<p>
Let's get together! I'd love the opportunity to get to know you too;)
</p> -->

    </div>
  </div>
</template>

<script>
 
export default {
  methods: {
    getAboutInfo(){
      return this.$store.state.aboutMe
    },
    getSoftSkills(){
            return this.$store.state.softSkills
        },
    aboutAnimation(){
      let col1 = document.querySelector('.ac1')
      let col2 = document.querySelector('.ac2')
      let col3 = document.querySelector('.ac3')
      let col4 = document.querySelector('.ac4')

      col1.style.display = "none"
      col2.style.display = "none"
      col3.style.display = "none"
      col4.style.display = "block"

    },
    computed:{
    getData(){
      return this.$store.dispatch('getData')
    }
  },
   mounted() {
     this.getData
     this.getAboutInfo()
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
.about{
  margin-top:2em;
  height: 100vh;
  background: linear-gradient(180deg, rgba(13,31,148,0.1), black);
}
.about-row{
  display:flex;
  flex-direction: row;
  justify-content:space-around;

}
.about-row h1{
  font-size: 3em;
}
.about-column{
  display:flex;
  flex-direction: column;
  height:80vh;
}
.ac1{
  justify-content:space-evenly;
  font-size:1em;
}.ac1 h3{
  font-weight: 200;
}
.ac2{
  align-items:flex-end;
 width:25%;
 justify-content: space-evenly;
}
.ac2 button{
  background-color:#005C86;
  border-radius:1em;
  color:white;
  border:none;
  font-size: .7em;
  font-weight:600;
  padding: 1em 2em 1em 2em;
}
.ac3{
  justify-content: center;
}
.ac3>h3{
  padding-bottom:2em; 
  font-weight: 200; 
  text-align:left;
  display:flex;
  flex-direction: row;
  align-items: center;
}
.ac3>h3 img{
  padding: 0 2em 0 1em;
}
.ac3 h1{
  font-size:2em;
  font-weight: 200; 
  padding-bottom:1em; 
}
.ac2 img{
  width:10em;
  box-shadow: 1px 2px 35px #80a2ff8a;
  border-radius:1em;
  
}
.show{
  display:flex;
}

.ac4{
  display:none;
  width:60%;
  line-height: 1.6;
  font-family: "JetBrains Mono", monospace;
  font-weight: 500;
  color:white
}
.ac4 p{
  padding-top:1.6em;
}
.resume-views{
  width:100%;
  display:flex;
  justify-content: center;
}
.resume-views button{
  padding: 1em;
        margin-top:10px;
        background-color:#005C86;
        border:none;
        color:white;
        font-weight:600;
        width: fit-content;
        border-radius: 2em;
        float:right;
}
button:hover{
    background-color: #0284c0;
}
@media only screen and (max-width: 500px) {
  .ac3{
    display:none
  }
  .ac4{
    width:80%;
    overflow-y: scroll;
  }
}
</style>