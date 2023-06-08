import Link from "next/link";

const Percent = () => {
  return (
    <section id="percent">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 pb-2">
                <div className="percent-img">
                  <Link href="#">
                    <img
                      src="https://demo.templatetrend.com/magento/MAG666/pub/static/version1560839252/frontend/Ortho/euforia/en_US/images/banners/sub-banner1.jpg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-12 pt-3">
                <div className="percent-img">
                  <Link href="#">
                    <img
                      src="https://demo.templatetrend.com/magento/MAG666/pub/static/version1560839252/frontend/Ortho/euforia/en_US/images/banners/sub-banner2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="percent-img">
              <Link href="#">
              <img
                src="https://demo.templatetrend.com/magento/MAG666/pub/static/version1560839252/frontend/Ortho/euforia/en_US/images/banners/sub-banner3.jpg"
                alt=""
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Percent;
