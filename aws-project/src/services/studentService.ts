import type { Student } from '@/types/student'
import http from './axios'

function getAllStudents() {
  return http.get('/students')
}

function createStudent(student: Student) {
  return http.post('/students/register', student)
}
export default { getAllStudents, createStudent }
