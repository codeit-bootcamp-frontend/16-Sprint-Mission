/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import Textarea from "@/components/ui/Textarea";
import FormControl from "@/components/ui/Form/FormControl";
import FormLabel from "@/components/ui/Form/FormLabel";
import useForm from "@/hooks/useForm";
import Button from "@/components/ui/Button";
import CommentList from "@/components/CommentList";
import { BREAKPOINTS } from "@/constants/responsive";

const ProductComments = ({ productId }) => {
  const formRef = useRef(null);
  const { handleBlur, isFormValid } = useForm(formRef);

  return (
    <section css={ProductCommentsStyle}>
      <form className="comment-form" ref={formRef}>
        <FormControl>
          <FormLabel size="xs" inputId="productCmt">
            문의하기
          </FormLabel>
          <Textarea
            id="productCmt"
            name="description"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onBlur={handleBlur}
            maxheight={104}
          />
        </FormControl>
        <Button
          size="sm"
          variant="primary"
          disabled={!isFormValid}
          type="submit"
          className="btn-submit"
        >
          등록
        </Button>
      </form>

      <CommentList productId={productId} />
    </section>
  );
};

export default ProductComments;

const ProductCommentsStyle = css`
  .comment-container {
    position: relative;
  }

  .comment-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      margin-bottom: 24px;
    }

    .btn-submit {
      margin-left: auto;
    }
  }
`;
