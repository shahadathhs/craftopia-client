import { Typewriter } from 'react-simple-typewriter'

const WebName = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count)}

  const handleDone = () => {
    console.log(`Done after 10 loops!`)
  }

  return (
    <div>
      <p className='text-2xl text-violet-600 font-bold'>Welcome to our store</p>
      <h1 className='font-bold text-2xl text-orange-500'>
        Craftopia: {' '}
        <span className='text-violet-500'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Haven', 'of', 'Glass', 'and', 'Paper', 'Art']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default WebName;