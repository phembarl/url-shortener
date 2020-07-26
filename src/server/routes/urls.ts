import { Router } from 'express';
import { shortenUrl, getUrls } from '../controllers/urlProcessor';
import validator from '../middleware/urlValidator';
import validate from '../middleware/validate';

const urlRouter = Router();

urlRouter.post('/shorten', validator.urlValidator, validate, shortenUrl);
urlRouter.get('/', getUrls);

export default urlRouter;
