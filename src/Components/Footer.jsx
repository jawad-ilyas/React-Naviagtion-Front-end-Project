import React from 'react'
import Wrapper from '../HighOrderFunction/Wrapper'
import Menu from './Menu';
const menu1 = [
    { link: "/", text: "Getting Started", icon: false },
    { link: "/", text: "Building your own Navigator", icon: false },
    { link: "/", text: "Contributing", icon: false }
];

const menu2 = [
    { link: "/", text: "Chat in our Discord channel", icon: true },
    { link: "/", text: "Get help on Stack Overflow", icon: true },
    { link: "/", text: "Request a feature on Canny", icon: true },
    { link: "/", text: "Report a bug on GitHub", icon: true }
];

const menu3 = [
    { link: "/", text: "Blog", icon: false },
    { link: "/", text: "GitHub", icon: true },
    { link: "/", text: "Twitter", icon: true }
];

const menu4 = [
    { link: "/", text: "Docusaurus", icon: false },
    { link: "/", text: "GitHub Pages", icon: true },
    { link: "/", text: "Netlify", icon: true }
];

function Footer() {
    return (
        <div className='grid md:grid-cols-4'>
            <Menu title="Docs" data={menu1} hoverColor="hover:text-bgColor" icon={false} />
            <Menu title="Support" data={menu2} hoverColor="hover:text-bgColor" icon={true} />
            <Menu title="Social" data={menu3} hoverColor="hover:text-bgColor" icon={false} />
            <Menu title="Built with" data={menu4} hoverColor="hover:text-bgColor" icon={false} />

        </div>
    )
}

export default Wrapper(Footer, "bg-myBlack", "md:px-20", "md:py-8")