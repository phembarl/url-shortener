import { check } from 'express-validator';

const urlValidator = [
  check('url')
    .notEmpty()
    .withMessage('url is required')
    .isURL()
    .withMessage(
      'Please input a valid url. \n Example: https://www.urlshortener.com'
    )
    .trim(),
];

export default { urlValidator };
