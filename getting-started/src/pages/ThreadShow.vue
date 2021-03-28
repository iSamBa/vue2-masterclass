<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"/>
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPostText" class="form-input" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import sourceData from '@/data.json'
export default {
  name: 'ThreadShow',
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: ''
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id) // also available under this.$route.params.id
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost () {
      const postId = 'hnSy' + Math.random()
      const post = {
        postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }
      this.posts.push(post)
      this.threads.posts.push(post)
      this.newPostText = ''
    }
  }
}
</script>
