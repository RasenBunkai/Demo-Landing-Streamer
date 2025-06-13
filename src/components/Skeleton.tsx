export function ClipSkeleton() {
    return (
      <div className="w-96 h-60 mx-auto rounded-lg overflow-hidden bg-gray-800/50 border border-purple-900/30">
        <div className="relative h-full">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse">
            <svg
              className="w-12 h-12 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="h-4 bg-gray-700 rounded-full w-3/4 mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-700 rounded-full w-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
    }