<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style>
@import url(./css/reset.css);
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #222;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1, p, button, input{
  font-family: 'Sora', sans-serif;
}

</style>
