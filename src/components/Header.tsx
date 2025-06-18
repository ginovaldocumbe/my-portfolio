import { Menu, Layout } from "antd";

const Header = () => {
  const items = [
    {
      key: "about",
      label: (
        <a
          href="#about"
          className="text-white hover:text-primary transition-colors"
        >
          Sobre
        </a>
      ),
    },
    {
      key: "skills",
      label: (
        <a
          href="#skills"
          className="text-white hover:text-primary transition-colors"
        >
          Habilidades
        </a>
      ),
    },
    {
      key: "projects",
      label: (
        <a
          href="#projects"
          className="text-white hover:text-primary transition-colors"
        >
          Projectos
        </a>
      ),
    },
    {
      key: "contact",
      label: (
        <a
          href="#contact"
          className="text-white hover:text-primary transition-colors"
        >
          Contactos
        </a>
      ),
    },
  ];

  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        paddingLeft: 5,
        paddingRight: 5,
        background: "rgba(255, 255, 255, 0.2)", // Escurecido para contraste
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Elevation aqui
        backdropFilter: "blur(10px)", // efeito opcional de vidro
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <div className="flex items-center w-full">
        <a
          href="/"
          className="text-2xl font-(family-name:--font-pacifico) text-white"
        >
          GC
        </a>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["about"]}
          items={items}
          style={{
            justifyContent: "flex-end",
            width: "100%",
            backgroundColor: "transparent",
            borderBottom: "none",
          }}
        />
      </div>
    </Layout.Header>
  );
};

export default Header;
