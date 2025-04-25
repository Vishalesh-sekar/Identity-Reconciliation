import { Router } from 'express';
import { create, findAll } from '../controllers/contact.controller';

const router = Router();

// Create a new contact
router.post('/', create);

// Retrieve all contacts
router.get('/', findAll);

export default router;
