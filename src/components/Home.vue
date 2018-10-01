<template>
<div>
  <h1>Welcome to the Grizzly Getaway</h1>
  <h2>Run by bears, for bears.<sup>®</sup></h2>
  
  <div class="widget" id="about">
    <h3>About us:</h3>
    <p>Our mission is to provide your ideal bear vacation.</p>
    <p>With <b>100 acres</b> of mixed evergreen and deciduous forest, a wide assortment of <b>gourmet picnic baskets</b>, and <b>15 types of honey</b> available on-tap at our bar, Grizzly Getaway is the getaway for you.</p>
  </div>
  
  <div class="widget">
    <h3>GG Name</h3>
    <p>At GG, we'll give you a bear name if you don't have one. Type your name to see your bear name:</p>
    <input v-model="name">
    <p>Your regular name: {{ name }}</p>
    <p>Your bear name: {{ bearName }}</p>
    
  </div>
  
  <div class="widget" >
    <h3>Our Sister Company, Horse Hotel</h3>
    <p>If you didn't like your bear name, type below to find out your horse name. Maybe you'll like that more:</p>
    <input>
    <p>Your regular name: </p>
    <p>Your horse name:</p>
    
  </div>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  computed: {
    bearName() {
      if (this.name.length > 1) {
        return this.name + ', The Bear';
      } else {
        return '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/globalVars.scss';  

  #about {
/*
    setting position to 'relative' so we can use position: absolute
    on it's child, the :before element.
*/  position: relative;
  }
  #about:before {
    content: '🐻';
    font-size: 150px;
    position: absolute;
    opacity: .1;
    right: 20px;
    top: 5px;
    z-index: 0;
  }
  input {
    background: none;
    border: none;
    border-bottom: solid 2px black;
    outline-top: none;
  }
  h1 {
    text-decoration: underline;
    text-decoration-color: $orange;
  }
  b {
    color: $purple;
  }
</style>