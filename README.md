I. Cài đặt Frontity - Bootstrap - Theme
1) git clone https://github.com/frontity-demos/bootstrap-theme-demo.git
2) cd bootstrap-theme-demo
3) npm i
4) npx frontity dev

II. Github
1) git init
2) git add .
3) git commit -m "first commit"
4) git branch -M main
5) git remote add origin https://github.com/nguyenthanhsang231195/Frontity-IECS.git
6) git push -u origin main

III. Tạo host miễn phí với Wordpress
1) wordpress.com
2) Start your website
3) Continue with GG
4) Tên website -> select free -> start with a free site
5) "url": "https://frontityiecs.wordpress.com"
6) "api": "https://public-api.wordpress.com/wp/v2/sites/frontityiecs.wordpress.com"

IV. Kinh nghiệm rút ra
1) Grid Bootstrap không hoạt động tốt trong Frontity do bị fix Css ( Không thể sửa, code tay thay thế phần bị lỗi )
2) Cần thêm Container; Row; Col vào React không thêm cũng ảnh hưởng gì tuy nhiên khi chuyển sang sẽ gây ra lỗi ở các trang phụ
3) React-Frontity không đọc được các file .mp4 hoặc có thể chưa tìm ra cách đúng để import (sẽ thử lại khi có thời gian)
4) Nếu muốn thêm hình ảnh bắt buộc phải thêm thẻ: 
- import Image from "@frontity/components/image";
- Ngoài ra phải import riêng hình ảnh cần liên kết ra ngoài nếu không sẽ xung đột với babel-loader ( Vẫn chưa rõ tại sao lại gây ra lỗi này -> src={} )
5) Lúc này vai trò của WordPress là lưu trữ không cần code trực tiếp, tuy nhiên vẫn có thể làm theo cách thông thường
6) Host miễn phí của WordPress không thể cài BẤT KÌ PLUGIN nào trên trình soạn thảo kể cả bản miễn phí nên lưu ý khi sài - Thay thế bằng LIBRARY của ReactJs

