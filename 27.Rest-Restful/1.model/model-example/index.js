const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
}); // como a getAll foi criada com async/await, então precisa ser chamada com async/await também

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);
  
  if (!author) return res.status(404).json({ message: 'Not found' });
  
  res.status(200).json(author);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.create(title, author_id);
  return res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.put('/books/:id', async (req,res) => {
  try {
    const { title, author_id } = req.body;

    const { id } = req.params;

    const result = await Book.update(id, title, author_id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Erro ao tentar realizar operação" });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Book.exclude(id);

    res.status(204).end();
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ message: "Erro ao tentar realizar operação" });
  }
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
