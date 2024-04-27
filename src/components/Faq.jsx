const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
          {/* question 1 */}
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How do I care for my handmade glass art?
            </summary>
            <div className="px-4 pb-4">
              <p>Handmade glass art pieces require gentle care to maintain their beauty. 
                We recommend cleaning them with a soft, lint-free cloth and mild glass cleaner. 
                Avoid harsh chemicals or abrasive materials that could scratch or damage the glass surface. 
                Additionally, handle with care to prevent accidental breakage.
              </p>
            </div>
          </details>
          {/* question 2 */}
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
             What are the different techniques used in paper quilling?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Paper quilling is a versatile craft that involves rolling and shaping thin strips 
                of paper to create intricate designs. Some common techniques in paper quilling 
                include basic coil shapes, teardrops, scrolls, and husking. Experimenting with 
                different techniques allows crafters to create a wide variety of patterns and designs..
              </p>
            </div>
          </details>
          {/* question 3 */}
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Can I customize my glass painting order?
            </summary>
            <div className="px-4 pb-4">
              <p>
              Yes, we offer customization options for glass painting orders! 
              Whether you are looking to personalize a piece with a special design or add a 
              unique touch to your order, our talented artists are here to bring your vision 
              to life. Contact us to discuss your customization needs and preferences.
              </p>
            </div>
          </details>
          {/* question 4 */}
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What types of paper are suitable for scrapbooking?
            </summary>
            <div className="px-4 pb-4">
              <p>
              Scrapbooking enthusiasts often use a variety of paper types to add texture, 
              color, and dimension to their projects. Common types of paper used in scrapbooking 
              include cardstock, patterned paper, vellum, specialty paper (such as glitter or foil), 
              and textured paper. Choosing the right paper for your scrapbook pages depends on your theme, 
              style, and desired effect.
              </p>
            </div>
          </details>
          {/* question 5 */}
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How do I get started with origami?
            </summary>
            <div className="px-4 pb-4">
              <p>
              Origami, the art of paper folding, is a fascinating and rewarding craft to explore.
               To get started, all you need is a square piece of paper and some basic folding 
               techniques. Begin with simple origami models like paper airplanes, boats, or 
               animals, and gradually progress to more complex designs as you gain confidence. 
               There are plenty of online tutorials and books available to help you master the 
               art of origami.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;