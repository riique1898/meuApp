<template>
  <ion-page>
    <ion-header>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-toolbar>
        <ion-title>Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>
 
    <ion-content class="ion-padding">
      <!-- 🔹 ADICIONAR -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Nova tarefa</ion-card-title>
        </ion-card-header>
 
        <ion-card-content>
          <ion-item>
            <ion-input
              v-model="novaTarefa"
              placeholder="Digite uma tarefa..."
            />
            <ion-button @click="adicionarNova">
              <ion-icon :icon="add"></ion-icon>
            </ion-button>
          </ion-item>
        </ion-card-content>
      </ion-card>
 
      <!-- 🔹 BUSCA -->
      <ion-item>
        <ion-input v-model="busca" placeholder="Buscar tarefas..." />
      </ion-item>
 
      <!-- 🔹 FILTRO (igual PDF) -->
      <ion-segment v-model="filtroAtivo">
        <ion-segment-button value="todas">
          <ion-label>Todas</ion-label>
        </ion-segment-button>
 
        <ion-segment-button value="pendentes">
          <ion-label>Pendentes</ion-label>
        </ion-segment-button>
 
        <ion-segment-button value="feitas">
          <ion-label>Feitas</ion-label>
        </ion-segment-button>
      </ion-segment>
 
      <!-- 🔹 LISTA COM COMPONENTE -->
      <CardTarefa
        v-for="tarefa in filtradas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @remover="remover"
        @concluir="concluir"
      />
 
      <!-- 🔹 STATUS -->
      <ion-card v-if="filtradas.length === 0">
        <ion-card-content class="ion-text-center">
          Nenhuma tarefa encontrada.
        </ion-card-content>
      </ion-card>
 
      <!-- 🔹 CONTADOR -->
      <ion-text class="contador"> Pendentes: {{ totalPendentes }} </ion-text>
    </ion-content>
  </ion-page>
</template>
 
<script setup lang="ts">
import { ref } from "vue";
import { add } from "ionicons/icons";
 
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonText,
  IonIcon,
} from "@ionic/vue";
 
import CardTarefa from "../components/CardTarefa.vue";
import { useTarefas } from "../composables/useTarefas";
 
const {
  busca,
  filtroAtivo,
  filtradas,
  totalPendentes,
  adicionar,
  remover,
  concluir,
} = useTarefas();
 
const novaTarefa = ref("");
 
function adicionarNova() {
  adicionar(novaTarefa.value);
  novaTarefa.value = "";
}
</script>
 
<style scoped>
/* espaçamento geral */
ion-card {
  margin-bottom: 16px;
}
 
/* input + botão alinhado bonito */
ion-item {
  --inner-padding-end: 6px;
}
 
/* segment mais respirável */
ion-segment {
  margin: 16px 0;
}
 
/* contador */
.contador {
  display: block;
  margin-top: 16px;
  font-size: 14px;
  opacity: 0.7;
}
 
/* botão mais clean */
ion-button {
  height: 36px;
}
 
/* centralização fallback */
.ion-text-center {
  text-align: center;
}
</style>