import nc from 'next-connect';
import Contact from '../../../models/Contact';

import db from '../../../utils/db';
 

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    
  });
  const contact = await newContact.save();
  await db.disconnect();
  res.json(contact)
  
  
});

export default handler;
