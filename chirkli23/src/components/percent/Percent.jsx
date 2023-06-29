import Link from "next/link";

const Percent = () => {
  return (
    <section id="percent">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6">
            <div className="row">
            <div className="col-lg-12">
                <div className="percent-img">
                  <Link href="#">
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b2cf0d150390965.62fd2667b58b6.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-12">
                <div style={{height:"295px"}} className="percent-img">
                  <Link href="#">
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7d72f0168686031.643ef411c1764.png"
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
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/169562109620915.60415e365681a.png"
              />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="row g-3">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 pb-2">
                <div className="blue">
                 
                </div>
              </div>
              <div className="col-lg-12 pt-3">
                <div className="orange">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pink">
              
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Percent;
