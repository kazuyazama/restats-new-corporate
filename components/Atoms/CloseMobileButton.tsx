

const CloseMobileButton = ({toggleDrawer}:{toggleDrawer:() => void}) => {
    return (
        <button
        type="button"
        className="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-3 py-1 text-2xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={toggleDrawer}
        >
        ×
        </button>
    );
}

export default CloseMobileButton;