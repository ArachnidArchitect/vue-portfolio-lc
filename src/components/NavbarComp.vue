<template>
    <nav id="nav1">
        <ul>
            <li><a href="#">Home</a> </li>
            <li><a href="#projects">Projects</a> </li>
            <li><a href="#about">About</a> </li>
            <li><a href="#resume">Education & Experience</a> </li>
            <!-- <li><a href="#testimonials">Testimonials</a> </li>  -->
            <li><a href="#contact">Contact</a> </li>
        </ul>
    
    
  </nav>
    <nav id="nav2">
        <div class="nav-row">
            <div class="nav-logo">mtdt</div> 
            <div class="nav-toggle"  @click="toggleNav()"><i class="fa-solid fa-bars"></i></div> 
        </div>
        <div class="nav-sideList">
            <ul>
                <li><a href="#">Home</a> </li>
                <li><a href="#projects">Projects</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="#resume">Education & Experience</a> </li>
                <li><a href="#contact">Contact</a> </li>
            </ul>

        </div>
    
    
  </nav>
</template>
<script>
export default {
    methods:{
        toggleNav(){
            let list = document.querySelector('.nav-sideList ul')
            list.style.display = "block"
            let items = document.querySelectorAll('li')
                items.forEach(item => {
                    item.addEventListener('click', ()=>{
                        list.style.display="none"
                    })
                })
            
            }

    }
}
</script>
<style>
#nav1 a, #nav1 a:visited{
    color:white;
}
#nav1 a:active, #nav2 a:active{
    color: rgb(221, 12, 214);
}
#nav2{
    display: none;
}
@media only screen and (max-width:500px){
#nav1{
    display:none;
}
#nav2{
    display:flex;
    justify-content: flex-end;
    width: 100%;
    background-color: #121212;
    border-bottom: 2px solid #80A1FF;
    padding: 30px;
    position:sticky;
    top: 0;

}
.nav-row{
    display: flex;
    justify-content:flex-end;
    width:60%;
    justify-content: space-between;

}
#nav2 ul{
    padding-top:50px;
    position:absolute;
    left:0;
    width: 100%;
    display:none;
    transform: translateZ(100);
    
}
#nav2 ul li{
 list-style:none;
 background-color: #353533;
 padding:1em;
 text-align: center;
 

}
#nav2 ul li a, #nav2 ul li a:visited{
 text-decoration:none;
 color:white;

}
#nav2 ul:hover{
    display:flex;
}

}
</style>