<template>
  <nav class="navbar navbar-expand-lg position-static">
    <div class="container-fluid" id="navbarDiv">
      <div class="d-flex align-self-center" id="buttons">
        <ul class="buttonsGroup">
          <button class="btn btn-warning btn-sm text-white" @click="deactivateChat"
          v-if="isChatActive">
            <div class="end">Finalizar<br />Conversación</div>
            <div class="endResp">End</div>
          </button>
          <button class="btn btn-success btn-sm text-white" @click="activateChat"
          v-else>
            <div class="end">Iniciar<br />Conversación</div>
            <div class="endResp">Start</div>
          </button>
          <button class="btn btn-danger btn-sm" @click="markSpam">
            <div class="spam">Marcar como<br />Spam</div>
            <div class="spamResp">Spam</div>
          </button>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="displayInfo"
            >
              {{ patientInfo }}
            </a>
            <Info
              :patientName="patient.name"
              :birthDate="patient.birthDate"
              :Age="patient.Age"
              :history="patient.history"
              :display="display"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Info from "../components/Info";
export default {
  components: {
    Info,
  },
  data() {
    return {
      patientInfo: "Información del Paciente",
      display: false,
    };
  },
  methods: {
    displayInfo() {
      this.display = !this.display;
    },
    deactivateChat(){
      this.$store.dispatch('deactivateChat')
    },
    activateChat(){
      this.$store.dispatch('activateChat')
    },
    markSpam(){
      this.$store.dispatch('markSpam')
    },
  },
  computed: {
    patient() {
      const chats = this.$store.state.chats
      const current = chats.find(chat=>chat.id == this.$store.state.currentChat)
      return current.patient 
    },
    isChatActive() {
      const currentChat = this.$store.state.currentChat
      const chats = this.$store.state.chats
      const {active} = chats.find(chat=>chat.id == currentChat)
      return active
    }
  },
};
</script>

<style>

</style>