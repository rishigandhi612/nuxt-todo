<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-row justify="center" align="center">
          <v-col>
            <h2 class="text-center" style="color: #4caf50">Todo App!</h2>
          </v-col>
        </v-row>

        <!-- Todo Form -->
        <v-row class="mx-2">
          <v-col cols="9">
            <v-text-field
              v-model="newTodo"
              label="What needs to be done?"
              :rules="[rules.required]"
              outlined
              dense
            />
          </v-col>
          <v-col cols="3" align="center" justify="center">
            <v-btn color="success" @click="addTodo" block>
              {{ currentEditIndex !== null ? 'Edit Todo' : 'Add Todo' }}
            </v-btn>
          </v-col>
        </v-row>

        <!-- Filter Options -->
        <v-btn-toggle v-model="filter" class="my-2" color="success">
          <v-row class="mx-2">
            <v-col>
              <v-btn value="all" outlined :class="{ 'success-btn': filter === 'all' }">
                All
              </v-btn>
            </v-col>
            <v-col>
              <v-btn value="active" outlined :class="{ 'success-btn': filter === 'active' }">
                Active
              </v-btn>
            </v-col>
            <v-col>
              <v-btn value="completed" outlined :class="{ 'success-btn': filter === 'completed' }">
                Completed
              </v-btn>
            </v-col>
          </v-row>
        </v-btn-toggle>

        <!-- Todo List -->
        <v-divider class="my-4 mx-2" />
        <v-list>
          <v-list-item-group v-if="filteredTodos.length > 0">
            <v-list-item v-for="(todo, index) in filteredTodos" :key="todo.id">
              <v-list-item-content>
                <v-list-item-title
                  :style="{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }"
                >
                  {{ todo.text }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <!-- Checkbox for marking the todo as completed -->
                <v-checkbox
                  v-model="todo.completed"
                  :label="'Completed'"
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

            <v-row class="mx-2">
              <v-col cols="7" md="7" sm="7">
                <p>Items left: {{ activeTodosCount }}</p>
              </v-col>
              <v-col cols="5" md="5" sm="5">
                <v-btn @click="clearCompleted" text color="grey">
                  <v-icon>mdi-close</v-icon>
                  Clear Completed
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item-group>

          <v-list-item v-else>
            <v-list-item-content>No todos to display!</v-list-item-content>
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

      rules: {
        required: (value) => !!value || 'This field is required',
      },
      currentEditIndex: null, // The index of the todo being edited
      filter: 'all', // Filter option (all, active, completed)
    };
  },
  computed: {
    // Filtered todos based on the selected filter
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      } else if (this.filter === 'active') {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter === 'completed') {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },

    // Count of active (incomplete) todos
    activeTodosCount() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
  },
  created() {
    this.loadTodos(); // Call the loadTodos method when the component is created
  },
  watch: {
  todos: {
    handler() {
      this.saveTodos();
    },
    deep: true, // Ensure nested changes (like completion) are also watched
  },
},

  methods: {
    // Add new todo
    addTodo() {
      if (this.newTodo.trim() === '') return; // Prevent adding empty todos
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
      this.saveTodos(); // Save todos to local storage
      this.newTodo = ''; // Clear the input field
    },

    // Edit an existing todo
    editTodo(index) {
      this.newTodo = this.todos[index].text; // Set the input to the current todo text
      this.currentEditIndex = index; // Set the index of the todo being edited
    },

    // Clear all completed todos
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
      this.saveTodos(); // Save the updated todos to local storage
    },

    // Delete a todo
    deleteTodo(index) {
      this.todos.splice(index, 1); // Remove todo from the list
      this.saveTodos(); // Save todos to local storage
    },

    // Save todos to local storage
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    // Load todos from local storage
    loadTodos() {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    },
  },
};
</script>

<style scoped>
/* Style for success buttons */
.success-btn {
  background-color: #4caf50 !important;
  color: white !important;
}

/* Optional: Add custom styles for completed todos */
.v-list-item-title {
  transition: text-decoration 0.3s ease;
}
</style>
