import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';
import cors from 'cors';
import {Name, Email, Password, Weight, Height} from './result.js';

// Initialize express application
const app = express();

// Connect database
  connectP1Database();

  // Configure Middleware
  app.use(express.json({ extended: false }));
  app.use(
    cors({
      origin: 'http://localhost:3000'
  })
);

  // API endpoints
  /** 
   * @route GET /
   * @desc Test endpoint
   */
  app.get('/',(req, res) =>
  res.send('Project 1 API get request sent to root API endpoint')
  );

/**
 * @route POST api/users
 * @desc Register user
 */
app.post(
  '/api/users',
  [
    check('name', 'Please enter your name').not().isEmpty(),
    check('name', 'Please enter your name').isName(),
    check('email', 'Please enter a valid email').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6}),
    check('weight', 'Please enter a weight character').not().isEmpty(),
    check('weight', 'Please enter a weight character').isWeight(),
    check('height', 'Please enter a height character').not().isEmpty(),
    check('height', 'Please enter a height character').isHeight()
  ],

(req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) 
{
  return res.status(422).json({ errors: errors.array() });
} else {
return res.send(req.body);
    }
});
// Connection Listener
const port = 5000;
app.listen(port, () => console.log('Express server running on port ${port}'));
