import { Typewriter } from 'react-simple-typewriter'

const WebName = () => {

  return (
    <div className='flex flex-col md:flex-row gap-2 justify-center mx-auto items-center'>
      <p className='text-2xl text-violet-600 font-bold'>Welcome to our store</p>
      <h1 className='font-bold text-2xl text-orange-500'>
        Craftopia: {' '}
        <span className='text-violet-500'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Haven', 'of', 'Glass', 'and', 'Paper', 'Art']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default WebName;