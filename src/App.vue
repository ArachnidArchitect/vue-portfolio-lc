<template>
  <body id="global-body">
    <router-view/>
  </body>
</template>

<script>

export default{
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

nav {
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

nav ul {
  font-weight: bold;
  color: #2c3e50;
  display: flex;
}
nav ul li {
  font-weight: bold;
  color: #2c3e50;
  list-style: none;
  text-transform:lowercase;
  padding: 0 1em 0 1em;
}
nav ul li > *{
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
