// TROQUE ISSO:
app.listen(3000, ...)

// POR ISSO:
const porta = process.env.PORT || 3000;
app.listen(porta, () => console.log(`✅ Rodando na porta ${porta}`));