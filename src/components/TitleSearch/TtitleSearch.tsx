import { useSearchParams } from "react-router-dom";
import searchIcon from "../../assets/search.svg";
import { TitleSearchStyle, InputContainer } from "./TtitleSearchStyle";
import { useState } from "react";

export default function TitleSearch({ title }: { title: string }) {
  const [searchParams, _setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [inputText, setInputText] = useState<string>(search || "");

  return (
    <TitleSearchStyle>
      <h1> {title} </h1>
      <InputContainer>
        <input
          type="text"
          placeholder="Pesquisar"
          value={inputText}
          onChange={e => {
            setInputText(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              _setSearchParams({ search: inputText });
            }
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            _setSearchParams({ search: inputText });
          }}
        />
      </InputContainer>
    </TitleSearchStyle>
  );
}
