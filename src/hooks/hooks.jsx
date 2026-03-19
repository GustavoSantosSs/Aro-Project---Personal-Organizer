import { useState, useEffect } from "react"
import { getTasks } from "../services/services"

export function useTasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      const data = await getTasks()
      setTasks(data)
    }

    loadTasks()
  }, [])

  return { tasks }
}