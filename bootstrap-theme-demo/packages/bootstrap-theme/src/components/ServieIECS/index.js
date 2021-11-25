import React from 'react';
import { connect } from "frontity";
import { ContainerLaptop, ContainerMobie } from './styles';

import Image from "@frontity/components/image";
import ImageArrow from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/arrow-door.png";
import ImageServiceI from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/lop_tieng_duc_web.jpg";
import ImageServiceII from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/Pflege_Ausbildung.jpg";
import ImageServiceIII from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/Mechatronik.jpg";
import ImageServiceIV from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/Restaurant_ausbildung.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServiceIECS = () => {
    return(
<>
{/* Hiển thị trên máy tính để bàn */}
<ContainerLaptop>
    <Container fluid className="py-5">
        <Container className="d-flex position-relative justify-content-start align-items-center my-3">
            <Image src={ImageArrow} /> 
            <h2 className="text-dark text-center"> 
                <span className="text-warning"> DỊCH VỤ </span> CỦA IECS 
            </h2>
        </Container>

        <Container className="p-0 justify-content-center align-item-center py-3">
            <Row>
                <Col lg={3} className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceI} />
                    <h3 className="font-weight-bolder text-dark mt-5 mb-4"> Đào tạo khóa học tiếng Đức tại Tp.HCM </h3> 
                    <p className="font-weight-normal text-muted"> 
                        Các khóa học tiếng Đức tại Sài Gòn hay Thành phố Hồ Chí Minh bao gồm nhiều khóa học từ Học Tiếng Đức cơ bản cho người mới bắt đầu đến khóa học tiếng Đức nâng cao. 
                    </p>
                </Col>
                
                <Col lg={3} className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceII} />
                    <h3 className="font-weight-bolder text-dark my-4"> Du học nghề Đức ngành điều dưỡng </h3> 
                    <p className="font-weight-normal text-muted"> 
                        Nhu cầu tuyển dụng du học nghề Đức ngành điều dưỡng tại Hà Nội, 
                        TpHCM tăng cao mở ra cơ hội cho các bạn Việt Nam đã, đang hoặc muốn du học Đức ngành điều dưỡng tphcm có thể làm việc lâu dài tại Đức.
                    </p>
                </Col>

                <Col lg={3}className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceIII} />
                    <h3 className="font-weight-bolder text-dark my-4"> Du học nghề Đức ngành Cơ khí </h3> 
                    <p className="font-weight-normal text-muted"> 
                        Du học nghề Đức ngành cơ khí hay Du học nghề Đức ngành lái tàu tại Hà Nội, 
                        TpHCM luôn là lựa chọn đúng đắn của sinh viên yêu kĩ thuật. Vì thế, lượng sinh viên sang Đức học ngành này ngày càng cao.
                    </p>
                </Col>

                <Col lg={3} className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceIV} />
                    <h3 className="font-weight-bolder text-dark my-4"> Du học nghề Đức ngành NHKS </h3> 
                    <p className="font-weight-normal text-muted"> Cách học tiếng Đức từ cơ bản đến nâng cao tại Tp.HCM bao gồm nhiều khóa học dựa theo Khung chuẩn chung về đào tạo ngôn ngữ của Đức </p>
                </Col>
            </Row>
        </Container>   
    </Container>
</ContainerLaptop>

{/* Hiển thị trên Mobie */}
<ContainerMobie>
    <Container fluid className="py-5">
        <Container className="d-flex position-relative justify-content-start align-items-center my-3">
            <Image src={ImageArrow} /> 
            <h2 className="text-dark text-center"> 
                <span className="text-warning"> DỊCH VỤ </span> CỦA IECS 
            </h2>
        </Container>

        <Container className="p-0 justify-content-center align-item-center py-3">
            <Row>
                <Col md={12} className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceI} />
                    <h3 className="font-weight-bolder text-dark text-center mt-5 mb-4"> Đào tạo khóa học tiếng Đức tại Tp.HCM </h3> 
                    <p className="font-weight-normal text-muted"> 
                        Các khóa học tiếng Đức tại Sài Gòn hay Thành phố Hồ Chí Minh bao gồm nhiều khóa học từ Học Tiếng Đức cơ bản cho người mới bắt đầu đến khóa học tiếng Đức nâng cao. 
                    </p>
                </Col>
                
                <Col md={12} className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceII} />
                    <h3 className="font-weight-bolder text-dark text-center my-4"> Du học nghề Đức ngành điều dưỡng </h3> 
                    <p className="font-weight-normal text-muted"> 
                        Nhu cầu tuyển dụng du học nghề Đức ngành điều dưỡng tại Hà Nội, 
                        TpHCM tăng cao mở ra cơ hội cho các bạn Việt Nam đã, đang hoặc muốn du học Đức ngành điều dưỡng tphcm có thể làm việc lâu dài tại Đức.
                    </p>
                </Col>

                <Col md={12} className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceIII} />
                    <h3 className="font-weight-bolder text-dark text-center my-4"> Du học nghề Đức ngành Cơ khí </h3> 
                    <p className="font-weight-normal text-muted"> 
                        Du học nghề Đức ngành cơ khí hay Du học nghề Đức ngành lái tàu tại Hà Nội, 
                        TpHCM luôn là lựa chọn đúng đắn của sinh viên yêu kĩ thuật. Vì thế, lượng sinh viên sang Đức học ngành này ngày càng cao.
                    </p>
                </Col>

                <Col md={12} className="position-relative">
                    <Image 
                        className="d-block w-100 position-relative"
                        src={ImageServiceIV} />
                    <h3 className="font-weight-bolder text-dark text-center my-4"> Du học nghề Đức ngành NHKS </h3> 
                    <p className="font-weight-normal text-muted"> Cách học tiếng Đức từ cơ bản đến nâng cao tại Tp.HCM bao gồm nhiều khóa học dựa theo Khung chuẩn chung về đào tạo ngôn ngữ của Đức </p>
                </Col>
            </Row>
        </Container>   
    </Container>
</ContainerMobie>
    
</>
    )
}

export default connect(ServiceIECS);