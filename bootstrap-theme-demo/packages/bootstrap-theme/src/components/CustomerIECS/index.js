import React from "react";
import { connect } from "frontity";
import { ContainerCustomer, ContainerLaptop, ContainerMobie } from './styles';

// import VideoI from 'C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/videos/Du học sinh tại Đức với cuộc sống bình thường mới thời Covid.mp4';
// import VideoII from 'C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/videos/Hành trình du học nghề tại Đức có khó khăn- Mọi việc đã có IECS lo.mp4';
// import VideoIII from 'C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/videos/Tây Đức và Đông Đức- Sự lựa chọn tối ưu cho du nghề tại quốc gia này.mp4';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CustomerIECS = () => {
    return(
<>
{/* Hiển thị trên máy tính để bàn */}
<ContainerLaptop>
    <ContainerCustomer>
        <Container>
            <Row>
                <Col lg={6}> 
                    {/* <video muted loop>
                        <source src={VideoI} type="video/mp4" />
                    </video>  */}
                    Video I
                </Col>
                <Col lg={6}> 
                    {/* <video muted loop>
                        <source src={VideoII} type="video/mp4" />
                    </video>   */}
                    Video II
                </Col>
                <Col lg={6}> 
                    {/* <video muted loop>
                        <source src={VideoIII} type="video/mp4" />
                    </video> */}
                    Video III
                </Col>
                <Col lg={6}> 
                    {/* <video muted loop>
                        <source src={VideoI} type="video/mp4" />
                    </video>   */}
                    Video IV
                </Col>
                <Col lg={6}> 
                    {/* <video muted loop>
                        <source src={VideoII} type="video/mp4" />
                    </video>   */}
                    Video V
                </Col>
                <Col lg={6}> 
                    {/* <video muted loop>
                        <source src={VideoIII} type="video/mp4" />
                    </video>   */}
                    Video VI
                </Col>
            </Row>
        </Container>
    </ContainerCustomer>
</ContainerLaptop>

{/* Hiển thị trên Mobie */}
<ContainerMobie>
    <ContainerCustomer>
        <Container>
            <Row>
                <Col md={12} className="positon-relative justify-content-center align-items-center text-center"> 
                    {/* <video muted loop>
                        <source src={VideoI} type="video/mp4" />
                    </video>  */}
                    Video I
                </Col>
                <Col md={12} className="positon-relative justify-content-center align-items-center text-center"> 
                    {/* <video muted loop>
                        <source src={VideoII} type="video/mp4" />
                    </video>   */}
                    Video II
                </Col>
                <Col md={12} className="positon-relative justify-content-center align-items-center text-center"> 
                    {/* <video muted loop>
                        <source src={VideoIII} type="video/mp4" />
                    </video> */}
                    Video III
                </Col>
            </Row>
        </Container>
    </ContainerCustomer>
</ContainerMobie>
</>
    )
}

export default connect(CustomerIECS);