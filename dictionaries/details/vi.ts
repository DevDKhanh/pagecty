import type { DetailDict } from "./en";

const vi: DetailDict = {
  labels: {
    home: "Trang chủ",
    overview: "Tổng quan",
    specs: "Thông số kỹ thuật",
    structure: "Kết cấu chính",
    config: "Cấu hình",
    components: "Linh kiện",
    finish: "Bề mặt & màu sắc",
    load: "Tải trọng",
    custom: "Tùy chỉnh",
    customValue: "Có — kích thước, tải trọng và màu sắc",
    applications: "Ứng dụng tiêu biểu",
    related: "Sản phẩm liên quan",
    productList: "Danh mục sản phẩm",
    viewProduct: "Xem sản phẩm",
    inquiryTitle: "Nhận báo giá sản phẩm này",
    inquirySub: "Cho chúng tôi biết kích thước và tải trọng — chúng tôi gửi lại bản vẽ và báo giá, thường trong vòng 24 giờ.",
    talk: "Trao đổi với kỹ sư",
  },
  items: {
    "pallet-rack": {
      overview:
        "Kệ pallet selective là hệ thống lưu trữ hàng pallet phổ biến nhất. Xe nâng tiếp cận trực tiếp mọi vị trí pallet, rất phù hợp cho kho nhiều mã hàng và xuất nhập thường xuyên. Thanh beam liên kết móc cài giúp thay đổi cao độ tầng dễ dàng khi hàng hóa thay đổi.",
      structure: "Khung trụ và thanh beam chịu lực",
      config: "Dãy đơn, dãy đôi lưng tựa lưng hoặc nhiều dãy",
      components: "Trụ, beam, chốt an toàn, thanh giằng dãy, giằng chéo, đế trụ và bu lông nở",
      finish: "Trụ xanh, beam cam hoặc màu RAL theo yêu cầu",
      applications: ["Trung tâm phân phối và kho 3PL", "Kho nguyên liệu và thành phẩm nhà máy", "Kho vật liệu xây dựng và hàng tiêu dùng"],
    },
    "drive-in-rack": {
      overview:
        "Kệ drive-in loại bỏ lối đi giữa các dãy: xe nâng chạy vào lòng kệ và đặt pallet lên ray liên tục, nối tiếp nhau. Hệ thống chứa được nhiều pallet nhất trên diện tích nhỏ nhất — lựa chọn tối ưu cho hàng cùng mã số lượng lớn và cho kho lạnh có chi phí mặt bằng cao.",
      structure: "Khung trụ, ray đỡ pallet và giằng đỉnh",
      config: "Drive-in (một đầu vào, LIFO) hoặc drive-through (hai đầu, FIFO)",
      components: "Trụ, ray pallet, bát đỡ ray, beam đỉnh, ray dẫn hướng và bọc chân trụ",
      finish: "Sơn tĩnh điện xanh – cam, hoặc mạ kẽm cho kho lạnh",
      applications: ["Kho lạnh và kho đông", "Kho đồ uống và thực phẩm", "Hàng thời vụ và hàng số lượng lớn"],
    },
    "mezzanine-rack": {
      overview:
        "Hệ sàn mezzanine tạo thêm tầng hai (hoặc tầng ba) ngay trong nhà xưởng hiện có, đỡ bằng hệ kệ hoặc cột độc lập. Tầng trên dùng để lưu trữ, soạn hàng hoặc đóng gói, tầng dưới vẫn sử dụng bình thường — cách nhanh và tiết kiệm để nhân diện tích sàn.",
      structure: "Cột, dầm chính, dầm phụ và mặt sàn thép",
      config: "Đỡ bằng kệ hoặc cột độc lập, một hoặc nhiều tầng",
      components: "Cột, dầm, tấm sàn, cầu thang, lan can, tấm chắn chân và cửa nhận hàng",
      finish: "Thép sơn tĩnh điện; sàn tôn, tôn chống trượt hoặc sàn lưới",
      applications: ["Sàn soạn hàng và đóng gói thương mại điện tử", "Kho phụ tùng và hàng nhỏ", "Văn phòng xưởng phía trên khu sản xuất"],
    },
    "cantilever-rack": {
      overview:
        "Kệ công-xôn không có trụ phía trước nên hàng dài và hàng không đều có thể xếp từ phía hông mà không bị vướng. Tay đỡ di chuyển lên xuống dọc thân trụ để phù hợp từng loại hàng, hệ thống có thể làm một mặt hoặc hai mặt tùy bố trí lối đi.",
      structure: "Thân trụ, chân đế, tay đỡ và giằng ngang",
      config: "Một mặt áp tường hoặc hai mặt giữa lối đi",
      components: "Thân trụ, chân đế, tay đỡ thẳng hoặc nghiêng, chặn đầu tay và giằng",
      finish: "Sơn tĩnh điện xanh – cam, hoặc mạ kẽm nhúng nóng khi dùng ngoài trời",
      applications: ["Thép cây, ống thép, ống nhựa", "Nhôm định hình ngành cửa nhôm", "Gỗ, ván và tấm nhựa"],
    },
    "mold-rack": {
      overview:
        "Kệ để khuôn lưu trữ khuôn nặng an toàn trong các ngăn kéo kéo ra toàn phần, giúp cẩu hoặc palăng nhấc khuôn thẳng đứng. Mỗi ngăn chạy trên con lăn bi chịu tải và có khóa định vị, giữ khuôn mẫu gọn gàng, được bảo vệ và thay khuôn nhanh.",
      structure: "Khung hàn chịu tải nặng với ngăn kéo kéo ra",
      config: "Một hoặc nhiều khoang, 2–5 ngăn mỗi khoang",
      components: "Khung, ngăn kéo con lăn bi, khóa ngăn, tay kéo và palăng nóc (tùy chọn)",
      finish: "Sơn tĩnh điện xanh hoặc màu theo yêu cầu",
      applications: ["Kho khuôn ép nhựa và khuôn dập", "Phòng khuôn ngành ô tô, điện tử", "Lưu trữ chi tiết máy nặng"],
    },
    "storage-cage": {
      overview:
        "Lồng thép lưới là thùng chứa cứng, nhìn xuyên được, dùng cho linh kiện và hàng hóa. Lồng gấp phẳng khi rỗng, xếp chồng chắc chắn khi có hàng, nâng hạ bằng xe nâng hoặc xe kéo pallet — giảm bao bì và dễ kiểm đếm hàng tồn.",
      structure: "Tấm lưới thép hàn trên đế gia cường",
      config: "Gấp gọn, xếp chồng; có hoặc không bánh xe",
      components: "Vách lưới, khung đế, chân xếp chồng, cửa mở nửa phía trước, khung bảng tên",
      finish: "Mạ kẽm điện phân hoặc mạ kẽm nhúng nóng",
      applications: ["Linh kiện ô tô và điện tử", "Luân chuyển và hoàn trả hàng logistics", "Hàng dự trữ siêu thị và kho"],
    },
    "light-duty-shelf": {
      overview:
        "Kệ không bu lông lắp xong trong vài phút chỉ với búa cao su — không cần ốc, không cần dụng cụ. Tầng kệ cài vào trụ theo bước 50 mm, dễ điều chỉnh cho thùng hàng, hồ sơ hay phụ tùng và nối thêm khoang khi nhu cầu tăng.",
      structure: "Trụ thép góc và thanh đỡ tầng tán rive",
      config: "Khoang chính và khoang nối, một mặt hoặc hai mặt",
      components: "Trụ, thanh đỡ, mâm tầng, đế chân và bát nối",
      finish: "Trụ xanh – thanh cam, màu ghi hoặc màu RAL theo yêu cầu",
      applications: ["Kho vật tư và phụ tùng", "Lưu trữ hồ sơ, tài liệu", "Gara, xưởng và cửa hàng"],
    },
    "wire-shelving": {
      overview:
        "Kệ lưới mạ crom chắc chắn, nhẹ và dễ vệ sinh. Thiết kế thoáng giúp không khí, ánh sáng lưu thông và hạn chế bám bụi, khóa côn trên trụ cho phép đặt từng tầng đúng cao độ mong muốn.",
      structure: "Trụ tròn và tầng lưới thép",
      config: "Cố định hoặc di động trên bánh xe có khóa",
      components: "Trụ, tầng lưới, khóa côn, chân tăng chỉnh hoặc bánh xe",
      finish: "Mạ crom, hoặc sơn epoxy cho khu vực ẩm",
      applications: ["Bếp nhà hàng, bếp công nghiệp", "Phòng khám, phòng thí nghiệm, phòng sạch", "Kho cửa hàng và văn phòng"],
    },
    "supermarket-shelf": {
      overview:
        "Kệ gondola mang đến hệ trưng bày gọn gàng, dạng mô-đun cho cửa hàng bán lẻ. Tầng kệ điều chỉnh theo chiều cao sản phẩm, lưng kệ có nhiều kiểu, đầu kệ, móc treo và nẹp giá giúp trưng bày hấp dẫn và bán được nhiều hơn.",
      structure: "Trụ, chân đế, tấm lưng và tầng kệ công-xôn",
      config: "Kệ áp tường, kệ đảo đơn/đôi, đầu kệ",
      components: "Trụ, mâm kệ, tấm lưng, bát đỡ, móc treo, nẹp giá và vách ngăn",
      finish: "Trắng, đen, ghi hoặc màu thương hiệu",
      applications: ["Siêu thị và cửa hàng mini", "Cửa hàng tiện lợi và nhà thuốc", "Cửa hàng văn phòng phẩm, mỹ phẩm, kim khí"],
    },
  },
};

export default vi;
