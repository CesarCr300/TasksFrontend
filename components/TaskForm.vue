<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="task.title" placeholder="Título" />
    <textarea v-model="task.description" placeholder="Descripción"></textarea>
    <button type="submit">{{ buttonText }}</button>
  </form>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  taskToUpdate: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['submit']);
const task = ref({ title: '', description: '' });

watch(
  () => props.taskToUpdate,
  (newTask) => {
    if (newTask) {
      task.value = { ...newTask };
    } else{
      task.value = {};
    }
  },
  { immediate: true }
);

const buttonText = computed(() => (props.taskToUpdate ? 'Guardar' : 'Crear'));

const handleSubmit = () => {
  emit('submit', task.value, ()=>{task.value = {}});
};
</script>