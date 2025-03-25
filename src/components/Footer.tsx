
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const version = "1.0.0";

  return (
    <footer className="py-8 text-sm text-gray-500">
      <div className="container">
        <p>© {currentYear} Jon Galante | v{version}</p>
      </div>
    </footer>
  );
};

export default Footer;
