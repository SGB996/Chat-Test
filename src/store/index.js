import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResults: {},
    chats: [
      {
        id: "1",
        active: true,
        isSpam: false,
        name: "Pepe Papo",
        date: "March 01",
        preview: "Doctor tengo un dolor de cabeza muy fuerte",
        imgSrc: "https://ptetutorials.com/images/user-profile.png",
        patient: {
          name: "Pepe Papo",
          birthDate: "01/01/1990",
          Age: 24,
          history: ["01/02/2021", "01/03/2021"],
        },
        messages: [
          {
            name: "Pepe Papo",
            msg: "Doctor tengo un dolor de cabeza muy fuerte.",
            date: "11:01 AM | 01/03/2021",
            incoming: true,
          },
          {
            name: "Doctor XXX",
            msg: "Desde cuando le duele.",
            date: "11:01 AM | 01/03/2021",
            incoming: false,
          },
          {
            name: "Pepe Papo",
            msg: "Empezo ayer en la madrugada.",
            date: "11:01 AM | 01/03/2021",
            incoming: true,
          },
        ],
      },
      {
        id: "2",
        active: true,
        isSpam: false,
        name: "Juan Papo",
        date: "Feb 16",
        preview: "Hola Doctor me cai y me duele la rodilla",
        imgSrc: "https://ptetutorials.com/images/user-profile.png",
        patient: {
          name: "Juan Papo",
          birthDate: "25/09/1995",
          Age: 25,
          history: ["16/02/2021"],
        },
        messages: [
          {
            name: "Juan Papo",
            msg: "Hola Doctor me cai y me duele la rodilla",
            date: "11:01 AM | 16/02/2021",
            incoming: true,
          },
          {
            name: "Doctor XXX",
            msg: "Como se cayo, y cuando",
            date: "11:01 AM | 16/02/2021",
            incoming: false,
          },
          {
            name: "Juan Papo",
            msg: "Paso el viernes ...",
            date: "11:01 AM | 16/02/2021",
            incoming: true,
          },
        ],
      },
    ],
    currentChat: 1,
  },
  mutations: {
    SELECT_CHAT(state, payload) {
      state.searchResults = {};
      state.currentChat = payload;
    },
    SEARCH_CHAT(state, payload){
      state.searchResults = payload;
    },
    SEND_MESSAGE({chats, currentChat}, msg){
      const chat = chats.find(item => item.id == currentChat);
      chat.messages.push({
          name: 'Doctor XXX',
          msg: msg,
          date: new Date(),
          incoming: false
    })
    },
    DEACTIVATE_CHAT({chats, currentChat}){
      const chat = chats.find(item => item.id == currentChat);
      chat.active = false
    },
    ACTIVATE_CHAT({chats, currentChat}){
      const chat = chats.find(item => item.id == currentChat);
      chat.active = true
    },
    MARK_SPAM({chats, currentChat}){
      const chat = chats.find(item => item.id == currentChat);
      chat.isSpam = true
    },
  },
  actions: {
    sendMessage({commit}, payload){
      commit('SEND_MESSAGE', payload);
    },
    deactivateChat({commit}){
      commit('DEACTIVATE_CHAT')
    },
    activateChat({commit}){
      commit('ACTIVATE_CHAT')
    },
    markSpam({commit}){
      commit('MARK_SPAM')
    },
    selectChat({ commit }, payload) {
      commit("SELECT_CHAT", payload);
    },
    searchChat(context, payload){
      const chats = context.state.chats
      const result = chats.find(chat => chat.name == payload)
      if(result){
        context.commit("SEARCH_CHAT", result)
      }
      else{
        context.commit("SEARCH_CHAT", {})
      }  
    }
  },  
  modules: {},
});
