export default function SearchBar() {
  return (
    <div className="w-full max-w-xl flex relative">
      <input
        type="text"
        className="w-full bg-white h-12 rounded-full pl-12 pr-36 text-gray-700 placeholder-gray-400 text-lg focus:outline-none shadow-md"
        placeholder="Search recipes..."
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999'><path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '14px center',
          backgroundSize: '22px 22px',
        }}
      />
      <button className="bg-emerald-500 px-4 rounded-full text-white absolute right-1 top-1/2 -translate-y-1/2 h-10 w-32 font-semibold shadow-md hover:bg-emerald-600 transition cursor-pointer">
        Search
      </button>
    </div>
  );
}
