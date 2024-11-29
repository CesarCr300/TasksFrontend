<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="task.title" placeholder="Título" />
    <textarea v-model="task.description" placeholder="Descripción"></textarea>
    <div v-if="taskToUpdate">
      <label for="status">Estado:</label>
      <select id="status" v-model="task.status">
        <option v-for="status in statuses" :key="status" :value="status">
          {{ taskStatusEnumTranslation[status] }}
        </option>
      </select>
    </div>
    <button type="submit">{{ props.taskToUpdate ? 'Guardar' : 'Crear' }}</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue';
import { TaskStatusEnum, taskStatusEnumTranslation } from '~/models/task.model';

const props = defineProps({
  taskToUpdate: {
    type: Object,
    default: null,
  },
});
const emit = defineEmits(['submit']);
const task = ref({ title: '', description: '' });

const statuses = Object.values(TaskStatusEnum);
const selectedStatus = ref(TaskStatusEnum.PENDING);

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

const handleSubmit = () => {
  emit('submit', task.value, ()=>{task.value = {}});
};
</script>