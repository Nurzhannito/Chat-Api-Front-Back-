import express from "express";
import fs from "fs";
import { nanoid } from "nanoid";
const router = express.Router();
const fileName = "./db.json";
let data = [];
let slited = [];

export const init = () => {
    try {
        const fileContents = fs.readFileSync(fileName);
        data = JSON.parse(fileContents);
    }
    catch (e) {
        data = [];
    }
}

const save = () => {
    fs.writeFileSync(fileName, JSON.stringify(data));
}

const sendMessage = (message) => {
    data.push(message);
    save();
}

const getMessages = () => {
    let lastThirdMessages = data.slice(-30);
    return lastThirdMessages
}

const getMessagesAfterDate = (datetime) => {
    data.forEach(message => {
        if (message.datetime === datetime) {
            const index = data.indexOf(message);
            data = data.slice(index);
        }
    })
    return data;
}

const createRouter = () => {
    router.get('/', (req, res) => {
        if (!req.query.datetime) {
            return res.send(getMessages());
        }
        const date = new Date(req.query.datetime)
        if (isNaN(date.getDate())) return res.status(400).send({ error: 'Invalid datetime' });
        res.send(getMessagesAfterDate(req.query.datetime))

    });

    router.post('/', (req, res) => {
        if (!req.body.message || !req.body.author) return res.status(400).send({ error: "Author and message must be present in the request" });
        const message = { ...req.body, id: nanoid(), datetime: (new Date()).toISOString() };
        sendMessage(message)
        res.send(message);
    });

    return router
}



export default createRouter;;
