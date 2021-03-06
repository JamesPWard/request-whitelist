<template>
  <section class="requestItemContainer">
    <h1 class="name">
        Zinc187
    </h1>
    <div class="buttonContainer">
        <button class="accept"><img src="../assets/accept.svg" alt=""></button>
        <button class="decline"><img src="../assets/decline.svg" alt=""></button>
    </div>

  </section>
</template>

<script>
export default {
  name: 'RequestItem',
  props: {
    reviews: String
  }
}

// request = [{
//     id: 1,
//     username: 'Zinc187',
//     accepted: true,
//     created: ''

// }];

</script>


<style scoped>
    .requestItemContainer{
        width: 100%;
        height: 10%;
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
        width: 30%;
        height: 100%;
        align-self: center;
        justify-self: flex-end;
        margin-left: auto;
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
