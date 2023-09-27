import request from 'supertest';

import app from '@/app';

describe('Todos Controller', () => {
  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/api/v1/todos')
      .send({ title: 'Test Todo', completed: false });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Todo');
  });

  it('should retrieve all todos', async () => {
    const response = await request(app).get('/api/v1/todos');

    expect(response.status).toBe(200);
  });

  it('should retrieve a todo by ID', async () => {
    // Assuming you have a valid todo ID
    const validTodoId = 1;

    const response = await request(app).get(`/api/v1/todos/${validTodoId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(validTodoId);
    // Add more assertions as needed
  });

  it('should handle retrieving a non-existent todo by ID', async () => {
    // Assuming you have an invalid todo ID that doesn't exist
    const invalidTodoId = 999;

    const response = await request(app).get(`/api/v1/todos/${invalidTodoId}`);

    expect(response.status).toBe(404);
    // Add more assertions as needed
  });

  it('should update a todo by ID', async () => {
    // Assuming you have a valid todo ID
    const validTodoId = 1;
    const updatedTodoData = { title: 'Updated Todo', completed: true };

    const response = await request(app)
      .put(`/api/v1/todos/${validTodoId}`)
      .send(updatedTodoData);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(updatedTodoData.title);
    expect(response.body.completed).toBe(updatedTodoData.completed);
    // Add more assertions as needed
  });

  it('should handle updating a non-existent todo by ID', async () => {
    // Assuming you have an invalid todo ID that doesn't exist
    const invalidTodoId = 999;
    const updatedTodoData = { title: 'Updated Todo', completed: true };

    const response = await request(app)
      .put(`/api/v1/todos/${invalidTodoId}`)
      .send(updatedTodoData);

    expect(response.status).toBe(404);
    // Add more assertions as needed
  });

  it('should delete a todo by ID', async () => {
    // Assuming you have a valid todo ID
    const validTodoId = 2;

    const response = await request(app).delete(`/api/v1/todos/${validTodoId}`);

    expect(response.status).toBe(204);
    // Ensure the response body is empty for a successful deletion
    expect(response.body).toEqual({});
  });

  it('should handle deleting a non-existent todo by ID', async () => {
    // Assuming you have an invalid todo ID that doesn't exist
    const invalidTodoId = 999;

    const response = await request(app).delete(
      `/api/v1/todos/${invalidTodoId}`,
    );

    expect(response.status).toBe(404);
    // Add more assertions as needed
  });
});
