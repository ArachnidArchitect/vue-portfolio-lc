<template>
    <div id="footer1" class="footer">
        <div class="footer-row footer-main">
              <div class="footer-row"><a href="#">Taahir Du Toit © {{currentYear()}}</a></div>
              <div class="footer-row footer-images">
              <a href="https://www.github.com/arachnidarchitect/" target="_blank"><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/github.png.png" alt="git"></a>
              <a href="https://www.linkedin.com/in/taahir-dutoit-501652210/" target="_blank"><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/linkedin.png.png" alt="linkeddin"></a>
            </div>
              <div class="footer-row">
                <div class="footer-col">
                    <span class="contact_no"><img src="../assets/png_flbie.svg" alt="" width="30px" height="30px">+27 67 135 8236</span>
                <a href="mailto:proffesionalworkingstuff@gmail.com">Let's work together!</a>
                </div>
            </div>
      </div>
    </div>
    <div id="footer2" class="footer">
        <div class="footer-row">
          <div class="footer-col footer-images">
              <a href="https://www.github.com/arachnidarchitect/" target="_blank"><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/github.png.png" alt="git"></a>
              <a href="https://www.linkedin.com/in/taahir-dutoit-501652210/" target="_blank"><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/linkedin.png.png" alt="linkedin"></a>
          </div>
          <div class="footer-col">
              <div class="footer-row"><a href="#">Taahir Du Toit © {{currentYear()}}</a></div>
              <div class="footer-row"><span class="contact_no">+27 67 135 8236</span></div>
              <div class="footer-row"><a href="mailto:proffesionalworkingstuff@gmail.com">Let's work together!</a></div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    methods:{
        currentYear(){
           let x= new Date()
            return x.getFullYear()
        }
    }

}
</script>
<style>
#footer2{
    display:none;
    padding:1em
}
#footer1{
    padding:2em
}
.footer-main{
    justify-content: space-between
}
.footer{
    font-family: "JetBrains Mono", monospace;
    color:#929397;
    background-color:#121212;
}
.footer-row{
    display: flex;
    flex-direction: row;

}
.footer-col{
    display: flex;
    flex-direction:column;
}
.footer-images a{
    width:100%;
}
.footer-images a img{
    width:100%
}

a, a:visited{
    text-decoration: none;
    color:#929397;
}
.contact_no{
    text-wrap: nowrap;
}
a{
    display:flex;
    align-items:center;
}
@media only screen and (max-width:500px) {
    #footer1{
        display: none;
    }
    #footer2{
        display:block
    }
.footer-images{
    display: flex;
    flex-direction:column;
    width: 25px;
}


}
</style>