import { getProduct, getProductLinks } from "$lib/utils/products";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load : PageLoad = ({ params }) =>
{
  const productName = params.productName
  const product = getProduct(productName);
  const productLinks = getProductLinks(product.id)

  if(!product) throw error(400,'nooooo')

  return{
    product,
    productLinks
  }
}