<template>
<div>
  <h1>Contact Us</h1>
  <h2>Send us a message!</h2>
  
  <div class="widget">
    <h3>What's wrong?: </h3>
    <p>
      Cabin number: 
      <input type="number" v-model="cabinNumber">
    </p>
    <p>
      Your message:
      <textarea v-model="text" @keyup.enter="sendMessage()"></textarea>
    </p>
    <p style="font-weight: bold;">Once you submit your message, it should appear below - similar to how we'd like our chat page to work! </p>
    <p>To send your message to us, simply then print out this webpage and mail it to us!</p>
    <p>555 Grizzly Hollow, Bearburg, Alberta, Canada</p>
    <button @click="sendMessage()">Send!!</button>
  </div>
  
  <div class="widget" v-for="message in messages">
    <p>Cabin Number: {{ message.cabinNumber }}</p>
    <p>Message: {{ message.text }}</p>
  </div>
    
</div>
</template>

<script>
export default {
  data() {
    return {
      // These two variables will store the user's input before they submit it:
      cabinNumber: 0,
      text: '',
      
      // This will store an array of objects containing the info for all our different messages
      messages: []
    }
  },
  methods: {
    sendMessage() {
      // Setting up the object we want to push into the array:
      var message = {
        cabinNumber: this.cabinNumber,
        text: this.text
      }
      // Adding that object to the end of our array:
      this.messages.push(message);
      // Now, we reset the user's input, so they can create a new message:
      this.cabinNumber = 0;
      this.text = '';
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