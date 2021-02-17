import Cars from '../Models/cars_schema';
import {Request,Response} from 'express';

export let car_get = (req : Request, res : Response) => {
    
    try {
        Cars.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
    } catch (error) {
        console.log(error);
    }
};

export let car_post = (req : Request, res: Response) => {

    const dbfeed = req.body
    try {
        Cars.create(dbfeed, (err:any, data:any) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
    } catch (error) {
        console.log(error);
    }
};

