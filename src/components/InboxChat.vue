<template>
  <div class="chat_list pointer" @click="select" :class="[currentChat == id ? 'active_chat' : '']">
    <div class="chat_people">
      <div class="chat_img">
        <img
          :src="imgSrc"
          alt="sunil"
        />
      </div>
      <div class="chat_ib">
        <div class="chatPreview">
          <div class="patientName">{{patientName}}</div>
          <div class="chat_date">{{date}}</div>
        </div>
        <div class="msgPreview">
          {{preview}}.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['patientName', 'imgSrc', 'date', 'preview', 'select', 'id'],
    computed: {
      currentChat() {
        return this.$store.state.currentChat 
      }
    },
};
</script>

<style>
.pointer {cursor: pointer;}
</style>