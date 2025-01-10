import { useRef, useState } from "react";
import SearchBar from "./components/SearchBar";
import useStorage from "./hooks/useStorage";
import NewsList, { NewsListProps as NewsResponse } from "./components/NewsList";
import { NewsItemProps } from "./components/NewsItem";

const handleQuery = async (
  query: string,
  display: number = 10,
  sort: "sim" | "date" = "sim",
) => {
  if (!query) {
    throw new Error("검색어를 입력하세요!");
  }
  const queryEncoded = encodeURI(query);
  const URL = `/api/news?query=${queryEncoded}&display=${display}&sort=${sort}`;
  const headers = new Headers({
    "X-Naver-Client-Id": import.meta.env.VITE_CLIENT_ID,
    "X-Naver-Client-Secret": import.meta.env.VITE_CLIENT_SECRET,
  });
  const req = new Request(URL, {
    headers: headers,
  });

  const res = await fetch(req);
  if (!res.ok) {
    const error = await res.json();
    if (error.errorMessage && error.errorCode) {
      throw new Error(`${error.errorMessage} (${error.errorCode})`);
    } else {
      throw new Error("Unknown error");
    }
  }

  return (await res.json()).items as NewsItemProps[];
};

export default function App() {
  const [queryValue, setQueryValue] = useState("");
  const [newsResponse, setNewsResponse] = useState<NewsResponse>(
    {} as NewsResponse,
  );
  const searchBox = useRef<HTMLInputElement>(null);
  const [storageItem, setStorageItem] = useStorage(
    "news-list",
    newsResponse,
    sessionStorage,
  );

  const handleQuerySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newsResponse: NewsResponse;
    handleQuery(queryValue)
      .then((items) => {
        newsResponse = {
          items: items,
          error: null,
        };
      })
      .catch((err: Error) => {
        newsResponse = {
          items: null,
          error: err,
        };
      })
      .finally(() => {
        setNewsResponse(newsResponse);
        setStorageItem(newsResponse);
        searchBox.current?.blur();
      });
  };

  return (
    <>
      <SearchBar
        value={queryValue}
        onChange={(e) => setQueryValue(e.currentTarget.value)}
        onSubmit={handleQuerySubmit}
        refObject={searchBox}
      />
      <NewsList
        items={storageItem.items ? storageItem.items : newsResponse.items}
        error={newsResponse.error}
      />
    </>
  );
}
