<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'chat'}">Chat</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/globalVars.scss';  
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $gradient;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  padding-bottom: 100px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  
  
  
  h1, h2 {
    padding: 0px 5vw;
  }
  .widget {
    background: $white;
    box-shadow: $box-shading;
    width: 50%;
    min-width: 270px;
    padding: 20px;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 20px;
  }
</style>
