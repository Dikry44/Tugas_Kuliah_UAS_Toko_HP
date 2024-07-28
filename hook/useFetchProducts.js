// hooks/useFetchProducts.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/productSlice';

const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://www.phoneradar.com/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((data) => {
        const products = data.map(item => ({
          id: item.id,
          name: item.title.rendered,
          status: item.status,
          content: item.content.rendered,
          image: item.jetpack_featured_media_url,
        }));
        dispatch(setProducts(products));
      })
      .catch(error => { console.log(error); });
  }, [dispatch]);
};

export default useFetchProducts;
