<script setup lang="ts">
import { ref, watch } from 'vue'
import { addOutline } from 'ionicons/icons'
import router from '@/router'
 
import {
  IonIcon,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton
} from '@ionic/vue'
 
import { useTarefas } from '../composables/useTarefas'
import CardTarefa from '../components/CardTarefa.vue'
 
const { tarefas, adicionar, remover, concluir, totalPendentes } = useTarefas()
 
const novaTarefa = ref('')
 
function adicionarTarefa() {
  adicionar(novaTarefa.value)
  novaTarefa.value = ''
}
 
watch(totalPendentes, (valor) => {
  if (valor === 0 && tarefas.value.length > 0) {
    alert('🎉 Parabéns! Todas as tarefas foram concluídas!')
  }
})
</script>
 
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tarefas</ion-title>
        <ion-button @click="router.push('/Home')">
          ir para Home
        </ion-button>
      </ion-toolbar>
    </ion-header>
 
    <ion-content class="ion-padding">
 
      <ion-input
        label="Nome da Tarefa"
        label-placement="floating"
        v-model="novaTarefa"
        :clear-input="true"
        placeholder="Digite uma tarefa"
      />
 
      <ion-button expand="block" color="primary" @click="adicionarTarefa">
        <ion-icon :icon="addOutline" slot="start" />
        Adicionar Tarefa
      </ion-button>
 
      <CardTarefa
        v-for="tarefa in tarefas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @remover="remover"
        @concluir="concluir"
      />
 
      <p v-if="tarefas.length === 0">
        Nenhuma tarefa cadastrada.
      </p>
 
    </ion-content>
  </ion-page>
</template>