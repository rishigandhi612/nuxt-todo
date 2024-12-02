<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Todo App with NUXT.js!
        </v-card-title>
        <v-card-text>
          You can add your todos here
        </v-card-text>
        <!-- Todo Form -->
        <v-form v-model="formValid" @submit.prevent="addTodo">
          <v-text-field
            v-model="newTodo"
            label="New Todo"
            :rules="[rules.required]"
            outlined
            dense
          />
          <v-btn
            :disabled="!formValid"
            color="primary"
            type="submit"
          >
            Add Todo
          </v-btn>
        </v-form>

        <!-- Todo List -->
        <v-divider class="my-4" />
        <v-list>
          <v-list-item-group v-if="todos.length > 0">
            <v-list-item v-for="(todo, index) in todos" :key="todo.id">
              <v-list-item-content>
                <v-list-item-title
                  :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }"
                >
                  {{ todo.text }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <!-- Checkbox for marking the todo as completed -->
                <v-checkbox
                  v-model="todo.completed"
                  :label="'Completed'"
                  @change="toggleCompletion(index)"
                  color="success"
                />
                <v-btn icon @click="editTodo(index)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="deleteTodo(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
          <v-list-item v-else>
            <v-list-item-content>No todos yet!</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      todos: [], // The array to store todos
      newTodo: '', // The model for the new todo text input
      formValid: false, // For form validation
      rules: {
        required: value => !!value || 'This field is required',
      },
      currentEditIndex: null, // The index of the todo being edited
    };
  },
  methods: {
    // Add new todo
    addTodo() {
      if (this.currentEditIndex !== null) {
        // Update the existing todo if editing
        this.todos[this.currentEditIndex].text = this.newTodo;
        this.currentEditIndex = null;
      } else {
        // Add new todo
        this.todos.push({
          id: Date.now(), // Unique ID for each todo
          text: this.newTodo,
          completed: false, // Add a completed field for each todo
        });
      }
      this.newTodo = ''; // Clear the input field
      this.formValid = false; // Reset form validation
    },

    // Edit an existing todo
    editTodo(index) {
      this.newTodo = this.todos[index].text; // Set the input to the current todo text
      this.currentEditIndex = index; // Set the index of the todo being edited
    },

    // Delete a todo
    deleteTodo(index) {
      this.todos.splice(index, 1); // Remove todo from the list
    },

    // Toggle the completion status of a todo
    toggleCompletion(index) {
      const todo = this.todos[index];
      todo.completed = !todo.completed;
    },
  },
};
</script>

<style scoped>
/* Optional: Add custom styles for completed todos */
.v-list-item-title {
  transition: text-decoration 0.3s ease;
}
</style>
