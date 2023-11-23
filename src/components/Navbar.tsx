import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function App() {
    const menuItems = ["Analyze Stock", "Scanner", "Positions"]
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">RS Scanner</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" href="#">
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}
