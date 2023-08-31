import express from "express";
import Link from '../models/Links';
import {LinkWithoutId} from "../types";

const linksRouter = express.Router();

linksRouter.get('/',  async (req, res) => {
    try {
        const allLinks = await Link.find();
        return res.send(allLinks
        );
    }catch (e) {
        return res.sendStatus(500);
    }
});
linksRouter.get('/:shortUrl', async (req, res) => {
    try{
        const selectLink = await Link.findOne({shortUrl: req.params.shortUrl});
        if(selectLink){
            return res.send(selectLink);
        }else{
            res.send('Link not found!')
        }
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

        try {
            await link.save();
            return res.send(link);
        } catch (error) {
            return res.status(400).send(error);
        }
    } catch (e) {
        return res.sendStatus(500);
    }
});

export default linksRouter;