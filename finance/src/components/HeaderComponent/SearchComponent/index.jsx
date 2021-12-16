import "./styles";

import { SearchInput } from "./styles";

const SearchComponent = ({ callFunction, searchValue }) => {
  return (
    <main>
      <SearchInput
        onChange={callFunction}
        value={searchValue}
        placeholder={'Pesquisar'}
      />
    </main>
  );
};
export default SearchComponent;
