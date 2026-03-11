<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tarefas</ion-title>
        <ion-button @click="router.push('/home')">
          Ir para tarefas
        </ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-input
        v-model="novaTarefa"
        placeholder="Digite uma tarefa"
      ></ion-input>

      <!-- BOTÃO -->
      <ion-button expand="block" @click="adicionarTarefa">
        Adicionar
      </ion-button>

      <!-- LISTA -->
      <ion-list>

        <ion-item v-for="(tarefa, index) in tarefas" :key="index">
          <ion-label>
            {{ tarefa }}
          </ion-label>

          <ion-button color="danger" @click="removerTarefa(index)">
            Remover
          </ion-button>
        </ion-item>

      </ion-list>

      <p v-if="tarefas.length === 0">
        Nenhuma tarefa cadastrada. Adicione a primeira!
      </p>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {
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
import router from '@/router'

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