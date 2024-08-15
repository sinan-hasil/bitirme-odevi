/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useParams } from "react-router-dom";

const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";

interface DetailType{
  id: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchProductDetail  = async ({params}: any) => {
  const response = await fetch(`${BASE_URL}/products?limit=20&offset=0/${params.id}`);
  //console.log(response)
  const detailData = await response.json();
  //console.log(params)
  console.log(detailData);
  return detailData.data.results;
}

const ProductDetail = () => {
  const detailDataMap = useLoaderData() as DetailType[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {id} = useParams();
  return (
    <>
      {detailDataMap}
    </>
  )
}

export default ProductDetail