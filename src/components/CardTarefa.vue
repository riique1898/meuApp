<template>
  <ion-card>
    <ion-card-content>
      <ion-item lines="none">
 
        <ion-icon
          slot="start"
          :icon="tarefa.feita ? checkmarkCircle : ellipseOutline"
          :color="tarefa.feita ? 'success' : 'medium'"
          @click="$emit('concluir', tarefa.id)"
        />
 
        <ion-label :class="{ feita: tarefa.feita }">
          {{ tarefa.texto }}
        </ion-label>
 
        <ion-button
          slot="end"
          fill="clear"
          color="danger"
          @click="$emit('remover', tarefa.id)"
        >
          <ion-icon :icon="trashOutline" />
        </ion-button>
 
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>
 
<script setup lang="ts">
import { checkmarkCircle, ellipseOutline, trashOutline } from 'ionicons/icons'
 
interface Tarefa {
  id: number
  texto: string
  feita: boolean
}
 
defineProps<{ tarefa: Tarefa }>()
defineEmits(['remover', 'concluir'])
</script>
 
<style scoped>
.feita {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>