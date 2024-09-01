<template>
  <body id="global-body">
    <router-view/>
    <footer-comp/>
  </body>
</template>

<script>
import FooterComp from './components/FooterComp.vue'
export default{
  components:{
    FooterComp,
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
::selection {
  color: rgb(221, 12, 214)
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#global-body{
  background-color: #000002;
}
#app {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #80A1FF;
}

#nav1 {
  padding: 30px;
  display: flex;
  justify-content: center;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  position: sticky;
  top: 0px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.541) 75%, rgba(0, 0, 0, 0))
}

#nav1 ul {
  font-weight: bold;
  color: #2c3e50;
  display: flex;
}
#nav1 ul li {
  font-weight: bold;
  color: #2c3e50;
  list-style: none;
  text-transform:lowercase;
  padding: 0 1em 0 1em;
}
#nav1 ul li > *{
  text-decoration: none;
}
#nav1 a.router-link-exact-active {
  color: #42b983;
}
.return_btn>button{
  background-color:#005C86;
  padding:1em;
  color:white;
  font-weight:600;
  border:none;
  border-top-right-radius:1em;
  border-bottom-right-radius:1em;
}
</style>
