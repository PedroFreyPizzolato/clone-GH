function NavbarItem({ href, photo, name }) {
    return (
        <li>
            <a href={href}>
                <img src={photo} alt={name} />
                <p>{name}</p>
            </a>
        </li>
    )
}

export default NavbarItem