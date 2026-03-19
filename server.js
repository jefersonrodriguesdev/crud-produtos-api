const express = require('express');
const app = express();

// IMPORTANTE: Middleware para a API conseguir ler o JSON que vem no corpo (body)
app.use(express.json());

// 1. Rota de Listagem (GET)
app.get('/produtos', (req, res) => {
    res.status(200).json({ message: "Listando todos os produtos..." });
});

// 2. Rota de Busca por ID (GET com params)
app.get('/produtos/:id', (req, res) => {
    const id = req.params.id; // Pegando o ID da URL
    res.status(200).json({ message: `Buscando o produto com ID: ${id}` });
});

// 3. Rota de Cadastro (POST com body)
app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body; // Pegando dados do corpo da requisição
    res.status(201).json({ 
        message: "Produto recebido!",
        dados: { nome, preco } 
    });
});

app.put('/produtos/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `Atualizando o produto ${id}` });
});

app.delete('/produtos/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `Excluindo o produto ${id}` });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});