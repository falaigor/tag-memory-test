export function Loading() {
  return (
    <div data-testid="loading">
      <div className="flex animate-pulse p-4 mt-4 rounded-t-2xl justify-between border-2 border-gray-300 items-center">
        <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
      </div>

      <div className="flex flex-col animate-pulse justify-between border-t-0 border-b-2 border-x-2 border-gray-300">
        <li className="flex sm:flex-row items-center justify-between p-4">
          <div className="w-auto flex items-center">
            <div className="w-[50px] mx-4 h-[50px] bg-gray-300 rounded-md "></div>

            <div className="w-12bg-gray-300 h-12 rounded-full "></div>

            <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
          </div>

          <div className="w-auto flex flex-col sm:flex-row items-center justify-center">
            <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
          </div>
        </li>
      </div>
    </div>
  );
}
