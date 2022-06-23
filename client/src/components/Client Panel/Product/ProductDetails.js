import React, {useState, useEffect}from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom';

function ProductDetails() {

  let { id } = useParams();
  console.log(id)

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/shopProducts/findOne/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {setData(json['results'])
        console.log(data)})
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => (
          <h1>
            {user.title} {user.price}
          </h1>
        ))
      )}
    </div>
  );

}

export default ProductDetails
