import app from './app';

const port = 5000;

app.listen(port, () => {
    console.log(`🚀 [server]: servidor rodando em http://localhost:${port}.`);
});