<template>
  <h1>Welcome to the Forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import sourceData from '@/data.json'

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      categories: sourceData.categories
    }
  }
}
</script>

<style>

</style>
