<template lang="">
    <main>
        <router-link to="/"><button>Go Back</button></router-link>
        <div class="skills-row">
            <h1>Technical Skills</h1>
        </div>
        <div class="skills-row">
            <div class="skills-grid">
                
                <div class="skills-grid-item" v-for="skill in getSkills()" :key="skill">
                    <div class="gi-card skills-col">
                        <!-- <div class="gi-card-image">{{skill.image}}</div> -->
                        <div class="gi-card-name">{{skill.name}}</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="skills-row">
            <h1>Technical Skills</h1>
        </div>
        <div class="skills-row">
            <div class="skills-grid">
                
                <div class="skills-grid-item" v-for="skill in getSkills()" :key="skill">
                    <div class="gi-card skills-col">
                        <!-- <div class="gi-card-image">{{skill.image}}</div> -->
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
    }
    .skills-col{
        display:flex;
        flex-direction: row;
    }
    .skills-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
        width:100vw;
    }
    .skills-grid-item{
        align-items: center;
        width:100%
    }
</style>
