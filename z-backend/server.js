const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const app = express();

//https://www.npmjs.com/package/passport-google-oauth20 (Google API Key)

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);


app.listen("5000", () => {  //PORT = http://localhost:5000/
    console.log("Server is running!");
});

app.get('/', (req, res) => {
    res.json({ message: "welcome my BackEnd platform 5000...." })
})

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);