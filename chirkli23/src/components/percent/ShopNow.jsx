import Link from "next/link";


const ShopNow = () => {
    return(
        <section id="shop">
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-9">
                        <div className="shop-style">
                            <div className="img">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e3ec4a163460915.63e60f8ab7d88.png" alt="" />
                            </div>
                            <div className="title">
                                <h3>Express your</h3>
                                <h4>Smart style</h4>
                                <p>Shop the selection of clothes</p>
                                <Link href="#">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="emailsend">
                            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti nisi quasi!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopNow;