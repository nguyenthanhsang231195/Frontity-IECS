import React from 'react';
import { connect } from "frontity";
import { ContainerLaptop } from './styles';

import Image from "@frontity/components/image";
import ImageArrow from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/arrow-door.png";
import ImageV from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/IECS_LogoIECS.png";

const AboutIECS = () => {
    return(
<> 
<ContainerLaptop>
    <div className="container d-flex position-relative justify-content-start align-items-center my-3">
        <Image src={ImageArrow} /> 
        <h2 className="text-dark text-center"> 
            <span className="text-warning"> GIỚI THIỆU </span> VỀ IECS 
        </h2>
    </div>

    <div className="container text-black pt-3">
        <div className="row">

            <div className="col-sm-4">
                <Image
                className="w-100"
                src={ImageV}
                /> 
            </div>

            <div className="col-sm-8">
                Tổ chức Tư Vấn Giáo Dục Quốc Tế IECS (tên viết tắt của International Education Consultancy Services) 
                – là công ty chuyên tư vấn du học Đức, đặc biệt du học nghề Đức ngành điều dưỡng tại  Việt Nam đặc biệt TPHCM và Hà Nội. 
                IECS là trung tâm dạy học tiếng Đức số 1 Hồ Chí Minh. <br />
                <div className="my-3"></div>
                Trung tâm tiếng Đức IECS chuyên tổ chức khóa học tiếng Đức online Tp.HCM, khóa học tiếng Đức offline tại Tp Hồ Chí Minh, 
                với những buổi trao đổi về văn hóa cũng như khóa học ngắn hạn kĩ năng mềm nhằm giúp các bạn học sinh có một hành trang tốt nhất khi học tập và sinh sống tại nước ngoài. 
                Với các khóa học tiếng Đức từ cơ bản đến nâng cao của IECS, bạn sẽ được giải đáp tận tình nhất từ những chuyên gia văn hóa của chúng tôi. <br />
                <div className="my-3"></div>
                IECS gồm những cử nhân, thạc sĩ đã học tập, làm việc cũng như đang sinh sống trên 15 năm tại Đức, có nhiều năm kinh nghiệm trong lĩnh vực tư vấn giáo dục. 
                Bằng trình độ, kinh nghiệm cũng như sự tận tâm trong nghề, đội ngũ IECS sẽ giúp con đường đến “ước mơ” của bạn nhanh chóng và chắc chắn hơn. 
                IECS cam kết mang đến cho các bậc phụ huynh, học sinh một dịch vụ tư vấn du học, làm việc và định cư với chất lượng 5 sao.<br />
                <div className="my-3"> Xem Thêm </div>
            </div>
        </div>
    </div>
</ContainerLaptop> 
    
</>
    )
}

export default connect(AboutIECS);