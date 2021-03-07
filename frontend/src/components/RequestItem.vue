<template>
  <section class="requestItemContainer">
    <h1 class="name">
        {{request.name}}
    </h1>
    <div class="buttonContainer">
        <button class="accept" v-on:click="acceptRequest()"><img src="../assets/accept.svg" alt=""></button>
        <button class="decline" v-on:click="declineRequest()"><img src="../assets/decline.svg" alt=""></button>
    </div>

  </section>
</template>

<script>
import { db } from '../db';

export default {
  name: 'RequestItem',
  methods:{
      acceptRequest(){
        // Set accepted to true
        const requestObject = this.request;
        
        requestObject.accepted = true;
     
        // Put to firebase
        db.ref('requests/' + this.request['.key'])
        .set(requestObject)
        .then(() => {
            console.log('user updated!')
        })
        
      },

      declineRequest(){
        // Set accepted to false
        const requestObject = this.request;
        requestObject.declined = true;
     
        // Put to firebase
        db.ref('requests/' + this.request['.key'])
        .set(requestObject)
        .then(() => {
            console.log('user updated!')
        })
        console.log('Removed Request')
      },
  },
  props: {
      request: String,
  }
}

</script>


<style scoped>
    .requestItemContainer{
        min-width: 300px;
        height: 2%;
        background: #222;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 1rem;
        margin-bottom: 1rem;
    } 

    .name{
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
    }

    .buttonContainer{
        align-self: center;
        justify-self: flex-end;
        margin-left: auto;
        width: 30%;
    }

    button{
        border-radius: 30px;
        border: 0;
        width: 3vw;
        height: 3vw;
        margin: .25rem;
        background: none;
    }

    .decline img{
        width: 100%;
        height: 100%;
    }

    .accept img{
        width: 100%;
        height: 100%;
    }

</style>
