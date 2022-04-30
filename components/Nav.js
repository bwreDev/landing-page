export default function Nav() {
  return (
    <header className='bg-emerald-900'>
      <nav
        className='max-w-7xl mx-auto sm:px-2 lg:px-4'
        aria-label='main navigation'
      >
        <div className='flex justify-between items-center py-4'>
          <div className='space-x-4 inline-block'>
            <a
              href='#'
              className='inline-block bg-emerald-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-emerald-50 hover:bg-opacity-75'
            >
              Log in
            </a>
            <a
              href='#'
              className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-emerald-900 hover:bg-emerald-50'
            >
              Sign up
            </a>
          </div>
          <div className='inline-block items-center justify-end space-x-4'>
            <a
              href='#'
              className='text-base font-medium text-emerald-50 hover:text-emerald-200'
            >
              About
            </a>
            <a
              href='#'
              className='text-base font-medium text-emerald-50 hover:text-emerald-200'
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
