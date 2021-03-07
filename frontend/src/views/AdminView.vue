<template>
  <div class="home">
    <ReviewPanel  :requests="requests" />
  </div>
</template>

<script>
import ReviewPanel from '@/components/ReviewPanel.vue'

import {db} from '../db';

export default {
  name: 'AdminView',
  data(){
    return({
      requests: [],
    });
  },
  components: {
    ReviewPanel
  },
  firebase: {
    requests: db.ref('requests'),
  },
}
</script>
