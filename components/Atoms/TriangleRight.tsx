type Props = {
    bgColor?:string
}

const TriangleRight = ({bgColor}:Props) => {
    return (
        <span className={`absolute lg:-translate-y-1 w-full h-32 mb-64 lg:h-64 lg:mb-64 clip-path-triangle-new-right ${bgColor}`}></span>
    );
}

export default TriangleRight;