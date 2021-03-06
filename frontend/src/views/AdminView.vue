<template>
  <div class="home">
    <ReviewPanel />
  </div>
</template>

<script>
// @ is an alias to /src
import ReviewPanel from '@/components/ReviewPanel.vue'

export default {
  name: 'AdminView',
  components: {
    ReviewPanel
  }
}
</script>
