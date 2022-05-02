export default function ContactForm() {
  // Here I would set up some state management for the form using hooks.
  // This way I can reset the form after submission.
  // I only went this route because Next is able to collect form data from the action attribute on the form element.
  /*
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  */

  return (
    <fieldset className='pt-10 text-zinc-700'>
      <legend className='pt-4 font-bold'>Get in touch!</legend>
      <form
        className='grid grid-cols-2 gap-6'
        action='/api/contact'
        method='post'
      >
        <div className='flex flex-col'>
          <label htmlFor='name' className='pb-2 text-sm'>
            Name
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            required
            placeholder='Name'
            className='py-2 pl-2 w-full rounded-md'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email' className='pb-2 text-sm'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            placeholder='Email'
            className='py-2 pl-2 w-full rounded-md'
          />
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col'>
            <label htmlFor='message' className='pb-2 text-sm'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              maxLength='300'
              required
              className='py-2 pl-2 w-full h-32 rounded-md'
            />
          </div>
        </div>
        <div className='col-span-2 justify-self-end'>
          <input
            type='submit'
            className='bg-emerald-600 py-4 px-16 border border-transparent rounded-md text-sm font-medium text-emerald-50 hover:bg-opacity-75'
          />
        </div>
      </form>
    </fieldset>
  );
}
