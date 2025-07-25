import Feature from '@components/Feature';
import Footer from '@components/Footer';
import logo from '@images/paper_background.jpeg';

const App = () => (
  <div
    className='flex min-h-screen flex-col justify-center py-6 sm:py-12 bg-cover bg-center'
    style={{ backgroundImage: `url(${logo})` }}
  >
    <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
      <div className='to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl' />
      <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
        <div className='mx-auto max-w-md'>
          <div>
          </div>
          <div className='divide-y divide-gray-200'>
            <div className='space-y-5 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
              <h1 className='text-lg font-semibold text-cyan-600'>
                React and Tailwind CSS Starter Kit
              </h1>
              <p>Create a React project with Vite and Tailwind CSS.</p>
              <div className='list-disc space-y-2'>

              </div>
              <p className='text-sm font-medium text-cyan-500'>
                Built with Tailwind CSS 4 and React 19.
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
