// 상품추가 페이지 폼 입력 필드 컴포넌트
function FormField({ label, children }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {children}
    </div>
  );
}

export default FormField;
