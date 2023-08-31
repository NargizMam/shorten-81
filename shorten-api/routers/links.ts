import express from "express";
import Link from '../models/Links';
import {LinkWithoutId} from "../types";

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
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultUrl: string = '';
    for(let i = 0; i < resultUrl.length; i++){
        resultUrl += chars[Math.round(Math.random()*(chars.length-7-1))];
    }
    try {
        const linkData: LinkWithoutId = {
            originalUrl: req.body.originalUrl,
            shortUrl: resultUrl
        };

        const link = new Link(linkData);

        await link.save();
        return res.send(link);
    } catch (error) {
        return res.status(400).send(error);
    }

});

export default linksRouter;