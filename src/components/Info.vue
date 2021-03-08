<template>
  <div class="patientInfo position-absolute top-0 start-0" :class="[display ? 'd-block' : 'd-none']">
    <h2>{{ pInfo }}</h2>
    <ul>
      <li>{{names}}: {{ patientName }}</li>
      <li>{{date}}: {{ birthDate }}</li>
      <li>{{edad}}: {{ Age }}</li>
    </ul>
    <br />
    <h2>{{lastConv}}</h2>
    <ol>
      <li v-for="(h, i) in history" :key="i">{{ h }}</li>
    </ol>    
  </div>
</template>

<script>
export default {
  props: ["patientName", "birthDate", "Age", "history", "display"],
  data() {
    return {
      pInfo: "Informacion del Paciente",
      lastConv: "Historial de Conversaciones",
      names: 'Nombres del Paciente',
      date: 'Fecha de Nacimiento',
      edad: 'Edad'  
    };
  },
};
</script>

<style>
.patientInfo{
background: #f9f9f9;
width: 150%
}

</style>