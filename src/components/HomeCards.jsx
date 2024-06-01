import { Link } from 'react-router-dom';
import Card from './Card';
import { FaFileCode } from "react-icons/fa6";

const HomeCards = () => {
  return (
    <section id='about-section' className='py-4'>
              <h2 className='text-4xl font-bold text-center'>ABOUT</h2>

      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>

          <Card>
          <h2 className='text-2xl font-bold'>
        Frontend Developer 
      </h2>
            <p className='mt-2 mb-4'>
           I have experience in frontend development, having worked on projects with React, Tailwind CSS, Next.js.

</p>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Backend Developer</h2>
            <p className='mt-2 mb-4'>
            I have expertise in creating efficient and optimized backend systems and APIs using ExpressJS, PHP and Django.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;