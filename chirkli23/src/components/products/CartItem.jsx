import Link from "next/link";

const CartItem = ({ item }) => {
  const { id, title, price, img, amount } = item;
  return (
    <div className="carts">
      <div className="img">
        <Link href="#">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="content">
        <Link href="#">{title}</Link>
      </div>
    </div>
  );
};
export default CartItem;
