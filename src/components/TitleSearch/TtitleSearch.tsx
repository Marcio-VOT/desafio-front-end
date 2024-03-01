import searchIcon from "../../assets/search.svg";
import { TitleSearchStyle, InputContainer } from "./TtitleSearchStyle";

export default function TitleSearch({title, search, setSearch}: {title: string, search: string, setSearch: (search: string) => void }) {
  return (
    <TitleSearchStyle>
    <h1> {title} </h1>
    <InputContainer>
    <input type="text" 
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Pesquisar"
    />
    <img src={searchIcon} alt="search" />
    </InputContainer>
    </TitleSearchStyle>
  )
}

