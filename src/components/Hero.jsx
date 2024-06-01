const Hero = ({
  title = 'Hi! I am Lamia Alam',
  subtitle = 'I am a final-year Software Engineering student at the Islamic University of Technology, dedicated to developing creative software solutions.',
}) => {
  return (
    <section className='bg-indigo-700 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-white sm:text-3xl md:text-4xl'>
            {title}
          </h1>
          <p className='my-4 text text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
