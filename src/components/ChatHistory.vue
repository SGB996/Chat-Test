<template>
  <div class="msg_history">
    <div v-for="(msg, i) in messages" :key="i" :class="[msg.incoming ? 'incoming_msg' : 'outgoing_msg']">
      <div v-if="msg.incoming" class="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div :class="[msg.incoming ? 'received_msg' : 'outgoing_msg']">
        <div :class="[msg.incoming ? 'received_withd_msg' : 'sent_msg']">
          <span><b>{{msg.name}}</b></span>
          <p>{{msg.msg}}</p>
          <span class="time_date"> {{msg.date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
      messages() {
        const chats = this.$store.state.chats
        const chatActual = chats.find(chat=>chat.id == this.$store.state.currentChat)
        return chatActual.messages
      }
    },
};
</script>

<style scoped>

.msg_history::-webkit-scrollbar {
  width: 0.5em;
} 
.msg_history::-webkit-scrollbar-thumb {
  background-color: rgba(218, 217, 217, 1);
  outline: 1px solid rgba(139, 156, 173, 0.5);
}
</style>