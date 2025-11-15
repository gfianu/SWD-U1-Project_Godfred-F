function Footer() {
  let thisYear = new Date().getFullYear();
  return (
    <footer>
      <div>&copy; {thisYear} ChemLearn. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
