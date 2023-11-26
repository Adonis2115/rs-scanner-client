import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
    const menuItems = [{ name: "Analyze Stock", link: "/" }, { name: "Scanner", link: "/scanner" }, { name: "Positions", link: "/positions" }]
    return (
        <Navbar>
            <NavbarBrand>
                <Link color="foreground" to="/">
                    <p className="font-bold text-inherit">RS Scanner</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} isActive={window.location.pathname == item.link ? true : false}>
                        <Link color="foreground" to={item.link}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}
