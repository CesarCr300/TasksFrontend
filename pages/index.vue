<template>
    <div>TODO</div>
    <TaskList title="Pendiente" :tasks="tasks" status="pending" @delete="handleDelete" />
    <TaskList title="En progreso" :tasks="tasks" status="in-progress" @delete="handleDelete"/>
    <TaskList title="Completado" :tasks="tasks" status="completed" @delete="handleDelete"/>
</template>

<script setup lang="ts">
import {useTaskStore} from "~/stores/task.store"
const store = useTaskStore();

const tasks = computed(()=>store.tasks)

const handleDelete = async (id: number)=>{
    console.log("AQUI")
    await store.removeTask(id);
}

onMounted(()=>{
    store.fetchTasks();
})
</script>