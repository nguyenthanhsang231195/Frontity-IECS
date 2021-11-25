import React from "react";
import { connect } from "frontity";

import Carousel from 'react-bootstrap/Carousel';

import AboutIECS from "../AboutIECS";
import CustomerIECS from "../CustomerIECS";
import ServieIECS from "../ServieIECS";
import TraininghRoute from "../TraininghRoute";
import WhyIECS from "../WhyIECS";

import Image from "@frontity/components/image";
import ImageI from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/IECS-Banner.jpg";
import ImageII from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/banner-WEb_tiengducB1.jpg";
import ImageIII from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/banner-Web_duhocnghe.jpg";
import ImageIV from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/banner-web-lidochonIECS-2.jpg";

const HomeScreen = () => {
    return(
<>
    {/* Phần Carousel(chuyển slide) */}
    <Carousel className="pt-3">
        <Carousel.Item interval={4000}>
            <Image
            className="d-block w-100"
            src={ImageI}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Image
            className="d-block w-100"
            src={ImageII}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <Image
            className="d-block w-100"
            src={ImageIII}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image
            className="d-block w-100"
            src={ImageIV}
            alt="fourth slide"
            />
        </Carousel.Item>
    </Carousel>

    {/* Giới thiệu về IECS */}
    <AboutIECS />

    {/* Lộ trình đào tạo */}
   <TraininghRoute />

    {/* Vì sao lựa chọn IECS */}
    <WhyIECS />
    
    {/* Dịch vụ của IECS */}
    <ServieIECS />

    {/* Khách hàng nói gì về IECS */}
    <CustomerIECS />
</>
    )
}

export default connect(HomeScreen);