import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link} from 'react-router-dom';

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    useEffect(() => {
        axios.get(`/search?query=${encodeURIComponent(query)}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    }, [query]);

  return(
    <div className="">
        {/* <div><Categorybar/></div> */}
        <ul className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            {products.map((product) =>(
                <li>
                    <div className=" p-3 items-center border border-gray-300 rounded-2xl shadow-lg ">
                        <Link to={'/product/'+ product._id}>
                            <img 
                            src={"http://localhost:4000/uploads/"+ product.photos?.[0]} 
                            alt="camera" 
                            style={{height: '250px'}} 
                            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] object-cover " />
                        </Link>
                        <span className="font-poppins text-3xl">{product.name}</span>
                        <br />
                        <span className="font-poppins">Rs <span className="font-poppins text-2xl text-[#30d5c8]">{product.price}</span> per Day</span>

                        <p className="text-gray-500 text-hover-black"><Link to={'/product/'+ product._id}>More info...</Link></p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
)
}

export default SearchResults