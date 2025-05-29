import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from 'src/dto/todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todosService: TodoService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Get('/:id')
  getTodo(@Param('id') id: string) {
    return this.todosService.getTodo(id);
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.updateTodo(id, updateTodoDto);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
