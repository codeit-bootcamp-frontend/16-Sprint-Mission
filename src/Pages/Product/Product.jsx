
import { useParams } from "react-router-dom"
import { getItems } from  '../../api/ProductApi.jsx'
import useFetch from '../../hooks/useFetch.js'

import Nav from "../../components/Nav/Nav"
import Content from "../../components/Content/Content.jsx"
import Button from "../../components/Button/Button.jsx"
import ProductDetail from "../../components/ProductLIst/ProductDetail.jsx"
import Loading from "../../components/Loading/Loading.jsx"
import TextInput from "../../components/Form/TextInput.jsx"
import CommentList from "../../components/Comments/CommentList.jsx"
import styles from './Product.module.css'




function Product () {
  const { id } = useParams()
  const { isLoading, error, result: info} = useFetch(getItems,id)

  console.log(info)

  if (isLoading || !info) { 
    return <Loading />;
  }
  return (
    <>
      <Nav />
        <Content>
        <ProductDetail info={info}/>
        <TextInput />
        <CommentList id={id}/>
        <div className={styles.button}>
        <Button href={'/'} buttonText={<>목록으로 돌아가기</>}
        type="button" disabled={false} className={'round'}/>
        </div>
      </Content>
    </>
  )
}

export default Product