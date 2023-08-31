import express from "express";
import Link from '../models/Links';
import * as shortid from 'shortid';
import {ApiLink} from "../types";

const linksRouter = express.Router();
linksRouter.get('/:shortUrl', async (req, res) => {
    try{
        const selectLink = await Link.findOne({shortUrl: req.params.shortUrl});
        if(!selectLink) {
            res.send('Link not found!');
        }
        res.send(selectLink);
    }catch (e) {
        return res.sendStatus(500);
    }
});
linksRouter.post('/', async (req, res) => {
    try{
    const baseUrl = 'httsp://localhost/';
    const gid: string = shortid.generate()
    const originalLink = req.body.originalUrl;
    const generatedLink: string = baseUrl ? `https://${baseUrl}/${gid}` : `https://${req.headers.host}/${gid}`
    const linkData: ApiLink = {
        originalUrl: originalLink,
        shortUrl: generatedLink,
        _id: gid,
    }
        const link = new Link(linkData);
        await link.save();
        return res.send(linkData);
    } catch (e) {
        return res.status(400).send('Error');
    }

});

export default linksRouter;