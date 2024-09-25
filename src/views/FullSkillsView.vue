<template lang="">
    <main>
        <router-link to="/" class="return_btn"><button>Go Back</button></router-link>
        <div class="skills-row">
            <h1>Technical Skills</h1>
        </div>
        <div class="skills-row">
            <div class="skills-grid">
                
                <div class="skills-grid-item" v-for="skill in getSkills()" :key="skill">
                    <div class="gi-card skills-col">
                        <div class="gi-card-image"><img :src="skill.image"> </div>
                        <div class="gi-card-name">{{skill.name}}</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="skills-row">
            <h1>Tech Stack</h1>
        </div>
        <div class="skills-row">
            <div class="skills-grid">
                
                <div class="skills-grid-item" v-for="skill in getSoftSkills()" :key="skill">
                    <div class="gi-card skills-col">
                        <div class="gi-card-image">  <img :src="skill.image"> </div>

                        <div class="gi-card-name">{{skill.name}}</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="skills-row">
            <div class="skills-grid">
        
            </div>

        </div>

    </main>
</template>
<script>
export default {
    methods:{
        getSkills(){
            return this.$store.state.skills
        },
        getSoftSkills(){
            return this.$store.state.softSkills
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
}
</script>
<style >
main{
    min-height:100vh
}
    .skills-row{
        display:flex;
        flex-direction: row;
        justify-content: center;
        padding:1em;
    }
    .skills-col{
        display:flex;
        flex-direction: column;
        align-items:center;
    }
    .skills-grid{
        display: grid;
        grid-template-columns: auto auto auto;
        width:50vw;
    }
    .skills-grid-item{
        align-items: center;
        width:100%
    }
</style>
