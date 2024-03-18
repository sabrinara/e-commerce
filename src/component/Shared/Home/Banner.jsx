

const Banner = () => {
    return (
        <div>
               <div className="hero" style={{ height:'80vh',backgroundImage: 'url(https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg)' }}>
            <div className="hero-overlay opacity-60"></div>
            <div className="hero-content text-center  ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome <br /></h1>
                    <p className=" text-lg font-bold">Technology is best when it brings people together...</p>
                    <br /> 
                    <p className="text-sm font-mono">In our website you can explore events you like to arrange. Our team will support you to manage events manually & technically.</p>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;