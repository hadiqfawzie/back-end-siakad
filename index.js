const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const routerMhs = require('./routes/mahasiswa')
const routerMk = require('./routes/matakuliah')
const routerNilai = require('./routes/nilai')
const routerUser = require('./routes/user')
const session = require('express-session');

// Konfigurasi session
app.use(session({
    secret: '@iyt;kco0=d;k8w-;dsauhsli120kXCbis##@4no8m!',
    resave: false,
    saveUninitialized: false,
    cookie: {
        // sameSite: 'none',
        // secure: false,
        //maxAge: 36000000,
    },
}));



app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

//untuk menerima req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routerMhs)
app.use(routerMk)
app.use(routerNilai)
app.use(routerUser)

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})