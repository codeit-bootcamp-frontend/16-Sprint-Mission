import { useState } from "react";
import Input from "../components/common/Input";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Button from "../components/common/Button/Button";
import ImageUpload from "../components/common/ImageUpload";
import deleteIcon from "../assets/ic_X.png";

function AddItem() {
  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  // 모든 텍스트 필드가 채워졌고, 태그가 1개 이상 있는지 확인
  const isFormValid =
    [itemName, description, price].every((field) => field.trim() !== "") &&
    tags.length > 0;

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div
      className="
      w-full 
    "
    >
      <div>
        <Header
          leftChild={
            <Link to="/">
              <div className="flex items-center">
                <img
                  src="/src/assets/Logo.jpg"
                  alt="Logo"
                  className="w-[81px] h-10 object-contain md:w-[153px] md:h-[51px]"
                />
                <Nav />
              </div>
            </Link>
          }
          rightChild={
            <img src="/src/assets/ProfileIcon.jpg" alt="Profile Icon" />
          }
        />
      </div>

      <div
        className="
      flex flex-col max-w-[346px]
      mx-auto px-4 my-6
      md:max-w-[696px] md:px-6
      lg:max-w-[1200px] lg:px-0
    "
      >
        <div
          className="
        flex items-center justify-between
        mb-6
      "
        >
          <h1 className="text-xl font-semibold mb-2">상품등록하기</h1>
          <Button
            variant={isFormValid ? "primary" : "inactive"}
            text="등록"
            disabled={!isFormValid}
          />
        </div>

        <div className="space-y-4">
          <div>
            {/* ImageUpload는 상태만 업데이트하고, 버튼 활성화에는 영향을 주지 않습니다. */}
            <ImageUpload onImageChange={setImage} />
          </div>

          <div>
            <h2 className="text-lg font-medium">상품명</h2>
            <Input
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="상품명을 입력해주세요"
            />
          </div>

          <div>
            <h2 className="text-lg font-medium">상품 소개</h2>
            <Input
              type="textarea"
              placeholder="상품 소개를 입력해주세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-lg font-medium">판매 가격</h2>
            <Input
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-lg font-medium">태그</h2>
            <Input
              placeholder="태그를 입력해주세요"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(index)}
                    className="text-blue-9 hover:text-blue-11 font-bold"
                  >
                    <img src={deleteIcon} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
