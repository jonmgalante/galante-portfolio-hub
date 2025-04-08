
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-sm text-gray-500">
      <div className="container">
        <p>© {currentYear} Jon Galante</p>
      </div>
    </footer>
  );
};

export default Footer;

