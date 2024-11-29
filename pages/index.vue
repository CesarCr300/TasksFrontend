<template>
    <div class="container">
        <TaskForm @submit="handleSubmit" :task-to-update="store.taskToUpdate" />
        <TaskListContainer />
    </div>
</template>

<script setup lang="ts">
import {useTaskStore} from "~/stores/task.store"
const store = useTaskStore();

const handleSubmit = (task:any, cleanForm: ()=>void)=>{
    if (store.taskToUpdate){
        store.editTask(store.taskToUpdate.id, task);
    }else{
        store.addTask(task);
    }
    cleanForm();
}

onMounted(()=>{
    store.fetchTasks();
})
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
    max-height: calc(100vh - 40px);
}

@media (max-width: 768px) {
    .container {
        max-height: none;
    }
}
</style>