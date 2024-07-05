<template>
    <div class="testimonials-overlay">
        <div class="to-item">
            <div class="to-item-name" ><h1 >{{name}}</h1></div>
            <div class="to-item-name" ><h2> {{title}}</h2></div>
            <div class="to-item-name" >{{description}}</div>

        </div>
    </div>
    <div class="testimonials">
        <div class="testimonials-row">
            <h1>TESTIMONIALS</h1>
        </div>
        <div class="testimonials-row">
            <div class="testimonials-cards">
                <div class="tc-item" v-for="testimonial in getTestimonials()" :key="testimonial" @click="overlay(testimonial.name)">
                    <img :src="testimonial.image" alt="">
                    <h3>{{testimonial.name }}</h3>
                </div>
                <!-- <div class="tc-item">b</div>
                <div class="tc-item">c</div>
                <div class="tc-item">d</div>
                <div class="tc-item">e</div>
                <div class="tc-item">f</div> -->

            </div>
        </div>
    </div>
</template>
<style>
.testimonials-overlay{
    /* display: none; */
    position: absolute;
    background-color:rgba(0, 0, 0, 0.818);
    height: 100%;
    width:100%;

    display: none;
    justify-content: center;
    align-items: center;
}
.to-item{
    width: 20em;
    height: 30em;
    background-color: #060C26;
    border:4px solid #FF09DF;
    box-shadow:1px 1px 25px #ff09de83;
    color: #7485BF;

    padding: 1.5em;
}
.testimonials{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.testimonials-row{
    display: flex; 
    justify-content: center;
}
.testimonials-cards{
    display: flex; 
    justify-content: space-evenly;
    padding: 2px;
    width: 100%;

  border: 2px solid transparent;
  border-image: linear-gradient(90deg,#FF09DF00, #FF09DF , #FF09DF00);
  border-image-slice: 1;

  padding:2em;
}
.tc-item{
    background-color:#060C26;
    border: 3px solid #FF09DF;
    color:#7485BF;
    width: 10em;
    height: 20em;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
}
.tc-item img{
    width:80%
}

</style>
<script>
/*es-lint disable */
export default({
    data(){
        return{
            name:'',
            title:'',
            description:''
        }
    },
    methods:{
        getTestimonials(){
            return this.$store.state.testimonials
        },
        overlay(name){
            let test = this.$store.getters.overlay(name)
            this.name = test.name
            this.title = test.position
            this.description = test.message
            let overlay = document.querySelector('.testimonials-overlay')
            overlay.style.display = 'flex'

        },
        close(){
            let overlay = document.querySelector('.testimonials-overlay')
            overlay.addEventListener('click', (e)=>{
                if(e.target.className == 'testimonials-overlay'){
                    overlay.style.display = 'none'
                }

            })
        }
    },
    mounted() {
        // this.overlay()
        this.close()
    },
})
</script>
