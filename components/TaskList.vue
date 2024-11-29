<template class="task-list">
    <h2 class="task-list__title">{{ title }}</h2>
    <ul>
        <li v-for="task in taskFiltered" :key="task.id">
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
            <button @click="$emit('delete', task.id)">Eliminar</button>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    title: String,
    tasks: Array,
    status: String
})
const emit = defineEmits(['delete']);

const taskFiltered = computed(()=>{
    return props.tasks.filter(task=>task.status === props.status)
})
</script>