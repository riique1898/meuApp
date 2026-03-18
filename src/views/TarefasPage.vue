<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tarefas</ion-title>
        <ion-button @click="router.push('/Home')"> ir para Home </ion-button>
      </ion-toolbar>
    </ion-header>
 
    <ion-content class="ion-padding">
 
      <ion-input
        v-model="novaTarefa"
        placeholder="Digite uma tarefa"
      ></ion-input>
 
      <!-- BOTÃO -->
      <ion-button expand="block" color="primary" @click="adicionarTarefa">
          <ion-icon :icon="addOutline" slot="start"></ion-icon>
        Adicionar Tarefa
      </ion-button>
 
      <!-- LISTA -->
      <ion-list>
 
        <ion-item v-for="(tarefa, index) in tarefas" :key="index">
          <ion-label>
            {{ tarefa }}
          </ion-label>
 
          <ion-button fill="clear" color="danger" slot="end" @click="removerTarefa(index)">
           <ion-icon :icon="trash"></ion-icon>
          </ion-button>
        </ion-item>
 
      </ion-list>
 
      <p v-if="tarefas.length === 0">
        Nenhuma tarefa cadastrada.
      </p>
 
    </ion-content>
  </ion-page>
</template>
 
<script setup lang="ts">
import { ref } from 'vue'
import { trash } from 'ionicons/icons'
import { addOutline } from 'ionicons/icons'
 
import {
  IonIcon,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/vue'
import router from '@/router';
 
const novaTarefa = ref('')
const tarefas = ref<string[]>([])
 
function adicionarTarefa() {
 
  if (novaTarefa.value.trim() === '') return
 
  tarefas.value.push(novaTarefa.value)
 
  novaTarefa.value = ''
}
 
function removerTarefa(index: number) {
  tarefas.value.splice(index, 1)
}
</script>