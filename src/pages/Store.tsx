import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <div className="md:px-12 px-4 mb-10">
        <h1>Store</h1>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {storeItems.map((item) => (
            <div key={item.id}>
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
