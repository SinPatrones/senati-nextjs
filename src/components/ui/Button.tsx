interface IProps {
  text: string,
  onClick: () => void
}

const Button = ({text, onClick}: IProps) => {

  return (
    <button className="bg-[#000000] text-white px-4 py-2 m-5 rounded-[14px]" onClick={() => onClick()}>
      {text}
    </button>
  )
};

export {Button};