# Server Exam Schedule Mobile App
Server API for Ionic Mobile App
# How to use API
1. Get the Exam Schedule by ID
- URL: https://uit-es.herokuapp.com/student
- Method: POST
- Parameter: idStudent (ID Student to search)
- Example a request: 
```
{
    "result": true,
    "msg": "success",
    "data": {
        "idStudent": "16520145",
        "nameStudent": "Nguyễn Đình Cương",
        "notes": "",
        "examSchedule": [
            {
                "hours": "13h:30",
                "shirt": "3",
                "date": "27-03-2017",
                "idClass": "IT003.H25",
                "room": "GD1",
                "orderNumber": 11,
                "class": "Cấu trúc dữ liệu và giải thuật"
            },
            {
                "hours": "13h:30",
                "shirt": "3",
                "date": "28-03-2017",
                "idClass": "MA002.H210",
                "room": "C112",
                "orderNumber": 19,
                "class": "Giải tích 2"
            },
            {
                "hours": "9h:30",
                "shirt": "2",
                "date": "29-03-2017",
                "idClass": "PH002.H24",
                "room": "C206",
                "orderNumber": 26,
                "class": "Nhập môn mạch số"
            },
            {
                "hours": "9h:30",
                "shirt": "2",
                "date": "30-03-2017",
                "idClass": "EN005.H212",
                "room": "C113",
                "orderNumber": 10,
                "class": "Anh văn 2"
            }
        ]
    }
}
```
```
{
    "result": true,
    "msg": "Lỗi: Sinh viên không tồn tại trong hệ thống."
}
```

2. Get the list of students in the same room
- URL: https://uit-es.herokuapp.com/class
- Method: POST
- Parameter: idClass (ID Class) & room (Examination room)
- Example a request: 
```
{
    "result": true,
    "msg": "success",
    "data": [
        {
            "nameStudent": "Nguyễn Võ Thái Dương",
            "idStudent": "15520150",
            "orderNumber": 1
        },
        {
            "nameStudent": "Lê Thị Mỹ Linh",
            "idStudent": "15520422",
            "orderNumber": 2
        },
        {
            "nameStudent": "Nguyễn Tấn Phát",
            "idStudent": "15520603",
            "orderNumber": 3
        },
        {
            "nameStudent": "Đinh Duy Phương",
            "idStudent": "15520659",
            "orderNumber": 4
        },
        {
            "nameStudent": "Mai Trung Tín",
            "idStudent": "15520894",
            "orderNumber": 5
        },
        {
            "nameStudent": "Nguyễn Hoàng Nữ Kiều Trinh",
            "idStudent": "15520932",
            "orderNumber": 6
        },
        {
            "nameStudent": "Trần Quốc Tuấn",
            "idStudent": "15520978",
            "orderNumber": 7
        },
        {
            "nameStudent": "Nguyễn Văn Tuyến",
            "idStudent": "15520995",
            "orderNumber": 8
        },
        {
            "nameStudent": "Cù Thị Châu",
            "idStudent": "16520107",
            "orderNumber": 9
        },
        {
            "nameStudent": "Nguyễn Đình Cương",
            "idStudent": "16520145",
            "orderNumber": 10
        },
        {
            "nameStudent": "Lê Minh Đức",
            "idStudent": "16520236",
            "orderNumber": 11
        },
        {
            "nameStudent": "Dương Chí Dũng",
            "idStudent": "16520253",
            "orderNumber": 12
        },
        {
            "nameStudent": "Bùi Đức Duy",
            "idStudent": "16520276",
            "orderNumber": 13
        },
        {
            "nameStudent": "Bùi Tấn Duy",
            "idStudent": "16520277",
            "orderNumber": 14
        },
        {
            "nameStudent": "Huỳnh Phương Duy",
            "idStudent": "16520285",
            "orderNumber": 15
        },
        {
            "nameStudent": "Huỳnh Tấn Duy",
            "idStudent": "16520287",
            "orderNumber": 16
        },
        {
            "nameStudent": "Trần Minh Hiếu",
            "idStudent": "16520415",
            "orderNumber": 17
        },
        {
            "nameStudent": "Đỗ Quốc Huy",
            "idStudent": "16520505",
            "orderNumber": 18
        },
        {
            "nameStudent": "Lưu Hoàng Khang",
            "idStudent": "16520564",
            "orderNumber": 19
        },
        {
            "nameStudent": "Trần Hiển Long",
            "idStudent": "16520697",
            "orderNumber": 20
        },
        {
            "nameStudent": "Nguyễn Công Minh",
            "idStudent": "16520741",
            "orderNumber": 21
        },
        {
            "nameStudent": "Lê Nhật Quang",
            "idStudent": "16520992",
            "orderNumber": 22
        },
        {
            "nameStudent": "Ngô Đức Quang",
            "idStudent": "16520995",
            "orderNumber": 23
        },
        {
            "nameStudent": "Vũ Duy Thái",
            "idStudent": "16521092",
            "orderNumber": 24
        },
        {
            "nameStudent": "Lê Trần Song Thiện",
            "idStudent": "16521157",
            "orderNumber": 25
        },
        {
            "nameStudent": "Nguyễn Xuân Duy Hiển",
            "idStudent": "16521670",
            "orderNumber": 26
        },
        {
            "nameStudent": "Nguyễn Đắc Phi Hùng",
            "idStudent": "16521688",
            "orderNumber": 27
        },
        {
            "nameStudent": "Lê Minh Đức Mạnh",
            "idStudent": "16521732",
            "orderNumber": 28
        },
        {
            "nameStudent": "Lê Thị Chúc Ngân",
            "idStudent": "16521744",
            "orderNumber": 29
        },
        {
            "nameStudent": "Trương Ngọc Diễm Quyên",
            "idStudent": "16521781",
            "orderNumber": 30
        },
        {
            "nameStudent": "Nguyễn Tiến Thũ",
            "idStudent": "16521819",
            "orderNumber": 31
        },
        {
            "nameStudent": "Huỳnh Văn Tín",
            "idStudent": "16521827",
            "orderNumber": 32
        },
        {
            "nameStudent": "Nguyễn Thị Lê Vy",
            "idStudent": "16521852",
            "orderNumber": 33
        }
    ]
}
```
```
{
    "result": true,
    "msg": "Lỗi: Không tìm thấy lớp thi của bạn."
}
```
3. Get the recent activities
- URL: https://uit-es.herokuapp.com/logs
- Method: GET
- Example a request: 
```
{
    "result": true,
    "msg": "success",
    "data": [
        {
            "_id": "59da3e15570cfc233041698e",
            "idStudent": "16520145",
            "nameStudent": "Nguyễn Đình Cương",
            "time": "10:23:32 - 14/10/2017"
        },
        {
            "_id": "59e0dffd345bd400129b973b",
            "idStudent": "16520369",
            "nameStudent": "Ôn Trần Ngọc Hiển",
            "time": "15:47:41 - 13/10/2017"
        },
        {
            "_id": "59e0d5a3345bd400129b9738",
            "idStudent": "16520365",
            "nameStudent": "Nguyễn Ngọc Hiên",
            "time": "15:45:54 - 13/10/2017"
        },
        {
            "_id": "59e0df6e345bd400129b973a",
            "idStudent": "16520364",
            "nameStudent": "Nguyễn Công Hiển",
            "time": "15:44:35 - 13/10/2017"
        },
        {
            "_id": "59e0d5d6345bd400129b9739",
            "idStudent": "16520362",
            "nameStudent": "Lê Quý Hiển",
            "time": "15:43:57 - 13/10/2017"
        },
        {
            "_id": "59e0b0030ad86a00120fcbbd",
            "idStudent": "16520146",
            "nameStudent": "Nguyễn Đình Cường",
            "time": "14:42:75 - 13/10/2017"
        },
        {
            "_id": "59e0bef20ad86a00120fcbbe",
            "idStudent": "16520147",
            "nameStudent": "Nguyễn Duy Cương",
            "time": "13:26:76 - 13/10/2017"
        },
        {
            "_id": "59e0ada80ad86a00120fcbbc",
            "idStudent": "16520175",
            "nameStudent": "Vũ Nguyên Đăng",
            "time": "12:12:96 - 13/10/2017"
        },
        {
            "_id": "59df8df7ccc3ec0012ad5460",
            "idStudent": "16520124",
            "nameStudent": "Đoàn Đình Chương",
            "time": "11:49:37 - 13/10/2017"
        },
        {
            "_id": "59e0a7970ad86a00120fcbbb",
            "idStudent": "16520742",
            "nameStudent": "Nguyễn Ngọc Nhật Minh",
            "time": "11:47:38 - 13/10/2017"
        },
        {
            "_id": "59e0a06f0ad86a00120fcbba",
            "idStudent": "16520478",
            "nameStudent": "Nguyễn Đức Hưng",
            "time": "11:17:14 - 13/10/2017"
        },
        {
            "_id": "59e09e150ad86a00120fcbb9",
            "idStudent": "16520445",
            "nameStudent": "Nguyễn Trung Huy Hoàng",
            "time": "11:07:08 - 13/10/2017"
        }
    ]
}
```
```
{
    "result": true,
    "msg": "Danh sách rỗng"
}
```