<template>
<div>
  <h1>Contact Us</h1>
  <h2>Send us a message!</h2>
  
  <div class="widget">
    <h3>What's wrong?: </h3>
    <p>
      Cabin number: 
      <input type="number" v-model="currentMessage.number">
    </p>
    <p>
      Your message:
      <textarea v-model="currentMessage.text"></textarea>
    </p>
    <p>Once you submit your message, it should appear below</p>
    <button>Send!!</button>
  </div>
  
  <div class="widget" v-for="message in messages">
    <p>Cabin Number: {{ message.number }}</p>
    <p>Message: {{ message.text }}</p>
  </div>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      currentMessage: {
        number: 0,
        text: '',
      },
      messages: []
    }
  },
  methods: {
    sendMessage(message) {
      this.messages.push(this.currentMessage);
      this.currentMessage.number = 0;
      this.currentMessage.text = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/globalVars.scss';  

  #chat {
    
  }
  .chat-details {
    display: flex;
    justify-content: space-between;
  }
  .time {
    opacity: .5;
  }
  .chat-widget {
    background: $purple;
    color: white;
    h3 {
      margin: 0px;
    }
  }
</style>