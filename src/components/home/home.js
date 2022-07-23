import './home.css'


export default function BasicExample() {
  return (
    <>
    <section className="section home-5-bg" id="home">
    <div id="particles-js"></div>
    <div className="bg-overlay"></div>
    <div className="home-center">
        <div className="home-desc-center">
            <div className="container">
                <div className="justify-content-center row">
                    <div className="col-lg-7">
                        <div className="mt-40 text-center home-5-content">
                            <div className="home-icon mb-4"><i className="mdi mdi-pinwheel mdi-spin text-white h1"></i></div>
                            <h1 className="text-white font-weight-normal home-5-title mb-0">Our data never sleeps</h1>
                            <p className="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
                            {/* <div className="mt-5">
                                <input className="btn btn-default" type="button" value="Get started" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  );
}
