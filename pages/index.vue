<template>
    <div>TODO</div>
    <TaskForm @submit="handleSubmit" :task-to-update="store.taskToUpdate" />
    <TaskList title="Pendiente" :tasks="tasks" status="pending" @delete="store.removeTask"
        @selectToUpdate="handleSelectToUpdate" />
    <TaskList title="En progreso" :tasks="tasks" status="in-progress" @delete="store.removeTask"
        @selectToUpdate="handleSelectToUpdate" />
    <TaskList title="Completado" :tasks="tasks" status="completed" @delete="store.removeTask"
        @selectToUpdate="handleSelectToUpdate" />
</template>

<script setup lang="ts">
import {useTaskStore} from "~/stores/task.store"
const store = useTaskStore();
const tasks = computed(()=>store.tasks)

const handleSelectToUpdate = (id:number)=>{
    store.setTaskToUpdate(id);
}

const handleSubmit = (task:any)=>{
    if (store.taskToUpdate){
        store.editTask(store.taskToUpdate.id, task);
    }else{
        store.addTask(task);
    }

}

onMounted(()=>{
    store.fetchTasks();
})
</script>