<template>
  <section class="container">
    <div class="logo">
        <img src="../assets/gtxlogo.png" alt="">
    </div>
    <div class="input">
      <p>What is your username?</p>
      <input placeholder="Minecraft U/N" v-model="name" type="text">
      
    </div>
    <div class="submit-container">
      <button class="button" v-on:click="submitRequest()">Request Access</button>
  </div>
  </section>
</template>

<script>
import {db} from '../db';

export default {
  name: 'InputPanel',
  props: {  },
  data(){
    return{
      name: '',
    }
  },
  methods: {
    submitRequest(){
      console.log("Called submit");
      //Build object
      const newRequest = {
        name: this.name,
        accepted: false,
        created: new Date(),
        updated: new Date(),
      }

      db.ref('requests').push(newRequest);

      console.log("finished submit");


    }
  }

}
</script>

<style scoped>
  .container{
    width: 27vw;
    height: 33vh;
    background: #111;
    border-radius: 10px;
    display: inline-flex;
    flex-direction: column;
    padding: 5rem;
  }

  .logo{
    justify-self: flex-start;
    align-self: center;
  }

  .input{
    width: 100%;
    height: 12vh;
    justify-self: center;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input p{
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
  }

  .input input{
    width: 100%;
    height: 5rem;
    max-height: 70px;
    margin-top: 2rem;
    border-radius: 5px;
    border: 0;
    text-align: center;
    font-size: 1.25rem;
  }

  .button{
    height: 7vh;
    max-height: 65px;
    width: 100%;
    background: #E0BC63;
    border: 0;
    border-radius: 10px;
    font-weight: 200;
    font-size: 1.25rem;
    color: white;
    align-self: center;
    margin-top: 5rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

</style>
