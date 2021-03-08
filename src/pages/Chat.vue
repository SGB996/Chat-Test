<template>
  <div class="container-fluid" id="messageBox">
    <div class="messaging">
      <div class="inbox_msg">
        <InboxPeople />
        <div class="mesgs">
          <NavBar />
          <ChatHistory />
          <TypeMsg />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InboxPeople from "../components/InboxPeople";
import ChatHistory from "../components/ChatHistory";
import TypeMsg from "../components/TypeMsg";
import NavBar from "../components/NavBar";
export default {
  components: {
    InboxPeople,
    ChatHistory,
    TypeMsg,
    NavBar,
  },
};
</script>

<style>
</style>