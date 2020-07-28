import { Request, Response, ErrorRequestHandler, response } from 'express';
import models from '../db/index';
import { generateUrl } from '../helpers/urlHelper';

const shortenUrl = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    const { Url } = models;
    const shortenedUrl = await generateUrl();
    let responseData: object = {};

    let data = new Url({
      url,
      shortenedUrl,
    });

    await data.save((error, response) => {
      if (error) return console.log(error);
      responseData = response;
      console.log('> url successfully saved to database');

      return res.status(201).json({
        status: 201,
        data: responseData,
        shortenedUrl,
        message: 'success',
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

const getUrls = async (req: Request, res: Response) => {
  try {
    const { Url } = models;
    const urls = await Url.find();

    return res.status(200).json({
      status: 200,
      urls,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

export { shortenUrl, getUrls };
