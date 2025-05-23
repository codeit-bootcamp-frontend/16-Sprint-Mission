import PageContent from "../ui/Layout/PageContent";
import ItemList from "../components/ItemList";
import BestItemList from "../components/ItemList/BestItemList";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { BEST_ITEMS_TITLE, ALL_ITEMS_TITLE } from "../constants/titles";
import {
  BREAKPOINTS,
  BEST_ITEMS_PAGESIZE,
  ALL_ITEMS_PAGESIZE,
} from "../constants/responsive";

const ItemsPage = () => {
  const { width } = useWindowDimensions();

  return (
    <PageContent>
      <BestItemList
        title={BEST_ITEMS_TITLE}
        pageSize={
          width >= BREAKPOINTS.desktop
            ? BEST_ITEMS_PAGESIZE.desktop
            : width >= BREAKPOINTS.tablet
            ? BEST_ITEMS_PAGESIZE.tablet
            : BEST_ITEMS_PAGESIZE.mobile
        }
      />
      <ItemList
        title={ALL_ITEMS_TITLE}
        pageSize={
          width >= BREAKPOINTS.desktop
            ? ALL_ITEMS_PAGESIZE.desktop
            : width >= BREAKPOINTS.tablet
            ? ALL_ITEMS_PAGESIZE.tablet
            : ALL_ITEMS_PAGESIZE.mobile
        }
      />
    </PageContent>
  );
};

export default ItemsPage;
