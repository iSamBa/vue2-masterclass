<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="categoryId" :to="{name : 'Category', params : {id : categoryId}}"
        >{{title}}</router-link>
        <span v-else>Forums</span>
      </h2>
      <div v-for="forum in forums" :key="forum.id" class="forum-listing">
        <div class="forum-details">
          <router-link :to="{name : 'Forum', params : {id : forum.id}}" class="text-xlarge">{{ forum.name }}</router-link>
          <p>{{ forum.description }}</p>
        </div>
        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{forumThreadsWord(forum)}}
          </p>
        </div>
        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      required: true,
      type: Array
    },
    title: {
      type: String,
      default: 'Forums'
    },
    categoryId: {
      type: String,
      required: false
    }
  },
  methods: {
    forumThreadsWord (forum) {
      return forum.threads?.length ? forum.threads?.lenght > 1 ? 'threads' : 'thread' : 'no thread'
    }
  }
}
</script>

<style></style>
