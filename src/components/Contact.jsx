import React, { useRef, useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_diqvl5m", // Your Service ID
        "template_forlz2b", // Your Template ID
        form.current,
        "wJ_4gnMItiYok-T64" // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="py-16 px-6 bg-transparent text-white text-center text-white"
      id="contact"
    >
      <h2 className="text-4xl font-bold mb-6 gradient-text">Contact Me</h2>
      <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
        Feel free to reach out via email or LinkedIn for any opportunities or
        collaborations!
      </p>

      {/* Contact Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
        <a
          href="mailto:akhil.uf01@gmail.com"
          className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
        >
          <FaEnvelope size={28} className="text-red-500" />
          akhil.uf01@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/akhil-uf01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
        >
          <FaLinkedin size={28} className="text-blue-600" />
          linkedin.com/in/akhil-uf01
        </a>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-[#11182f] p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name" // ✅ MATCHES your template
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email" // ✅ MATCHES your template
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded bg-white text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
        >
          <FaEnvelope size={20} /> Send Message
        </button>
        {isSent && (
          <p className="text-green-400 mt-4">✅ Message sent successfully!</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
