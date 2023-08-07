import { deleteBook } from '../src/repositorys/book.repository';
import { bookRequests } from './mock/book/book.mock';

describe('Book', () => {
  const environments = {};

  afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    await deleteBook;
  });

  it('should create a new book', async () => {
    const { body, status } = await bookRequests.createBook({
      token: environments.token,
    });

    environments.book_id = body.id;

    expect(status).toBe(201);
    expect(body).toHaveProperty('id');
  });
});
