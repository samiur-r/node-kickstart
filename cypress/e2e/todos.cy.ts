describe('Todo API', () => {
  it('should create a new todo', () => {
    cy.request('POST', '/api/v1/todos', {
      title: 'New Todo',
      completed: false,
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.title).to.equal('New Todo');
    });
  });

  it('should retrieve all todos', () => {
    cy.request('GET', '/api/v1/todos').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('should retrieve a todo by ID', () => {
    cy.request('GET', '/api/v1/todos/1').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(1);
    });
  });

  it('should update a todo by ID', () => {
    cy.request('PUT', '/api/v1/todos/1', {
      title: 'Updated Todo',
      completed: true,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.title).to.equal('Updated Todo');
      expect(response.body.completed).to.equal(true);
    });
  });

  it('should delete a todo by ID', () => {
    cy.request('DELETE', '/api/v1/todos/3').then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
