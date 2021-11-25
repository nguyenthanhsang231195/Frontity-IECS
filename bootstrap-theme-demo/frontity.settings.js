const settings = {
  "name": "wpcamp-demo",
  "state": {
    "frontity": {
      "url": "",
      "title": "",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/bootstrap-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Trang chủ",
              "/"
            ],
            [
              "Giới thiệu",
              "/giới-thiệu/"
            ],
            [
              "Khóa học tiếng Đức",
              "/các-khóa-học-tiếng-Đức/"
            ],
            [
              "Tự học tiếng Đức",
              "/học-tiếng-Đức/"
            ],
            [
              "Du học Đức",
              "/category/chia-sẽ/du-học-Đức"
            ],
            [
              "Nước Đức",
              "/category/chia-sẽ/du-học-Đức"
            ],
            [
              "Tin tức",
              "/tin-tuc/"
            ],
            [
              "Liên hệ",
              "/liên-hệ"
            ],
            [
              "Deutsch",
              "/de"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/frontityiecs.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
