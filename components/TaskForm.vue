<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="task.title" placeholder="Título" />
        <textarea v-model="task.description" placeholder="Descripción"></textarea>
        <button type="submit">Crear</button>
    </form>
</template>

<script setup>
  import { ref } from 'vue';
  
  const props = defineProps({});
  
  const emit = defineEmits(['submit']);
  const task = ref({ ...props.initialTask });
  
  const handleSubmit = () => {
    emit('submit', task.value);
  };
  </script>