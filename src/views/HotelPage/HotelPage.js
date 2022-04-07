import "./HotelPage.css"
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu"
import Footer from "../FooterApp/Footer";
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import HotelPageFetch from "../../components/HotelPageFetch/HotelPageFetch"

const HotelPage = () => {
    const { data, handleClickLink } = HotelPageFetch()
    return (
        <section className="hotelPage">
            <div className="headerHotelPage">
                <div className="container">
                    <HeaderMenu/>
                </div>
            </div>
            <div className="container">
                <div className="section__header">
                    <TextOfHeaders text={data.name}/>
                </div>
                <div className="hotelPageWrapper">
                    <div className='hotelPageImg'>
                        <img src={data.imageUrl} alt={`hotel ${data.name}`}/>
                    </div>
                    <div className='hotelPageInfo'>
                        <spam className="hotelPageText">
                            We are glad to welcome you!
                            <br/>
                            This hotel is located in the country <a href="/#"
                                                                    onClick={handleClickLink}>{data.country}</a> in the
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
                        </spam>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default HotelPage;