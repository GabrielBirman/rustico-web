const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container text-center">
        <p className="font-display text-xl font-bold mb-2">
          Rústico <span className="text-primary">&</span> Casero
        </p>
        <p className="font-body text-sm text-background/60">
          Prepizzas artesanales · Buenos Aires, Argentina
        </p>
        <p className="font-body text-xs text-background/40 mt-4">
          © {new Date().getFullYear()} Rústico y Casero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
