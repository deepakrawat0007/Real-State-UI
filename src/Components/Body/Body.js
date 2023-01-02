import React from "react";
import Header from "../Header/Header";
import SimpleImageSlider from "react-simple-image-slider";
import "./body.css"
import Footer from "../Footer/footer";


const Body = () => {
  const Plotimages = [{ url: "https://5.imimg.com/data5/JO/OO/QC/ANDROID-63150107/product-jpeg-500x500.jpg" }
    , { url: "https://www.plotsinnoida.com/images/plots-jewar-airport.jpg" },
  { url: "https://is1-2.housingcdn.com/01c16c28/b6a53fcef31f9cd4dbd5b2f1ed54ee56/v0/fs/residential_plot-for-sale-jewar-Greater+Noida-plot_view.jpg" },
  { url: "https://static.toiimg.com/thumb/msid-85888706,width-1280,height-720,resizemode-4/.jpg" }]

  const Comimages = [{ url: "https://www.gaurcity2.com/resale/media/front/img/project-image/16081120881469.jpg" }, { url: "https://www.commercialproperty.review/wp-content/uploads/2017/09/pks-town-central-may2022.jpg" }, { url: "https://cityspideynews.s3.amazonaws.com/uploads/spidey/202107/fusion-homes-1627383244.jpg" }, { url: "https://5.imimg.com/data5/HD/NN/LN/ANDROID-82982064/product-jpeg-500x500.jpg" }]

  const BFimages = [{ url: "https://newprojects.99acres.com/projects/satyam_real_build/satyam_paradise/images/6nvn1mjf_large.jpg" }, { url: "https://i.ytimg.com/vi/ySrKr4zCI3Q/maxresdefault.jpg" }, { url: "https://is1-3.housingcdn.com/d9dd8fcc/51057f3144269e8e6fc1224ab7fd70a6/v0/medium.jpg" }]
  return (
    <>
      <Header />
      <div className="body-wrapper">
        <p>Find Property Designated For U!!</p>
        <div className="plots">
          <h3>Plots Near Jewar Airport</h3>
          <SimpleImageSlider
            width={"90%"}
            height={250}
            images={Plotimages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={2.0}
          />
        </div>

        <div className="residents">
          <h3>Residential 2/3/4 BHK Builder Floor</h3>
          <SimpleImageSlider
            width={"90%"}
            height={250}
            images={BFimages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={2.0}
          />
        </div>

        <div className="comm">
          <h3>Commercial Shops @ Mall / Socities nd Builder Floor</h3>
          <SimpleImageSlider
            width={"90%"}
            height={250}
            images={Comimages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={2.0}
          />
        </div>
      </div>
<Footer/>
    </>
  )

}

export default Body