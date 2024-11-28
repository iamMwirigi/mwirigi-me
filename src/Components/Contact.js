import React from "react";
import emailjs from 'emailjs-com'; // Import EmailJS
import { FaLinkedin, FaGithub, FaTwitter, FaSpotify, FaInstagram } from "react-icons/fa"; // Import Font Awesome icons

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    emailjs.send('service_evin1ig', 'template_u8tudag', templateParams, '7PyrRrnhnv9D__Vb_')
      .then(() => {
        alert("Message sent!");
        // Clear the input fields after submission
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert("Error sending message: " + error));
  }

  // Function to handle keydown event
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="container w-[500px] px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Container */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col justify-between relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Uthiru,+Nairobi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>

        {/* Contact Info Container */}
        <div className="lg:w-1/4 md:w-1/3 bg-gray-900 rounded-lg overflow-hidden p-4 flex flex-col justify-end h-full">
          <div className="relative flex flex-col p-4">
            <div className="px-4 mb-2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Uthiru, Nairobi, Kenya.</p>
            </div>
            <div className="px-4 mb-2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:mwirigimburugu81@gmail.com"
                className="text-indigo-400 leading-relaxed"
              >
                mwirigimburugu81@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-2">
                PHONE
              </h2>
              <a href="tel:+254714593953" className="leading-relaxed ">
                +254714593953
              </a>

              {/* Social Links */}
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/lawrence-mwirigi-441b482a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-600"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/iamMwirigi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-600"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://x.com/mwi_mwirigi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-600"
                >
                  <FaTwitter size={24} />
                </a>

                <a
                  href="https://open.spotify.com/playlist/3aAVCs17Gax0xQ8D6NNQ43?si=f453fc89a61e4a38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-600"
                >
                  <FaSpotify size={24} />
                </a>

                <a
                  href="https://www.instagram.com/mwirig.i/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-600"
                >
                  <FaInstagram size={24} />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          onKeyDown={handleKeyDown} // Add this line
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <div className="relative mb-4">
            
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
              value={name} // Add value for controlled input
              placeholder="Enter your name or company name"  // Placeholder text
              required
            />
            <p className="text-xs text-gray-400 mt-2">Please enter your full name or company name.</p> {/* Helper text */}
          </div>

          <div className="relative mb-4">
            
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              value={email} // Add value for controlled input
              placeholder="Enter your email address"  // Placeholder text
              required
            />
            <p className="text-xs text-gray-400 mt-2">Enter a valid email address so we can get in touch.</p> {/* Helper text */}
          </div>

          <div className="relative mb-4">
          
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
              value={message} // Add value for controlled input
              placeholder="Write your message here..."  // Placeholder text
              required
            />
            <p className="text-xs text-gray-400 mt-2">Please provide a detailed message for your inquiry.</p> {/* Helper text */}
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
