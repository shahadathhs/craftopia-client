import { Button } from "flowbite-react";

function App() {

  return (
    <>
      <div className="space-y-4">
        {/* tailwindCss */}
        <h1 className="text-3xl text-blue-400 font-bold underline">
          Hello world!
        </h1>
        {/* flowBite */}
        <Button className='bg-[#AEEEEE]'>Click me</Button>
        {/* daisyUi */}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
