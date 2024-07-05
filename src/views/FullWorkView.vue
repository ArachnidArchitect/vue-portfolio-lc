<template lang="">
    <div class="fullEd">
        <router-link to="/"><button>Go Back</button></router-link>
  <div class="edu-col">
    <div class="edu-row">
      <h1>Full Work Experience</h1>
    </div>
    <div class="edu-row">
      <h3>Items:</h3>
    </div>
    <!-- ill put my v-for in here -->
    <div class="edu-row" v-for="(education,index) in getEducation()" :key="index">
      <div class="edu-card">
        <h3>{{education.placeOfWork}}</h3>
        <div class="edu-card-inside">
          <p @click="getEducation">
            {{education.description}}
          </p>

          <a href="#" >Certificate</a>
        </div>
        <div class="edu-ref" >
          <div class="edu-ref-item" v-for="contact in education.contact" :key="contact">{{contact.name}}</div>
        </div>
      </div>
    </div>
    <!-- <div class="edu-row">
      <div class="edu-card">
        <h3>Islamia College</h3>
        <div class="edu-card-inside">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            saepe! Provident doloribus rerum soluta perspiciatis neque quis
            consectetur dolores accusantium iusto porro harum, est modi vel
            aspernatur debitis dicta ullam!
          </p>

          <a href="">Certificate</a>
        </div>
        <div class="edu-ref">
          <div class="edu-ref-item">Mrs. NH Kafaar</div>
        </div>
      </div>
    </div> -->
  </div>
</div>
</template>
<script>
export default {
    methods:{
        getEducation(){
            return this.$store.state.experience
        }
    },
    computed:{
    getData(){
      return this.$store.dispatch('getData')
    }
  },
    mounted() {
        this.getData
    },
};
</script>
<style>
.fullEd{
    min-height:100vh;
}
.edu-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.edu-col {
  display: flex;
  flex-direction: column;
}
.edu-card {
  display: flex;
  flex-direction: column;
  width: 30em;
  text-align: center;
  padding: 1em;
  align-items: center;
}

.edu-card-inside {
  padding: 1em;
  border: 5px solid blue;
  background-color: #05052e;
  border-radius: 2em;
  font-weight: 200;
}
.edu-card-inside > * {
  padding: 1em;
}
.edu-card-inside a {
  background-color: #80a1ff;
  text-transform: uppercase;
  color: black;
  font-weight: 400;
  padding: 0.5em;
  margin: 1em;
}
.edu-ref {
  background-color: white;
  width: 80%;
}
</style>
