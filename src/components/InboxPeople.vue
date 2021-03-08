<template>
  <div class="inbox_people">
    <div class="headind_srch">
      <div class="recent_heading">Pacientes</div>
    </div>
    <SearchBar />
    <div class="inbox_chat">
    <InboxChat v-for="(chat, i) in chats" :key="i"
    :patientName="chat.name" :date="chat.date" :preview="chat.preview" 
    :imgSrc="chat.imgSrc" :select="()=>selectChat(chat.id)" :id="chat.id"/>
      
    </div>
  </div>
</template>

<script>
import InboxChat from "../components/InboxChat"
import SearchBar from "../components/SearchBar"
export default {
  components: {
    InboxChat,
    SearchBar
  },
  data() {
    return {
      
    }
  },
  computed: {
    chats() {
      const allChats = this.$store.state.chats
      const searchChat = this.$store.state.searchResults
      if(searchChat && searchChat.name){
        return [searchChat]
      }
      return allChats
    }
  },
  methods: {
    selectChat(id) {
      this.$store.dispatch('selectChat', id)
    }
  }
};
</script>

<style>
</style>
