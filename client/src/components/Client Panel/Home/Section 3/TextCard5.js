import Button from "../../Common/Button";

const TextCard1 = () => {
  return (
    <div>
      <div>
      <div className="grid grid-flow-col grid-cols-2 gap-0">
          <div className="text-gray-800 py-3 italic ">
            Join our family of wine lovers and be the first to tast...
          </div>
          <div className=" justify-self-end">
            <Button name="get to know" path="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard1;
