/* eslint-disable react-refresh/only-export-components */

const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";


export const fetchProductDetails = async (offset: number) => {
  const  response = await fetch(`${BASE_URL}/products?limit=20&offset=${offset}`);
  const detailData = await response.json();
  console.log(detailData);
} 

const ProductDetail = () => {
  return (
    <>

    </>
  )
}

export default ProductDetail