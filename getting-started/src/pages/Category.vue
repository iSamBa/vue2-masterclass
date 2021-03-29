<template>
  <h1>{{ category.name }}</h1>
  <forum-list
    :title="category.name"
    :forums="getForumsFromCategory(category)"
    :categoryId="id"
  />
</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'

export default {
  components: {
    ForumList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  methods: {
    getForumsFromCategory (category) {
      return sourceData.forums.filter(
        (forum) => forum.categoryId === category.id
      )
    }
  },
  computed: {
    category () {
      return sourceData.categories.find((category) => category.id === this.id)
    }
  }
}
</script>

<style></style>
