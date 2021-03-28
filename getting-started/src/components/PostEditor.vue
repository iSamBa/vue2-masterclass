<template>
   <div class="col-full">
      <form @submit.prevent="save">
        <div class="form-group">
          <textarea v-model="text" class="form-input" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit Post</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = 'hnSy' + Math.random()
      const post = {
        postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }
      this.$emit('save', { post })
      this.text = ''
    }
  }
}
</script>

<style>

</style>
