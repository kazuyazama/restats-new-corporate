
type Props = {
    title:string;
    discription:string;
}

const Card = ({title,discription}:Props) => {
    return (
        <a href="#" className="block">
        <img
          alt="Art"
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="h-96 w-full object-cover"
        />

        <h3 className="mt-4 text-xl font-bold text-gray-900">
        {title}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">
          {discription}
        </p>
      </a>
    );
}

export default Card;