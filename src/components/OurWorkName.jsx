import { Typewriter } from 'react-simple-typewriter'

const OurWorkName = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count)}

  const handleDone = () => {
    console.log(`Done after 10 loops!`)
  }

  return (
    <div>
      <h1 className='font-bold text-2xl text-orange-500'>
        Our Work: {' '}
        <span className='text-violet-500'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Crafting', 'with', 'Passion']}
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

export default OurWorkName;