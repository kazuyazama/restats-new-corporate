const ArrowButton = () => {
    return (
        <a
          className="inline-block rounded-full border border-secondary p-3 text-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring active:bg-accent"
          href="/download"
        >
          <span className="sr-only"> Download </span>

          <svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
    );
}

export default ArrowButton;