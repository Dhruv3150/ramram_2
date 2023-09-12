import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({ name: "", email: "", message: "" });

  const handleInput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    console.log("hello");
  }, [data]);

  return (
    <div className="Contact">
      <main>
        <h1>Contact Us</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => handleInput(e)}
              required
              placeholder="Abc"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="Email"
              name="email"
              value={data.email}
              onChange={(e) => handleInput(e)}
              required
              placeholder="yxz@gmail.com"
            />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
              name="message"
              value={data.message}
              onChange={(e) => handleInput(e)}
              required
              placeholder="Tell us About Your Query.."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
