import express from 'Express'

const app = express()

const PORT = 3000;

app.get('/', (req,res) => {
    res.send("Server Funcionando")
})

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
})