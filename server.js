const { app } = require("./app");

const PORT = 4003;

app.listen(PORT, () => {
  console.log(`Servidor corriendo por el puerto ${PORT}`);
});
