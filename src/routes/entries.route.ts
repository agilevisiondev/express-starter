import express from "express";
const router = express.Router();
const entries = require("../src/controllers/entries.controller").default;

router.get("/", entries.get);
router.post("/", entries.create);

export {router as entriesRouter};