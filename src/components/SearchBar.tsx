type SearchBarProp = {
  onSubmit: React.FormEventHandler;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  refObject: React.RefObject<HTMLInputElement>;
  value: string;
};

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  refObject,
}: SearchBarProp) {
  return (
    <nav>
      <form
        className="flex bg-slate-900 text-slate-50 text-xl p-4 gap-x-2 justify-center"
        onSubmit={onSubmit}
      >
        <input
          name="query"
          className="min-w-16 bg-slate-800 border-slate-500 px-2 border-2 rounded-md"
          type="text"
          value={value}
          placeholder="키워드를 입력..."
          onChange={onChange}
          ref={refObject}
        />
        <button
          className="shrink-0 bg-cyan-600 font-bold rounded-md px-2 py-1"
          type="submit"
        >
          검색
        </button>
      </form>
    </nav>
  );
}
