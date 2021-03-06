<template>
  <div class="home">
    <InputPanel />
  </div>
</template>

<script>
// @ is an alias to /src
import InputPanel from '@/components/InputPanel.vue'

export default {
  name: 'RequestView',
  components: {
    InputPanel
  }
}
</script>
