export const ShowMoreButton = ({
  visibleCount,
  filteredTodos,
  setVisibleCount,
}: {
  visibleCount: number;
  filteredTodos: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      {visibleCount < filteredTodos && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setVisibleCount((prev) => prev + 10)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};
