<template>
  <section class="container">
        <div class="title">
            <h1>Review Applications</h1>
        </div>
        <RequestItem />
        <RequestItem />
        <RequestItem />
  </section>
</template>

<script>

import RequestItem from './RequestItem.vue'

export default {
  name: 'ReviewPanel',
  components: {
    RequestItem
  },
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
    .container{
        width: 27vw;
        height: auto;
        background: #111;
        border-radius: 10px;
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2rem 2rem 0;
    }

    .title{
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        margin-bottom: 2rem;
    }
</style>
