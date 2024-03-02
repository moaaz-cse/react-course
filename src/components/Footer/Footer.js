import FooterClass from "./Footer.module.css";

const currYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className={FooterClass.footer}>
      <p>Copyright &copy; {currYear}</p>
    </footer>
  );
};

export default Footer;
