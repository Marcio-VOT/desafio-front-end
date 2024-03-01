import logo from "../../assets/logo.jpg"
import { HeaderStyle, Logo } from "./HeaderStyle"
export default function Header(){
  return (
    <HeaderStyle>
      <Logo src={logo} alt="logo" />
    </HeaderStyle>
  )
}
