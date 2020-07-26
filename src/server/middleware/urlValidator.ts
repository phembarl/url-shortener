import { check } from 'express-validator';

const urlValidator = [
  check('url')
    .notEmpty()
    .withMessage('url is required')
    .isURL()
    .withMessage('please input a valid url')
    .trim(),
];

export default { urlValidator };
