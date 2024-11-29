<script setup lang="ts">
const config = useRuntimeConfig();

import {useTaskStore} from "~/stores/task.store"
const store = useTaskStore();
const tasks = computed(()=>Object.groupBy(store.tasks, (t=>t.status)));

</script>

<template>
    <TaskList :tasks="tasks.pending" title='Pendiente' @delete="store.removeTask" @selectToUpdate="store.setTaskToUpdate"/>
    <TaskList :tasks="tasks['in-progress']" title='En progreso' @delete="store.removeTask" @selectToUpdate="store.setTaskToUpdate"/>
    <TaskList :tasks="tasks.completed" title='Completado' @delete="store.removeTask" @selectToUpdate="store.setTaskToUpdate"/>
</template>