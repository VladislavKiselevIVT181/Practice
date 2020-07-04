
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.post("/", function(request, response) {
    const { Arg1, Arg2, oper } = request.body; 

    if (oper === '+') {
        response.status(200).json(Arg1 + Arg2);


    } else if (oper === '-') {
        response.status(200).json(Arg1 - Arg2);


    } else if (oper === '/') {
        response.status(200).json(Arg1 / Arg2);


    } else if (oper === '*') {
        response.status(200).json(Arg1 * Arg2);


    } else if (oper === '^') {
        response.status(200).json(Math.pow(Arg1, Arg2));


    } else if (oper === '%') {
        response.status(200).json((Arg1*Arg2)/100);


    } else if (oper === 'sqrt') {
        response.status(200).json(Math.sqrt(Arg1));


    } else if (oper === 'sin') {
        response.status(200).json(Math.sin(Arg1));


    } else if (oper === 'cos') {
        response.status(200).json(Math.cos(Arg1));


    } else if (oper === 'tan') {
        response.status(200).json(Math.tan(Arg1));
        

    } else if (oper === 'ctan') {
        response.status(200).json(1/(Math.tan(Arg1)));

    }
    
});

app.listen(2070);