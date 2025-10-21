import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // Success/failure message

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Send POST request to Railway backend
      const response = await axios.post(
        "https://backendport-production-a8b1.up.railway.app/api/contact",
        form
      );

      if (response.data?.message) {
        // Show success message
        setStatus(response.data.message);
        // Clear the form
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Message sent, but no confirmation received.");
      }
    } catch (err) {
      console.error("Error sending message:", err.response ? err.response.data : err);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Get in touch via form or social media</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status message */}
        {status && (
          <p
            className="status-message"
            style={{ color: status.includes("Failed") ? "red" : "green", marginTop: "10px" }}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
