import React from "react";
import { connect } from "frontity";
import { ContainerWhy, Containerul } from './styles';

import Image from "@frontity/components/image";
import ImageX from "C:/Users/ADMIN/Desktop/Frontity-IECS/bootstrap-theme-demo/packages/bootstrap-theme/src/images/brick.png";

const WhyIECS = () => {
return (
    <ContainerWhy>
        <div className="container">
            <div className="container position-relative py-3">
                <div className="container d-flex position-relative justify-content-start align-items-center mb-3">
                    <Image src={ImageX} />
                    <h2 className="text-dark text-center mx-2"> 
                        <span className="text-warning"> TẠI SAO </span> CHỌN IECS ? 
                    </h2>
                </div>
               
                <h4> Hãy đến và trải nghiệm DỊCH VỤ CHẤT LƯỢNG 5 SAO của IECS </h4>
            </div>
            <Containerul>
                <li>
                    <h3 className="font-weight-bolder text-dark"> 
                        <i className="fas fa-star text-danger"></i> DỊCH VỤ TƯ VẤN CHUYÊN NGHIỆP 
                    </h3>
                    <p className="font-weight-normal text-dark"> 
                        Chúng tôi giúp Bạn hoạch định lộ trình kĩ càng và khoa học phù hợp theo khả năng của Bạn. 
                        Chúng tôi giúp Bạn trang bị đầy đủ kiến thức về Ngôn Ngữ, Văn Hóa và Kĩ Năng Mềm thông qua các buổi học ngoại khóa.
                    </p>
                </li>

                <li>
                    <h3 className="font-weight-bolder text-dark"> 
                        <i className="fas fa-star text-danger"></i> ĐỐI TÁC LÀ CÁC TRƯỜNG HÀNG ĐẦU CỦA ĐỨC 
                    </h3>
                    <p className="font-weight-normal text-dark"> 
                        Chúng tôi luôn chú trọng đến chất lượng của các đối tác ở nước ngoài 
                        (chương trình học, chất lượng giảng dạy, cơ sở vật chất cũng như chính sách từng công ty và thành phố định cư).
                    </p>
                </li>

                <li>
                    <h3 className="font-weight-bolder text-dark"> 
                        <i className="fas fa-star text-danger"></i> CHUYÊN VIÊN TƯ VẤN RIÊNG TẠI VIỆT NAM 
                    </h3>
                    <p className="font-weight-normal text-dark"> 
                        Mỗi Bạn có một chuyên viên tư vấn riêng trong suốt quá trình làm hồ sơ tại Việt Nam cho đến lúc nhận được Visa. 
                        Bạn sẽ được chuyên viên liên lạc và thông báo tình trạng hồ sơ thường xuyên. 
                        Điều này giúp cho quá trình hoàn thành hồ sơ ở Việt Nam được tiến hành một cách nhanh chóng nhất.
                    </p>
                </li>

                <li>
                    <h3 className="font-weight-bolder text-dark">
                        <i className="fas fa-star text-danger"></i> CHUYÊN VIÊN HỖ TRỢ TẠI NƯỚC SỞ TẠI 
                    </h3>
                    <p className="font-weight-normal text-dark"> 
                        Chúng tôi có các đối tác trực tiếp làm việc, học tập và sống trên 15 năm tại nước sở tại. 
                        Điều này chính là lợi thế của Bạn! Đối tác của chúng tôi sẽ hỗ trợ Bạn giải quyết mọi vấn đề phát sinh tại nước ngoài trong suốt quá trình học cũng như hỗ trợ xin việc làm và định cư sau khi bạn hoàn thành chương trình học.
                    </p>
                </li>

                <li>
                    <h3 className="font-weight-bolder text-dark"> 
                        <i className="fas fa-star text-danger"></i> ĐỒNG HÀNH CÙNG HỌC VIÊN SUỐT 3 NĂM HỌC 
                    </h3>
                    <p className="font-weight-normal text-dark"> Chúng tôi cam kết hỗ trợ và đồng hành cùng học viên suốt 3 năm học tại Đức. </p>
                </li>
            </Containerul>
        </div>
    </ContainerWhy>
    )
}

export default connect(WhyIECS);