import app from './app';

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log("\x1b[42m", "\x1b[37m" ,`✔ Server started of port ${PORT}`, "\x1b[0m");
});
