import "./contactUs.css";
const ContactUs = () => {
  const linkedInLogo = new URL(
    "../assets/pics/linkedin-icon.png",
    import.meta.url
  ).href;
  return (
    <div className="contactUs">
      <h1>Contact Me</h1>
      <h2>Hi Visitor! Thank you for using this app.</h2>
      <h2>
        Please let me know what you liked about this app or any suggestions.
      </h2>
      <h3>
        Let's connect:
        <a
          href="https://www.linkedin.com/in/nikharg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} alt="LinkedIn Icon" height="40px" />
        </a>
      </h3>
    </div>
  );
};
export default ContactUs;
