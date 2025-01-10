import { createMarkup } from "../utils/utils";

export interface NewsItemProps {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

function NewsItem({ title, description, link, pubDate }: NewsItemProps) {
  console.log("NewsItem rendered");

  return (
    <a
      className="news-item flex flex-col m-4 p-4 max-w-prose rounded-md border-2 border-slate-200 justify-center transition-all ease-in duration-100 hover:bg-slate-100 hover:scale-105 cursor-pointer"
      target="_blank"
      href={link}
    >
      <p
        className="text-xl font-bold"
        dangerouslySetInnerHTML={createMarkup(title)}
      ></p>
      <p className="text-sm text-right mb-1">
        {new Date(pubDate).toLocaleString()}
      </p>
      <p
        className="mb-1"
        dangerouslySetInnerHTML={createMarkup(description)}
      ></p>
    </a>
  );
}

// export default memo(NewsItem);
export default NewsItem;
