<template>
  <div class="card-container">
    <h1 v-if="data.length < 1">No post available</h1>
    <div class="message-container">
      <ul v-for="(item, index) in data" :key="index">
        <li>User name : {{ item.userName }}</li>
        <li>Message : {{ item.message }}</li>
        <li>Date : {{ item.date }}</li>
        <li>----------------</li>
      </ul>
    </div>

    <form class="w-full max-w-sm" @submit.prevent="addMessage">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-2/3">
          <input
            id="inline-password"
            v-model="form.message"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Message"
          />
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </div>

      <p v-if="error" class="text-red-600">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ isDev, $axios, route, store, env, params, query, req, res, redirect, error }) {
    const data = await $axios.get('/api/message')
    return { data: data.data }
  },
  data() {
    return {
      form: {
        message: null,
      },
      error: null,
    }
  },
  methods: {
    addMessage() {
      this.error = null

      // check if all fields are filled
      if (!this.form.message) return (this.error = 'Please fill all fields')

      // Send post request with axios
      this.$axios
        .post('/api/message', {
          userId: this.$auth.user._id,
          userName: this.$auth.user.email,
          message: this.form.message,
        })
        .then((response) => {
          this.success = 'Message added successfully'
        })
        .catch(() => {
          this.error = 'A problem occured, please try check your information and try again later'
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  min-height: calc(100vh - 64px);
  background-color: rgba(243, 244, 246, 1);
  padding: 64px;
  display: flex;
  flex-direction: column;
  .message-container {
    height: 400px;
    width: 30%;
    margin: auto;
    background: white;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
  form {
    margin: auto;
    div {
      width: 100%;
      display: flex;
    }
  }
}
</style>
