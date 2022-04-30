import "./HotelPage.css"
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu"
import Footer from "../FooterApp/Footer";
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import HotelPageFetch from "../../components/HotelPageFetch/HotelPageFetch"
import React from "react";

const HotelPage = () => {
    const {data, handleClickLink} = HotelPageFetch()
    return (
        <>
            <div className="hotelPage__header">
                <div className="container">
                    <HeaderMenu
                        propsStyleHeader={{
                            padding: "25px 0 25px 0"
                        }}
                        propsStyleLogo={{
                            fill: "#FFFFFF"
                        }}
                    />
                </div>
            </div>
            <section className="hotelPage">
                <div className="container">
                    <div className="section__header">
                        <TextOfHeaders text={data.name}/>
                    </div>
                    <div className="hotelPage__wrapper">
                        <div className='hotelPage__img'>
                            <img src={data.imageUrl} alt={`hotel ${data.name}`}/>
                        </div>
                        <div className='hotelPage__Info'>
                        <span className="hotelPage__Text">
                            We are glad to welcome you!
                            <br/>
                            This hotel is located in the country
                            <a href="/#" onClick={handleClickLink}>{data.country}</a> in the
                            city
                            called <a href="/#" onClick={handleClickLink}>{data.city}</a>.
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore eaque inventore iure
                            molestias neque perferendis quae quibusdam repellat soluta? Ab beatae deserunt doloribus,
                            ducimus enim eum fugit laboriosam minus neque optio provident quae, quidem, quis similique
                            sit soluta totam. Autem delectus dignissimos dolor dolorum eum harum impedit molestias nisi,
                            nulla odio pariatur quam ratione rem, saepe tempore vel vero. Aliquam ex illo ipsam
                            reiciendis rerum sint sit ullam veritatis! Ab, adipisci alias, amet aperiam culpa cum
                            doloremque dolores ducimus eum facere facilis illum magni mollitia nemo nesciunt officia
                            quas, quia quis quod rem repellendus rerum tempore ut voluptatem voluptates.
                        </span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default HotelPage;