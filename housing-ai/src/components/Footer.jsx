function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 md:py-6 border-t mt-8 sm:mt-10">
      <p className="text-gray-500 text-sm sm:text-base">
        © {new Date().getFullYear()} Housing AI — Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
