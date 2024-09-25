<template lang="">
    <!-- this is an absolute navbar to link to the separate views -->
    <div class="resume-nav">
        <router-link to="/fullEd" class="resume-views"><button><i class="fa-solid fa-briefcase" style="color: #ffffff;"></i> <span class="desktop-alt">Full Education</span></button></router-link>
        <router-link to="/fullWork" class="resume-views"><button><i class="fa-solid fa-graduation-cap" style="color: #ffffff;"></i> <span class="desktop-alt">Full Work Experience</span></button></router-link>
        <router-link to="/fullSkills" class="resume-views"><button><i class="fa-solid fa-layer-group" style="color: #ffffff;"></i> <span class="desktop-alt">All Skills</span></button></router-link>
    </div>
    <!-- this is the resume section content -->
    <div class="resume">
        <div class="resume-row">
            <h1>RESUME</h1>
        </div>
        <div class="resume-row">
            <div class="resume-col">
                <div class="resume-card" >
                    <div class="resume-item" ><h1>[2022] - Graduated from Islamia College</h1></div>
                    <div class="resume-item-line"><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/resumeAsset1.png" alt=""></div>
                </div>
                <div class="resume-card" data-aos="zoom-in-right">
                    <div class="resume-item" ><h1>[2023] - Data Engineer - Boldr X Afresh Technologies </h1></div>
                    <div class="resume-item-line"><img src="https://arachnidarchitect.github.io/portfolio-hosting-v1/resumeAsset1.png" alt=""></div>
                </div>
                <div class="resume-card" data-aos="zoom-in-right">
                    <div class="resume-item" ><h1>[2024] -  Full stack Web Dev Intern - Life Choices</h1></div>
                    <div class="resume-item-line"></div>
                </div>
            </div>
        </div>
        <div class="resume-row">
            <a href="https://drive.google.com/file/d/1P0_pcewWGGEjKGiVUgxkgpURw-lS1T1T/view?usp=sharing" target="_blank"><button><h1>RESUME</h1></button></a>
        </div>
    </div>

</template>
<style>
    .resume{
        height: 130vh;
        margin-bottom:5em;

    }
    .resume-row{
        display: flex;
        justify-content: center;
        padding-top:2em;
        width:100%;
    }
    .resume-col{
        display: flex;
        flex-direction: column;
        width:50%;
        align-items:center;
    }
    .resume-card{
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        scale: 1 1;
        animation-name: left-to-right linear;
        animation-timeline: scroll();
    }
    .resume-item{
        background-color: #80A1FF;
        border: 3px solid #FF09DF;
        border-radius: 3em;
        padding:1em 2em 1em 2em;
        color: black;
        width:100%;
        text-align: center;

        box-shadow: 1px 1px 15px #ff09de7d;
    }
    .resume-row button{
        background-color: #005C86;
  border: 5px solid #0DDFC3;
  color:#C7D5FF;
  font-size: 1.2em;
  padding: 1em 2em 1em 2em;
    }
    .resume-nav{
        position: sticky;
        right:0;
        top:30%;
        width:fit-content;
        display: flex;
        flex-direction: column;
        float:right;
        

    }
    .resume-nav a{
        width: 100%
    }
    .resume-nav button{
        padding: 1em;
        margin-top:10px;
        background-color:#005C86;
        color:white;
        font-weight:600;
        width: 100%;
        border-bottom-left-radius: 2em;
        border-top-left-radius: 2em;
    }

 [data-aos] { 
            pointer-events: none; 
    }
    .aos-animate { pointer-events: auto; } 
    @media only screen and (max-width: 800px){
        .desktop-alt{display:none}
    } 
    .resume-nav button{
        border:none
    }   
    @media only screen and (max-width: 500px){
        h1{font-size:1.2em}
        .resume{
            height:170vh
        }
    }      

</style>
