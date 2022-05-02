import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  const body = req.body;

  if (!body) {
    return res.status(400).json({ data: 'No data provided' });
  }

  const { data, error } = await supabase.from('contacts').insert([
    {
      fullName: `${body.fullName}`,
      email: `${body.email}`,
      message: `${body.message}`,
    },
  ]);

  res.status(200).json({ data: { body } });
}

// Here I am connecting the form to the API route /api/contact, and also connecting to Supabase and inserting a new row into the table using the data from the form.
