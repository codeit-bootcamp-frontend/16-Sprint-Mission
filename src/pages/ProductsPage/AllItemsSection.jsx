const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    //mobile
    return 4;
  } else if (width < 1280) {
    //tablet
    return 6;
  } else {
    //desktop
    return 10;
  }
};

function AllItemsSection() {
  return;
}

export default AllItemsSection;
