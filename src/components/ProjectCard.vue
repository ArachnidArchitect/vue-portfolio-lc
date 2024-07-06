<template>
<div class="card">
    <div class="image">
        <slot name="image">
        <img src="../assets/pngegg.png" alt="" width="100%">
        </slot>
        <slot name="project-name">
        <h1>Untitled</h1>
        </slot>
    </div>
    <div class="links">
        <slot name="github">
            <a href=""><button><img src="" alt="githubIcon">Github</button></a>
        </slot>
        <slot name="live">
            <a href=""><button><img src="" alt="liveIcon">Live</button></a>         
        </slot>
    </div>
</div>
</template>

<style scoped>
.card{
    background-color:black;
    padding:1em;
    width: 95%;
    height: 100%;
    border-radius:25px;
    border: 5px solid #80A1FF;
}
.image{
    width: 100%;
}
.links{
    display:flex;
    justify-content:space-evenly;
    padding:1em;
    /* display:none */
}
.links>a{
    width:40%;
    height:100%
}
.links button{
    opacity: 0;
    background-color: #1F1E1E;
    padding: 1em;
    color:white;
    transition-duration: .5s;
    border-radius:1em;
    width: 100%;
    height:100%;
}
.card:hover .links button{
    opacity: 100;
}
button:hover{
    background-color: #3f3d3d;
}

</style>
