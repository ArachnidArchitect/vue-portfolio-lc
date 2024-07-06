<template lang="">
    <!-- this is an absolute navbar to link to the separate views -->
    <div class="resume-nav">
        <router-link to="/fullEd"><button>Full Education</button></router-link>
        <router-link to="/fullWork"><button>Full Work Experience</button></router-link>
        <router-link to="/fullSkills"><button>All Skills</button></router-link>
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
            <a href="https://drive.google.com/file/d/1TAfR2ev43TPrkOHraSE_NyXXODQkRCe4/view?usp=sharing" target="_blank"><button><h1>RESUME</h1></button></a>
        </div>
    </div>

</template>
<style>
    .resume{
        height: 110vh;
    }
    .resume-row{
        display: flex;
        justify-content: center;
        padding-top:2em;
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
        display: flex;
        flex-direction: column;
        align-items: end;
        

    }
    .resume-nav a{
        width: 10em;
    }
    .resume-nav button{
        padding: 1em;
        margin-top:10px;
        background-color:blue;
        width: 100%;
        border-bottom-left-radius: 2em;
        border-top-left-radius: 2em;
    }

 [data-aos] { 
            pointer-events: none; 
    }
    .aos-animate { pointer-events: auto; } 
    @media only screen and (max-width: 500px){
        .resume{
            height:170vh
        }
    }      

</style>