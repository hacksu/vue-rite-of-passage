# 🖖 THE VUE RITE OF PASSAGE  🖖

This project has 3 challenges to help you learn VueJS! These challenges are meant to emulate the type of issues you might see when helping with Hacksu's various Vue projects. 

To complete this challenge, you'll have to either clone this repo directly, or fork the repo and clone it. Then, go inside the repo and do the following to get it up and running:

## Project setup
```
npm install
# You may need to install NodeJS to do this step.
# You can download NodeJS here: https://nodejs.org/en/download/
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# 📖 RESOURCE 📖

VueJS has awesome docs that you can read [here](https://vuejs.org/v2/guide/)!

You should also feel free to ask questions on Slack. Feel free to direct message Ben Holland anything, or post about it on #codingquestions !


# ⚔️ CHALLENGES ⚔️

## Challenge 1: V-Modelling Data 🐴

The first challenge is to fix the "Horse Name" widget on the first page. 

The goal is to use the [v-model](https://vuejs.org/v2/guide/#Handling-User-Input) directive to take the user's name as they type it, and display a modified version of that name below it. 

The only file you'll have to edit to finish this challenge will be `Home.vue`, which you can find at `/src/components/Home.vue`.  Here's the portion of html that you'll need to change: 

```
<div class="widget" >
    <h3>Our Sister Company, Horse Hotel</h3>
    <p><i>Warning: The horse name calculator is currently broken :/</i></p>
    <p>If you didn't like your bear name, type below to find out your horse name. Maybe you'll like that more:</p>
    <input>
    <p>Your regular name: </p>
    <p>Your horse name:</p>
    
  </div>
```

Above that portion of code, you'll also find a widget that basically does the exact thing you'll need to do. Feel free to reference it. 

You'll also need to change some things in the script, which you can find between the `<script>` tags. 

## Challenge 2: Setting up a Chat Page 💬

Next, fix the chat page, which you can find at `/src/components/GrizzlyChat.vue`. You'll have two things to do in this file:

First, use v-models to collect the user's name and chat text, and use the (@click)[https://vuejs.org/v2/guide/events.html#Listening-to-Events] (also known as `v-on:click`) to make the button call a method that will add the new chat message to our array of chat messages.

Then, put a [v-for](https://vuejs.org/v2/guide/#Conditionals-and-Loops) on the <div> with the class of `chat-widget` so that it will create a separate widget for each of your messages, and display the data correctly. 

There's also a working example of what this should look like on the contact page of the website. 








