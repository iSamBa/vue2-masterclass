<template>
<div class="container">
      <div class="col-full push-top">
          <div class="forum-header">
              <div class="forum-details">
                  <h1>{{forum.title}}</h1>
                  <p class="text-lead">{{forum.description}}</p>
              </div>
              <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
          </div>
      </div>

    <div class="col-full push-top">
        <thread-list :threads="threads" />
    </div>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'
import sourceData from '@/data.json'

export default {
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum () {
      return sourceData.forums.find(forum => forum.id === this.id)
    },
    threads () {
      return sourceData.threads.filter(thread => thread.forumId === this.id)
    }

  }

}
</script>

<style>

</style>
