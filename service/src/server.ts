import app from './app';

const port = 3000;

app.listen(port, () => {
    console.log(`🚀 [server]: servidor rodando em http://localhost:${port}.`);
});