import request from 'supertest';
import app from '../../../src/app';

const bookRequests = {
  async createBook({ body, token }) {
    const bodyRequest = {
      title: 'Harry Potter',
      author: 'Maycon',
      category: 'adventure',
      ...body,
    };

    const booksResponse = await request(app)
      .post('/books')
      .set(token)
      .send(bodyRequest);

    return booksResponse;
  },
};

export { bookRequests };
