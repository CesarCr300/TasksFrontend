<template>
    <div class="task-list">
        <h2 class="task-list__title">{{ title }}</h2>
        <section>
            <div v-for="task in tasks" :key="task.id" class="task-list__item">
                <h3>{{ task.title }}</h3>
                <p>{{ task.description }}</p>
                <button class="task-list__button" @click="$emit('selectToUpdate', task.id)">Actualizar</button>
                <button class="task-list__button" @click="$emit('delete', task.id)">Eliminar</button>
            </div>
        </section>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    tasks: Array,
})
const emit = defineEmits(['delete','selectToUpdate']);
</script>

<style scoped>
.task-list {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}

.task-list__title {
    text-align: center;
}

.task-list__item {
    margin-top: 20px;
    padding: 0 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: auto;
}

.task-list__button {
    margin: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: rgb(15, 15, 15);
    border: 1px solid rgb(15, 15, 15);
    cursor: pointer;
}

.task-list__button:first-of-type {
    margin-left: 0;
}

@media (max-width: 768px) {
    .task-list__button {
        margin: 5px 5px;
    }

    .task-list {
        min-height: auto;
        max-height: 200px;
    }

    .task-list__title {
        margin: 0px;
    }

    .task-list__item {
        margin-top: 5px;
    }
}
</style>