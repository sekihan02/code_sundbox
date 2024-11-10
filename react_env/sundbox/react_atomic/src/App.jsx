import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organaisms/user/UserCord";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import "./styles.css";

const user = {
  name: "profile",
  image: "./image/ex1.png",
  feature1: "aiueo",
  feature2: "kjakikukeko",
  feature3: "sasisuseso",
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>test</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
