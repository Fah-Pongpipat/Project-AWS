// src/types/student.ts
export type Student = {
  id: number
  name: string
  role: 'student' | 'teacher' // สามารถใช้ string literal types
  user_id: number
}
