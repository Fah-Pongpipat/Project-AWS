<template>
  <div class="container">
    <h2>Student Registration</h2>
    <div class="form-group">
      <label for="name">Full Name</label>
      <input
        v-model="name"
        type="text"
        id="name"
        placeholder="Enter your name"
        required
      />
    </div>
    <div class="form-group">
      <label for="role">Position</label>
      <select v-model="role" id="role" required>
        <option value="student">นิสิต</option>
        <option value="teacher">อาจารย์</option>
      </select>
    </div>
    <button class="btn" @click="submitData">Submit</button>

    <h2>Submitted Data</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>User ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.user_id">
          <td>{{ student.name }}</td>
          <td>{{ student.role }}</td>
          <td>{{ student.user_id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import studentService from '@/services/studentService' // Import the studentService
import type { Student } from '@/types/student' // Import the Student type

const name = ref('')
const role = ref('student')
const students = ref<Student[]>([])

async function submitData() {
  if (name.value && role.value) {
    const student: Student = {
      id: 0, // Add missing properties
      name: name.value,
      role: role.value as 'student' | 'teacher',
      user_id: 0, // Add missing properties
    }
    try {
      const response = await studentService.createStudent(student)
      students.value.push(response.data) // Use response.data to access the actual student data
      resetForm()
    } catch (error) {
      console.error('Error:', error)
    }
  } else {
    alert('Please fill in all fields.')
  }
}

async function loadStudents() {
  try {
    const response = await studentService.getAllStudents() // Use the studentService to fetch students
    students.value = response.data // Assign fetched data to students array
  } catch (error) {
    console.error('Error:', error)
  }
}

function resetForm() {
  name.value = ''
  role.value = 'student'
}

onMounted(() => {
  loadStudents() // Load students when the component is mounted
})
</script>

<style scoped>
/* Add your CSS styling here */
.container {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: #555;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.btn:hover {
  background-color: #2980b9;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f4f4f9;
  color: #333;
}
</style>
