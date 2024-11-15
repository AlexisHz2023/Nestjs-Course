import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateTaskDto } from "./dto/create-task.dto"
import { UpdateTaskDto } from "./dto/update-task-dto"

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = []

    getTasks() {
       return this.tasks;
    }

    getTask(id: number) {

        const taskFound = this.tasks.find(task => task.id === id);

        if (!taskFound) {
            return new NotFoundException(`Task with id ${id} found`)
        }
    }

    createTaks(task: CreateTaskDto) {
       this.tasks.push({
        ...task,
        id: this.tasks.length + 1,
       })
    }

    updateTaks(task: UpdateTaskDto) {
        return 'actualizando tarea...'
    }

    deleteTask() {
        return 'eliminando tarea...'
    }
    updateTaskStatus() {
        return 'actualizando el estado de la tarea...'
    }
}