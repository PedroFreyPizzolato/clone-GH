import NavbarItem from './NavbarItem'

import PastorAlemao from '../assets/imagens/pa-001.png'
import GoldenRetriever from '../assets/imagens/gr-001.png'
import Rottweiler from '../assets/imagens/rw-001.png'

function Navbar() {
    return (
        <nav>
            <ul>
                <NavbarItem href="pastor-alemao.html" photo={PastorAlemao} name="Pastor Alemão" />
                <NavbarItem href="golden-retriever.html" photo={GoldenRetriever} name="Golden Retriever" />
                <NavbarItem href="rottweiler.html" photo={Rottweiler} name="Rottweiler" />
            </ul>
        </nav>
    )
}

export default Navbar