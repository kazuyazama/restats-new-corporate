
type Props = {
    bgColor?:string
}

const TriangleLeft = ({bgColor}:Props) => {
    return (
        <span className={`absolute lg:translate-y-1 w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-new-left ${bgColor}`}></span>
    );
}

export default TriangleLeft;