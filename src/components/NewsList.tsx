import { memo } from "react";
import NewsItem, { NewsItemProps } from "./NewsItem";

export interface NewsListProps {
  items: NewsItemProps[] | null;
  error: Error | null;
}

function NewsList({ items, error }: NewsListProps) {
  return (
    <main className="container mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center place-items-stretch transition-all duration-100 ease-out">
      {error && (
        <p className="text-xl text-red-950 font-bold bg-red-200 p-2 rounded-md mt-4 col-span-full">
          {error.message}
        </p>
      )}
      {items &&
        items.map((item, index) => (
          <NewsItem key={item.pubDate + index.toString()} {...item} />
        ))}
    </main>
  );
}

export default memo(NewsList);
// export default NewsList;
