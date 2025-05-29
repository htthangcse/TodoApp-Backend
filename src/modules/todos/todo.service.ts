import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'src/schema/todo.schema';
import { CreateTodoDto, UpdateTodoDto } from 'src/dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async createTodo(todoDto: CreateTodoDto) {
    const data: Partial<Todo> = {
      ...todoDto,
      datetime: todoDto.datetime ? new Date(todoDto.datetime) : undefined,
    };
    return this.todoModel.create(data);
  }

  async getTodos() {
    return this.todoModel.find().exec();
  }

  async getTodo(id: string) {
    return this.todoModel.findById(id).exec();
  }

  async updateTodo(id: string, updateDto: UpdateTodoDto) {
    const data: Partial<Todo> = {
      ...updateDto,
      datetime: updateDto.datetime ? new Date(updateDto.datetime) : undefined,
    };
    return this.todoModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteTodo(id: string) {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
