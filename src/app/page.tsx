type Product = {
  productId: number;
  productName: string;
  unitPrice: number;
};

export default async function Home() {
  const res = await fetch("https://apitester.ir/api/Products", {
    cache: "no-store",
  });

  const products: Product[] = await res.json();

  return (
    <main>
      <h1>سلام، دنیا!</h1>

      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            {product.productName} - {product.unitPrice}
          </li>
        ))}
      </ul>
    </main>
  );
}
