import DeleteImg from '../../assets/input/delete.svg'

import { useState } from "react";

import Nav from "../../components/Nav/Nav";
import Content from "../../components/Content/Content";
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import FormImg from "../../components/Form/FormImg";
import FormInput from "../../components/Form/FormInput";

import styles from './AddItem.module.css';

const INITIAL_VALUES = {
  name: '',
  description: '',
  price: '',
  tags:[],
  tagInput:'',
  images: null,
};


function AddItem() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [isComposing, setIsComposing] = useState(false);

 const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' && !isComposing) {
      e.preventDefault(); 

      const newTag = values.tagInput.trim();

      if (newTag !== '') {

        if (!values.tags.includes(`#${newTag}`)) {
          setValues((prev) => ({
            ...prev,
            tags: [...prev.tags, `#${newTag}`],
            tagInput:'',
          })) 
        } else {
          setValues((prev) => ({
            ...prev,
            tagInput:'',
          }))
        }
      }}
  };

  
  const handleRemoveTag = (tagToRemove) => {
    setValues((prevValues) => ({
      ...prevValues,
      tags: prevValues.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

   const handleCompositionStart = () => {
    setIsComposing(true);
  };

  
  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const isSubmitDisabled = !values.name || !values.description || values.price <= 0 || !values.images;

  return(
    <>
    <Nav />
    <Content>
      <form className={styles.form}>
        <div className={styles.headers}>
          <Header type={'h1'} text={'상품 등록하기'}/>
          <Button type={'submit'} href={'#'} buttonText={'등록'} disabled={isSubmitDisabled}/>
        </div>
        <FormImg label={'상품 이미지'} name="images" value={values.images}
        initialPreview={''} onChange={handleChange}/>
        <FormInput  
          label={'상품명'}
          name="name" 
          type={'text'}
          placeholder={'상품명을 입력해주세요'}
          value={values.name}            
          onChange={handleChange} />
        <FormInput
          label={'상품 소개'}
          name="description" 
          type={'textarea'}
          placeholder={'상품 소개를 입력해주세요'}
          value={values.description}
          onChange={handleChange} />
        <FormInput
          label={'판매가격'}
          name="price" 
          type={'number'}
          placeholder={'판매 가격을 입력해주세요'}
          value={values.price}
          onChange={handleChange} />
        <FormInput
            label={'태그'}
            name="tagInput" 
            type={'text'}
            placeholder={'태그를 입력해주세요'}
            value={values.tagInput}
            onChange={handleChange}
            onKeyDown={handleTagInputKeyDown} 
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}

          />
          {values.tags.length > 0 && (
            <div className={styles.taglistContainer}>
              {values.tags.map((tag, index) => (
                <div key={index} className={styles.tagItem}>
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className={styles.removeTagButton}
                  >
                    <img src={DeleteImg} alt="선택해제" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </form>
      </Content>
    </>
  );
}

export default AddItem