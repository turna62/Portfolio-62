import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id='contact-section' className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <div className="max-w-md">
          <p className="text-black-700 mb-4 text-center">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
          <ul className="text-black-700 space-y-2 text-center">
            <li>
              <p>
                <MdEmail className="inline-block mr-2" />
                Email: lamiaalam@iut-dhaka.edu
              </p>
            </li>
            <p>
                <FaPhone className="inline-block mr-2" />
                Phone: 01757405623              </p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
