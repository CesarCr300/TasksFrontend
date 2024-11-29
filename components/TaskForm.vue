<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input v-model="task.title" placeholder="Título" class="task-form__input" />
    <textarea v-model="task.description" placeholder="Descripción" class="task-form__textarea"></textarea>
    <div v-if="taskToUpdate" class="task-form__status">
      <label for="status" class="task-form__label">Estado: </label>
      <select id="status" v-model="task.status" class="task-form__select">
        <option v-for="status in statuses" :key="status" :value="status">
          {{ taskStatusEnumTranslation[status] }}
        </option>
      </select>
    </div>
    <button type="submit" class="task-form__button">{{ buttonText }}</button>
  </form>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { TaskStatusEnum, taskStatusEnumTranslation } from '~/models/task.model';

const props = defineProps({
  taskToUpdate: {
    type: Object,
    default: null,
  },
});
const emit = defineEmits(['submit']);
const task = ref({ id: null, title: '', description: '', status: TaskStatusEnum.PENDING });

const statuses = Object.values(TaskStatusEnum);

watch(
  () => props.taskToUpdate,
  (newTask) => {
    if (newTask) {
      task.value = { ...newTask };
    } else {
      task.value = { id: null, title: '', description: '', status: TaskStatusEnum.PENDING };
    }
  },
  { immediate: true }
);

const buttonText = computed(() => (props.taskToUpdate ? 'Guardar' : 'Crear'));

const handleSubmit = () => {
  emit('submit', task.value, ()=>{task.value={}});
};
</script>

<style scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  max-width: 500px;
  margin: 0 auto;
}

.task-form__input,
.task-form__textarea,
.task-form__select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
}

.task-form__textarea {
  resize: vertical;
}

.task-form__label {
  margin-bottom: 5px;
}

.task-form__button {
  padding: 10px 20px;
  border: 1px solid rgb(15,15,15);
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
}
</style>