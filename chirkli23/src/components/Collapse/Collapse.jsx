import Link from "next/link";

const Collapse = () => {
    return(
        <section id="collapse">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="img-collapse">
                            <Link href="#">
                                <img src="https://totemstore.az/wp-content/uploads/2022/02/minisayaqqa.png" alt="" />
                                <div className="text-collapse">
                                    <h4>Shoes</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="img-collapse">
                            <Link href="#">
                                <img src="https://totemstore.az/wp-content/uploads/2022/02/hodmini.png" alt="" />
                                <div className="text-collapse">
                                    <h4>Hoodie</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="img-collapse">
                            <Link href="#">
                                <img src="https://totemstore.az/wp-content/uploads/2022/02/sviterm.png" alt="" />
                                <div className="text-collapse">
                                    <h4>Sweatshirt</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="img-collapse">
                            <Link href="#">
                                <img src="https://totemstore.az/wp-content/uploads/2022/02/tshirt.png" alt="" />
                                <div className="text-collapse">
                                    <h4>T-shirt</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="img-collapse">
                            <Link href="#">
                                <img src="https://totemstore.az/wp-content/uploads/2022/02/papaq.png" alt="" />
                                <div className="text-collapse">
                                    <h4>Hats</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="img-collapse">
                            <Link href="#">
                                <img src="https://totemstore.az/wp-content/uploads/2022/02/aks.png" alt="" />
                                <div className="text-collapse">
                                    <h4>Accessory</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Collapse;