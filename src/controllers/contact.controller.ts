import { Request, Response } from 'express';

// Create a new contact
export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, phoneNumber } = req.body;

    // TODO: Implement logic to handle contact creation
    // For now, sending a placeholder response
    res.status(201).json({
      message: 'Contact created successfully',
      data: { email, phoneNumber }
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Retrieve all contacts
export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    // TODO: Replace with actual database logic to fetch contacts
    const dummyContacts = [
      { id: 1, email: 'doc@hillvalley.com', phoneNumber: '123456' },
      { id: 2, email: 'marty@hillvalley.com', phoneNumber: '789101' }
    ];

    res.status(200).json({
      message: 'Contacts fetched successfully',
      data: dummyContacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
