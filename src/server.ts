import app from './app';

const server = app.listen(app.get("port"), () => {
    console.log("App esta corriendo en el ambiente local"),
    app.get("port"),
    app.get("env")
})

export default server;