<template>
<div>
  <h1>Grizzly Chat</h1>
  <h2>Chat with other bears in the community:</h2>
  
  <div class="widget chat-widget">
    <div class="chat-details">
      <h3>Name: <b>{{ chatLog[0].name }}</b></h3>
      <span class="time">{{ getPrettyTime(chatLog[0].time) }}</span>
    </div>
    <p>{{ chatLog[0].text }}</p>
  </div>
  
  <div class="widget send-widget">
    <h3>Send a message: </h3>
    <p>
      Your name: 
      <input>
    </p>
    <p>
      Your message:
      <textarea></textarea>
    </p>
    <button>Send!!</button>
  </div>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      chatLog: [
        {
          name: 'Pooh',
          time: new Date(),
          text: 'yo real talk i\'d do anything for some dang honey right now no lie.'
        },
        {
          name: 'Pooh',
          time: new Date(),
          text: 'i\'m talkin ANYTHING.'
        }
      ]
    }
  },
  methods: {
    getPrettyTime(date) {
      let hours = date.getHours();
      let ampm = "am";
      let minutes = date.getMinutes();
      if (hours > 12) {
        hours -= 12;
        ampm = "pm";
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      
      return hours + ":" + minutes + "pm";
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