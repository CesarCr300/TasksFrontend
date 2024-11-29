<template>
    <div>TODO</div>
    <TaskForm @submit="handleSubmit" :task-to-update="store.taskToUpdate" />
    <TaskListContainer />
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