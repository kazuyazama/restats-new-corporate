import inputState from "../../stores/formState"
import { useRecoilValue } from "recoil";

const Test = () => {

    const input = useRecoilValue(inputState)

    console.log(input)

    return (
        <p>{input}</p>
    );
}

export default Test;