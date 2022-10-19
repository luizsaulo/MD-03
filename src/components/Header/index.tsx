import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from '../../assets/logo-ignite.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt='' />
                <button>Nova transação</button>
            </HeaderContent>
        </HeaderContainer>
    )
}