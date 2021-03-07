<template>
  <section class="container">
        <div class="title">
            <h3>Review Applications</h3>
        </div>
        <div class="applications" v-bind:key="index" v-for="(item, index) in this.requests">
          <RequestItem :request="item" />
        </div>
  </section>
</template>

<script>

import RequestItem from './RequestItem.vue';
export default {
  name: 'ReviewPanel',
  components: {
    RequestItem
  },
  props: {
    requests: Array,
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
        padding: 2rem;
    }

    .title{
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        margin-bottom: 2rem;
        margin-top: 0;
    }
</style>
