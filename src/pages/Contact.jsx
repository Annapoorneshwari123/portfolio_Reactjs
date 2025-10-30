import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get existing messages from localStorage or empty array
    const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    // Add the new message
    messages.push(formData);
    // Store updated array in localStorage
    localStorage.setItem("contactMessages", JSON.stringify(messages));
    // Clear the form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message saved locally!");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#ECF0F1]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#2C3E50] tracking-wide">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-[#34495E] mx-auto mb-4 rounded"></div>
        <p className="text-[#7F8C8D] mb-12 text-lg">
          Ready to collaborate? Let's discuss your next project
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-[#F8F9FA] border border-[#D6DBDF] rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 bg-[#D6DBDF] rounded-full">
                <Mail className="w-5 h-5 text-[#2C3E50]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#2C3E50]">Email</h4>
                <p className="text-[#34495E]">annapoornaparipoorna@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 bg-[#D6DBDF] rounded-full">
                <Phone className="w-5 h-5 text-[#2C3E50]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#2C3E50]">Phone</h4>
                <p className="text-[#34495E]">+91 9900379635</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#D6DBDF] rounded-full">
                <MapPin className="w-5 h-5 text-[#2C3E50]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#2C3E50]">Location</h4>
                <p className="text-[#34495E]">Bengaluru, India</p>
              </div>
            </div>

            <hr className="my-6 border-[#D6DBDF]" />

            {/* Socials */}
            <h4 className="font-semibold mb-3 text-[#2C3E50]">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-[#D6DBDF] hover:bg-[#34495E] hover:text-white rounded-full transition-colors"
              >
                <Github className="w-5 h-5 text-[#2C3E50] hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-[#D6DBDF] hover:bg-[#34495E] hover:text-white rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#2C3E50] hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="bg-[#F8F9FA] border border-[#D6DBDF] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
              Send Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-[#D6DBDF] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#34495E]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-[#D6DBDF] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#34495E]"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-[#D6DBDF] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#34495E]"
                required
              />
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-[#D6DBDF] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#34495E]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#2C3E50] text-white font-semibold py-3 rounded-md hover:bg-[#34495E] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
