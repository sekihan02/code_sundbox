import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <Input placeholder="検索条件を入力してください" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};
