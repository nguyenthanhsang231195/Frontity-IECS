import React from "react";
import { connect } from "frontity";
import {ContainerLaptop, ContainerMobie} from './styles';

import Image from "@frontity/components/image";
import ImageVI from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/lop_tieng_duc_web.jpg";
import ImageVII from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/ivy-to-the-world.jpg";
import ImageVIII from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/ivy-foundation.jpg";
import ImageIX from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/ivy-testprep.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TrainingRoute = () => {
    return (
<>
{/* Hiển thị trên máy tính để bàn */}
<ContainerLaptop>  
    <Container className="justify-content-center align-items-center py-3">
        <h2 className="text-primary text-center">
            LỘ TRÌNH ĐÀO TẠO TOÀN DIỆN
        </h2>
        <h4 className="text-secondary text-center"> 
            Weg nach Deutschland
        </h4>
    </Container>

    <Container className="p-0 justify-content-center align-item-center py-3">
        <Row>
            <Col xl={3} className="position-relative">
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageVI} />
                <h3 className="font-weight-bolder text-dark my-5"> Xây dựng nền tảng ngoại ngữ học thuật </h3> 
                <p className="font-weight-normal text-muted">
                    Cách học tiếng Đức từ cơ bản đến nâng cao tại Tp.HCM 
                    bao gồm nhiều khóa học dựa theo Khung chuẩn chung về đào tạo ngôn ngữ của Đức 
                </p>
            </Col>

            <Col xl={3} className="position-relative"> 
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageVII} />
                <h3 className="font-weight-bolder text-dark my-5"> Luyện thi chứng chỉ quốc tế: B1, B2, DSH </h3>
                <p className="font-weight-normal text-muted"> 
                    Phương châm tối ưu đến từng học viên, 
                    IECS cung cấp những phương pháp luyện thi Tiếng Đức tốt nhất để học viên đạt chứng chỉ 
                </p>
            </Col>

            <Col xl={3} className="position-relative">
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageVIII} />
                <h3 className="font-weight-bolder text-dark my-5"> Tư vấn duc học, việc làm và định cư </h3>
                <p className="font-weight-normal text-muted"> 
                    Dựa vào nguôn lực của học viên, 
                    IECS sẽ cung cấp gợi ý các chương trình du học nghề Đức tại Tp.HCM, việc làm và định cư phù hợp nhất với học viên 
                </p>
            </Col>

            <Col xl={3} className="position-relative"> 
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageIX} />
                <h3 className="font-weight-bolder text-dark my-5"> Dịch vụ đa dạng và chuyên nghiệp </h3>
                <p className="font-weight-normal text-muted"> 
                    IECS cung cấp nhiều gói dịch vụ, 
                    nhiều chương trình du học từ du học nghề đến học ĐH, Cao học uy tín tại các nước nói tiếng Đức. 
                </p>
            </Col>
        </Row>
    </Container>
</ContainerLaptop>

{/* Hiển thị trên Mobie */}
<ContainerMobie>
    <Container className="justify-content-center align-items-center py-3">
        <h2 className="text-primary text-center">
            LỘ TRÌNH ĐÀO TẠO TOÀN DIỆN
        </h2>
        <h4 className="text-secondary text-center"> 
            Weg nach Deutschland
        </h4>
    </Container>

    <Container className="p-0 justify-content-center align-item-center py-3">
        <Row>
            <Col md={12} className="position-relative">
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageVI} />
                <h3 className="font-weight-bolder text-dark text-center my-5"> Xây dựng nền tảng ngoại ngữ học thuật </h3> 
                <p className="font-weight-normal text-muted">
                    Cách học tiếng Đức từ cơ bản đến nâng cao tại Tp.HCM 
                    bao gồm nhiều khóa học dựa theo Khung chuẩn chung về đào tạo ngôn ngữ của Đức 
                </p>
            </Col>

            <Col md={12} className="position-relative"> 
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageVII} />
                <h3 className="font-weight-bolder text-dark text-center my-5"> Luyện thi chứng chỉ quốc tế: B1, B2, DSH </h3>
                <p className="font-weight-normal text-muted"> 
                    Phương châm tối ưu đến từng học viên, 
                    IECS cung cấp những phương pháp luyện thi Tiếng Đức tốt nhất để học viên đạt chứng chỉ 
                </p>
            </Col>

            <Col md={12} className="position-relative">
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageVIII} />
                <h3 className="font-weight-bolder text-dark text-center my-5"> Tư vấn duc học, việc làm và định cư </h3>
                <p className="font-weight-normal text-muted"> 
                    Dựa vào nguôn lực của học viên, 
                    IECS sẽ cung cấp gợi ý các chương trình du học nghề Đức tại Tp.HCM, việc làm và định cư phù hợp nhất với học viên 
                </p>
            </Col>

            <Col md={12} className="position-relative"> 
                <Image 
                    className="d-block w-100 position-relative"
                    src={ImageIX} />
                <h3 className="font-weight-bolder text-dark text-center my-5"> Dịch vụ đa dạng và chuyên nghiệp </h3>
                <p className="font-weight-normal text-muted"> 
                    IECS cung cấp nhiều gói dịch vụ, 
                    nhiều chương trình du học từ du học nghề đến học ĐH, Cao học uy tín tại các nước nói tiếng Đức. 
                </p>
            </Col>
        </Row>
    </Container>
</ContainerMobie>
</>
    )
}

export default connect(TrainingRoute);