import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function NavbarComponent() {
    const menuItems = [{ name: "Analyze Stock", link: "/" }, { name: "Scanner", link: "/scanner" }, { name: "Positions", link: "/positions" }]
    return (
        <Navbar>
            <NavbarBrand>
                <Link color="foreground" href="/">
                    <p className="font-bold text-inherit">RS Scanner</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" href={item.link}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}
