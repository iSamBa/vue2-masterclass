<template>
  <h1>Welcome to the Forum</h1>
  <thread-list :threads="threads" />
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'
import sourceData from '@/data.json'
export default {
  components: {
    ThreadList
  },
  data () {
    return {
      threads: sourceData.threads
    }
  }
}
</script>

<style>

</style>
