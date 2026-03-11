<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Lista de Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>
 
    <ion-content :fullscreen="true">

      <div id="container">
        <strong>Bem-vindo ao App de Tarefas</strong>

        <p>Organize suas atividades do dia de forma simples.</p>

        <ion-button @click="router.push('/tarefas')">
          Ir para tarefas
        </ion-button>

      </div>

    </ion-content>
  </ion-page>
</template>
 
<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue'
import router from '@/router'
</script>
 
<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 22px;
}

#container p {
  font-size: 16px;
  color: #8c8c8c;
  margin: 10px 0 20px 0;
}
</style>