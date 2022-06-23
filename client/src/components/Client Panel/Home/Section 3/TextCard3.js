import WineBarIcon from '@mui/icons-material/WineBar';

const TextCard1 = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <WineBarIcon className="text-[#c26739] mr-5 mb-2" />
          <div>
            <div className=" font-medium text-xl">No Intermediaries</div>
            <br></br>
            <div className="text-gray-600 pr-3">
            All products are directly sourced through a chain of suppliers that produce and manufacture all items locally.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard1;
