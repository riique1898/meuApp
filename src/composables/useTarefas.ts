import { ref, computed, watch, onMounted } from 'vue'
 
interface Tarefa {
  id: number
  texto: string
  feita: boolean
}
 
export function useTarefas() {
  const tarefas = ref<Tarefa[]>([])
  const busca = ref('')
  const filtroAtivo = ref<'todas' | 'pendentes' | 'feitas'>('todas')
 
 
  onMounted(() => {
    const dados = localStorage.getItem('tarefas')
 
    if (dados) {
      tarefas.value = JSON.parse(dados)
    }
  })
 
  watch(tarefas, (novaLista) => {
    localStorage.setItem('tarefas', JSON.stringify(novaLista))
  }, { deep: true })
 
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
 
  const totalPendentes = computed(() =>
    tarefas.value.filter(t => !t.feita).length
  )
 
  function adicionar(texto: string) {
    if (!texto.trim()) return
 
    tarefas.value.push({
      id: Date.now(),
      texto,
      feita: false
    })
  }
 
  function remover(id: number) {
    tarefas.value = tarefas.value.filter(t => t.id !== id)
  }
 
  function concluir(id: number) {
    const t = tarefas.value.find(t => t.id === id)
    if (t) t.feita = !t.feita
  }
 
  watch(totalPendentes, (valor) => {
    if (valor === 0 && tarefas.value.length > 0) {
      alert('Parabéns! Todas as tarefas foram concluídas!')
    }
  })
 
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