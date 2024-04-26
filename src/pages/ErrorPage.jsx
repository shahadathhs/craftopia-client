import { Helmet, HelmetProvider } from 'react-helmet-async';
import errorImg from '../assets/404.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Craftopia | ERROR</title>
      </Helmet>
      <div>
        <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <img className='mx-auto mb-8' src={errorImg} alt="" />
              <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
              <p className="mt-4 mb-8 text-gray-600">But do not worry, you can find plenty of other things on our homepage.</p>
              <Link to='/' className="btn btn-outline">Back to homepage</Link>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default ErrorPage;