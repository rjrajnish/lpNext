import nc from 'next-connect';

import db from '../../../utils/db';
 import Enquiry from '../../../models/Enquiry';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newEnquiry = new Enquiry({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    
  });
  const enquiry = await newEnquiry.save();
  await db.disconnect();
  res.json(enquiry)
  console.log("reciv",enquiry)

  
});

export default handler;
