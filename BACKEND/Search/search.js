import express from 'express'
import { mongoose } from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import searchModel from './search.model.js';

const app = express();
const PORT = process.env.Port || 3001;

app.use(express.json());
app.post("/search", async (req, res) => {
    try {
        const { id, label, type, link } = req.body;
        console.log(req.body);
        if (!id || !label || !type || !link) {
            throw new Error("All is required")
        }
        const searchs = await searchModel.create({
            id,
            label,
            type,
            link
        })

        if (!searchs) {
            throw new Error("search is required!")
        }

        res.status(200).send(searchs);
    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).send(error.message)
    }
})
app.put("/search/:searchId", async (req, res) => {
    try {
        const { id, label, type, link } = req.body;
        console.log(req.body);
        if (!id || !label || !type || !link) {
            throw new Error("All is required")
        }
        const searchFilms = await searchModel.findByIdAndUpdate(req.params.searchId, {
            id,
            label,
            type,
            link
        }, { new: true });
        console.log(searchFilms);
        if (!searchFilms) {
            throw new Error("searchFilm is required")
        }

        res.status(201).send(searchFilms)
    } catch (error) {
        console.log("error :>>", error);
    }
})

app.patch("/search/:searchTd", async (req, res) => {
    try {

        const deleteSearch = await searchModel.findByIdAndDelete(req.params.searchTd);
        if (!deleteSearch) throw new Error("delete not default")

        res.status(202).send(deleteSearch)
    } catch (error) {
        console.log("error :>>", error);
        res.json({
            code: 500,
            message: "success"
        })
    }
})
mongoose
    .connect('mongodb://127.0.0.1:27017/fullStack')
    .then(app.listen(PORT, () => { console.log(` search is running  ${PORT}`) }));