// src/composables/useTarefas.ts

import { ref, computed, watch } from 'vue'
 
interface Tarefa {

  id: number

  texto: string

  feita: boolean

}
 
export function useTarefas() {

  const tarefas = ref<Tarefa[]>([])

  const busca = ref('')
 
  const filtroAtivo = ref<'todas' | 'pendentes' | 'feitas'>('todas')
 
  // computed: filtra por texto de busca E pelo filtro ativo

  const filtradas = computed(() => {

    const termo = busca.value.toLowerCase()

    return tarefas.value

      .filter(t => t.texto.toLowerCase().includes(termo))

      .filter(t => {

        if (filtroAtivo.value === 'pendentes') return !t.feita

        if (filtroAtivo.value === 'feitas') return t.feita

        return true

      })

  })
 
  // computed: total de pendentes

  const totalPendentes = computed(

    () => tarefas.value.filter(t => !t.feita).length

  )
 
  function adicionar(texto: string) {

    if (!texto.trim()) return

    tarefas.value.push({ id: Date.now(), texto, feita: false })

  }
 
  function remover(id: number) {

    tarefas.value = tarefas.value.filter(t => t.id !== id)

  }
 
  function concluir(id: number) {

    const t = tarefas.value.find(t => t.id === id)

    if (t) t.feita = !t.feita

  }
 
  return {

    tarefas,

    busca,

    filtroAtivo,

    filtradas,

    totalPendentes,

    adicionar,

    remover,

    concluir

  }

}
 