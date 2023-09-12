import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <main>
        <h1>Contact Us</h1>

        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abc" />
          </div>

          <div>
            <label>Email</label>
            <input type="Email" required placeholder="yxz@gmail.com" />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
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
