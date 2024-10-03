<template>
  <div class="contact">
    <div class="contact-row"><h1>CONTACT</h1></div>

    <div class="contact-row contact-main">
      <div class="contact-col splineModel" >

 <spline scene='https://prod.spline.design/0pcxsQqqWt3Y997D/scene.splinecode' style="width:100%; height:100%"   @scroll.prevent/> 

</div>
      <div class="contact-col">
        <form action="https://formspree.io/f/myzgybzb" method="POST" target="_blank" >
          <input type="text" name="fname" id="name" placeholder="Name" />
          <input type="number" name="number" id="number"  placeholder="Number" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="text" name="message" id="message" placeholder="Message" />
          <button type="submit" @click="customVal()">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
 import spline from "spline-vue/v3"
export default {
  methods:{
    customVal(){
      let name = document.querySelector('#name')
      let number = document.querySelector('#number')
      let email = document.querySelector('#email')
      let form = document.querySelector('form')
      
      if (name.value<1 || name.value.includes(['0','1','2','3','4','5','6','7','8','9','0',])) {
        alert('enter a valid name')
        form.removeAttribute("method")
        form.removeAttribute("action")
        form.removeAttribute("target")
        
      } else if(number.value<10){
        alert('enter a valid number')
        form.removeAttribute("method")
        form.removeAttribute("action")
        form.removeAttribute("target")
      } else if(!email.value.inludes(['@', '.com'])){
        alert('enter a valid email')
        form.removeAttribute("method")
        form.removeAttribute("action")
        form.removeAttribute("target")
      }

    }
  },
  components:{
    spline
  }}
</script>
<style>
canvas{
  width: 100px;
  height: 100px;
}
.model{
  width:0%;

}
.contact-row{
  display: flex;
  justify-content:center;
}
.contact-col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:50%;
}
form{
  display: flex;
  flex-direction: column;
  align-items:center
}
input{
  background-color: transparent;
  border:2px solid  #C7D5FF;
  margin:1em;
  padding: 1em;
  color:white;
  width: 97%;
}
form button{
  width:80%;
  border-radius:1em;
  padding:1em;
  border:2px solid #C7D5FF;
  background-color: transparent;
  color:#C7D5FF;
  
}

@media only screen and (max-width:500px){
.splineModel{
  display:none;
}
}
@media only screen and (max-width: 500px){
  .contact{
    height: 70vh;
  }
}
</style>
