<script setup lang="ts">
const config = useRuntimeConfig();

import {useTaskStore} from "~/stores/task.store"
const store = useTaskStore();
const tasks = computed(()=>Object.groupBy(store.tasks, (t=>t.status)));

</script>

<template>
    <div class="task-list-container">
        <TaskList :tasks="tasks.pending" title='Pendiente' @delete="store.removeTask"
            @selectToUpdate="store.setTaskToUpdate" />
        <TaskList :tasks="tasks['in-progress']" title='En progreso' @delete="store.removeTask"
            @selectToUpdate="store.setTaskToUpdate" />
        <TaskList :tasks="tasks.completed" title='Completado' @delete="store.removeTask"
            @selectToUpdate="store.setTaskToUpdate" />
    </div>
</template>

<style scoped>
.task-list-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    height: 100vh;
    overflow: hidden;
}

.task-list-container>* {
    overflow-y: auto;
}

@media (max-width: 768px) {
    .task-list-container {
        grid-template-columns: 1fr;
    }
}
</style>