enum NavbarLink {
    Art = "/art",
    Community = "/community",
    Magazine = "/magazine",
    Shop = "/shop",
}

type NavbarLinkType = keyof typeof NavbarLink;

type Navbar = {
    name: string;
    url: NavbarLink;
};


const NavbarData:Navbar[] = [
    { name: "Art", url: NavbarLink.Art },
    { name: "Community", url: NavbarLink.Community },
    { name: "Magazine", url: NavbarLink.Magazine },
    { name: "Shop", url: NavbarLink.Shop },
];


export {
    NavbarData
};

export type { Navbar };
