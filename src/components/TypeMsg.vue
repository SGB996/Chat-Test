<template>
  <div class="type_msg">
    <form id="sendMessage" @submit="send">
      <div class="input_msg_write">
        <input type="text" class="write_msg" placeholder="Type a message"
        v-model="message" :disabled="!isChatActive || isChatSpam"/>
        <button class="msg_send_btn" type="button" @click="send">
          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',

    }
  },
  methods: {
    send(form) {
      form.preventDefault()
      if(!this.message){
        return
      }
      this.$store.dispatch('sendMessage', this.message)
      this.message = ''
    }
  },
  computed: {
    isChatActive() {
      const currentChat = this.$store.state.currentChat
      const chats = this.$store.state.chats
      const {active} = chats.find(chat=>chat.id == currentChat)
      return active
    },
    isChatSpam() {
      const currentChat = this.$store.state.currentChat
      const chats = this.$store.state.chats
      const {isSpam} = chats.find(chat=>chat.id == currentChat)
      return isSpam
    }
  }
};
</script>

<style>
</style>