const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-6">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-56 h-64 bg-gray-200 animate-pulse rounded-lg shadow-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
