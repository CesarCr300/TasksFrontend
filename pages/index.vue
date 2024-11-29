<template>
    <div>TODO</div>
    <TaskList title="Pendiente" :tasks="tasks" status="pending"/>
    <TaskList title="En progreso" :tasks="tasks" status="in-progress"/>
    <TaskList title="Completado" :tasks="tasks" status="completed"/>
</template>

<script setup lang="ts">
import {useTaskStore} from "~/stores/task.store"
const store = useTaskStore();

const tasks = computed(()=>store.tasks)

onMounted(()=>{
    store.fetchTasks();
})
</script>