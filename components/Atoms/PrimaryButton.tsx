const PrimaryButton = () => {
    return (
        <a
        className="group relative inline-block overflow-hidden border border-secondary px-10 py-3 focus:outline-none focus:ring"
        href="/download"
      >
        <span className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full group-active:bg-indigo-500"></span>

        <span className="relative text-sm font-medium text-secondary transition-colors group-hover:text-white">
          more
        </span>
      </a>
    );
}

export default PrimaryButton;