import type { Dict } from "./en";

const vi: Dict = {
  meta: {
    title: "Faruit — Nhà sản xuất giá kệ kho hàng",
    description:
      "Faruit thiết kế, sản xuất và lắp đặt kệ pallet, sàn mezzanine, kệ công-xôn, kệ để khuôn và giá kệ các loại từ nhà máy 20.000 m² tại Bắc Ninh. Xuất khẩu Đông Nam Á, châu Âu và Mỹ.",
  },
  nav: { products: "Sản phẩm", capabilities: "Nhà máy", process: "Quy trình", industries: "Ngành nghề", contact: "Liên hệ", quote: "Nhận báo giá", menu: "Menu", language: "Ngôn ngữ" },
  hero: {
    eyebrow: "Nhà sản xuất hệ thống lưu trữ · Việt Nam",
    titleA: "Giá kệ vững chắc",
    titleB: "cho cả chuỗi vận hành.",
    subtitle:
      "Faruit quy hoạch, thiết kế, sản xuất và lắp đặt hệ thống kho — từ một chiếc kệ đến cả kho cao tầng — tính toán theo tải trọng, mặt bằng và quy trình của riêng bạn.",
    ctaPrimary: "Yêu cầu báo giá",
    ctaSecondary: "Xem sản phẩm",
    stats: [
      { value: "20.000 m²", label: "Diện tích nhà máy" },
      { value: "9", label: "Dòng sản phẩm" },
      { value: "3", label: "Châu lục xuất khẩu" },
    ],
    tag: "Kệ pallet tiêu chuẩn",
  },
  products: {
    eyebrow: "Danh mục sản phẩm",
    title: "Một nhà máy. Mọi giải pháp lưu trữ.",
    subtitle: "Kích thước tiêu chuẩn giao nhanh; mọi hệ thống đều có thể tùy chỉnh theo kích thước, tải trọng và màu sơn.",
    filters: { all: "Tất cả", heavy: "Tải nặng", medium: "Tải nhẹ & trung", special: "Chuyên dụng", retail: "Bán lẻ" },
    load: "Tải trọng",
    details: "Xem chi tiết",
    quote: "Báo giá sản phẩm này",
    close: "Đóng",
    features: "Đặc điểm nổi bật",
    units: { level: "kg / tầng", pallet: "kg / pallet", m2: "kg / m²", arm: "kg / tay đỡ", cage: "kg / lồng" },
    items: {
      "pallet-rack": {
        name: "Kệ Pallet Selective",
        desc: "Hệ kệ chủ lực của kho hiện đại: lấy hàng trực tiếp từng pallet, thuận tiện cho xe nâng, dễ thay đổi cấu hình.",
        features: ["Tiếp cận trực tiếp 100% vị trí pallet", "Điều chỉnh cao độ thanh beam theo bước 50–75 mm", "Kèm chốt an toàn, thanh giằng và bọc chân trụ"],
      },
      "drive-in-rack": {
        name: "Kệ Drive-in (Kệ Xuyên Sâu)",
        desc: "Lưu trữ mật độ cao cho số lượng lớn cùng mã hàng — xe nâng chạy vào lòng kệ, tận dụng tối đa thể tích kho.",
        features: ["Tăng tới 75% vị trí pallet so với kệ selective", "Lý tưởng cho kho lạnh và hàng rời số lượng lớn", "Ray dẫn hướng bảo vệ trụ khi nâng hạ"],
      },
      "mezzanine-rack": {
        name: "Kệ Sàn Mezzanine",
        desc: "Tạo thêm một tầng làm việc phía trên hệ kệ, nhân đôi diện tích sử dụng mà không cần chuyển kho.",
        features: ["Sàn tôn, tôn chống trượt hoặc sàn lưới", "Tích hợp cầu thang, lan can và thang nâng hàng", "Khẩu độ thông thủy thiết kế theo mặt bằng"],
      },
      "cantilever-rack": {
        name: "Kệ Công-xôn (Cantilever)",
        desc: "Tay đỡ mở phía trước cho hàng dài và cồng kềnh — thép cây, ống, nhôm định hình, gỗ và tấm ván.",
        features: ["Cấu hình một mặt hoặc hai mặt", "Điều chỉnh cao độ và góc tay đỡ", "Chặn đầu tay đỡ giữ hàng dài an toàn"],
      },
      "mold-rack": {
        name: "Kệ Để Khuôn Tải Nặng",
        desc: "Kệ ngăn kéo cho khuôn mẫu, kéo ra toàn phần, có thể lắp thêm palăng phía trên.",
        features: ["Ngăn kéo ra toàn phần trên con lăn bi", "Tùy chọn palăng xích gắn trên nóc", "Khóa an toàn cho từng ngăn"],
      },
      "storage-cage": {
        name: "Lồng Thép Lưới Trữ Hàng",
        desc: "Lồng lưới gấp gọn, xếp chồng được cho linh kiện, logistics và luân chuyển hàng — mạ kẽm bền lâu.",
        features: ["Gấp phẳng tiết kiệm cước vận chuyển chiều về", "Xếp chồng tới 4 tầng khi có hàng", "Tùy chọn bánh xe, bảng tên và nắp"],
      },
      "light-duty-shelf": {
        name: "Kệ V Lỗ Tải Nhẹ & Trung Bình",
        desc: "Kệ lắp ghép không bu lông, dựng trong vài phút không cần dụng cụ — cho kho vật tư, lưu trữ hồ sơ, phụ tùng.",
        features: ["Lắp ráp không cần bu lông, không dụng cụ", "Điều chỉnh tầng kệ theo bước 50 mm", "Mặt sàn tôn, ván MDF hoặc lưới thép"],
      },
      "wire-shelving": {
        name: "Kệ Lưới Mạ Crom",
        desc: "Kệ lưới thoáng khí, vệ sinh dễ — dùng cho bếp, phòng sạch, phòng khám và kho cửa hàng.",
        features: ["Hoàn thiện mạ crom hoặc sơn epoxy", "Bản di động với bánh xe có khóa", "Điều chỉnh chiều cao theo bước 25 mm"],
      },
      "supermarket-shelf": {
        name: "Kệ Siêu Thị & Bán Lẻ",
        desc: "Kệ trưng bày cho siêu thị, cửa hàng tiện lợi, nhà thuốc, kèm đầu kệ và phụ kiện đồng bộ.",
        features: ["Kệ đơn và kệ đôi", "Lưng tôn đục lỗ, lưng lưới hoặc lưng liền", "Có sẵn nẹp giá, móc treo và vách ngăn"],
      },
    },
  },
  capabilities: {
    eyebrow: "Bên trong nhà máy",
    title: "Tự sản xuất, từ cuộn thép đến kệ hoàn thiện.",
    body: "Nhà máy 20.000 m² vận hành toàn bộ quy trình dưới một mái nhà, giúp chúng tôi kiểm soát chất lượng, tiến độ và giá thành ở từng công đoạn.",
    items: [
      { title: "Dây chuyền cán nguội tự động", desc: "Trụ và thanh beam được cán định hình liên tục với dung sai chính xác." },
      { title: "Dập thép băng liên tục", desc: "Dập lỗ và chi tiết kết nối trong một lần, lỗ trụ thẳng hàng tuyệt đối." },
      { title: "Hàn beam tự động", desc: "Máy hàn tự động cho mối hàn đồng đều, đảm bảo khả năng chịu lực." },
      { title: "Dây chuyền sơn tĩnh điện", desc: "Phun sơn tĩnh điện và sấy lò cho bề mặt cứng, đều màu, bền lâu." },
    ],
    finishesTitle: "Các loại hoàn thiện",
    finishes: ["Epoxy", "Polyester", "Sơn ánh kim", "Chống tĩnh điện", "Mạ kẽm nhúng nóng", "Màu RAL theo yêu cầu"],
  },
  why: {
    items: [
      { title: "Giá gốc tại xưởng", desc: "Không qua trung gian giữa dây chuyền sản xuất và kho của bạn." },
      { title: "Thiết kế theo mặt bằng", desc: "Thiết kế layout và tính toán tải trọng cho từng dự án." },
      { title: "Đội lắp đặt riêng", desc: "Đội ngũ lắp đặt được đào tạo, có giám sát tại công trình." },
      { title: "Hỗ trợ lâu dài", desc: "Kiểm tra, sửa chữa và mở rộng hệ thống sau bàn giao." },
    ],
  },
  process: {
    eyebrow: "Quy trình làm việc",
    title: "Từ khảo sát đầu tiên đến ngày bàn giao.",
    steps: [
      { title: "Khảo sát mặt bằng", desc: "Đo đạc không gian, tìm hiểu hàng hóa, tải trọng và thiết bị nâng hạ." },
      { title: "Thiết kế & báo giá", desc: "Bản vẽ 2D/3D, tính toán tải trọng và báo giá chi tiết từng hạng mục." },
      { title: "Sản xuất", desc: "Sản xuất tại nhà máy của chúng tôi, kiểm tra chất lượng từng công đoạn." },
      { title: "Giao hàng & lắp đặt", desc: "Vận chuyển và lắp đặt bởi đội ngũ Faruit, đúng tiến độ." },
      { title: "Hậu mãi", desc: "Kiểm tra định kỳ, bảo trì, phụ tùng thay thế và mở rộng hệ thống." },
    ],
  },
  industries: {
    eyebrow: "Lĩnh vực ứng dụng",
    title: "Hệ thống kho phù hợp với cách bạn vận hành.",
    subtitle: "Hệ thống Faruit đang vận hành tại nhà máy, trung tâm phân phối và cửa hàng ở Đông Nam Á, châu Âu và Mỹ.",
    items: [
      { title: "Logistics & 3PL", desc: "Lưu trữ pallet công suất lớn và soạn hàng." },
      { title: "Sản xuất", desc: "Kho nguyên liệu, bán thành phẩm và thành phẩm." },
      { title: "Thép & nhôm định hình", desc: "Hệ công-xôn cho hàng dài và nặng." },
      { title: "Ô tô & khuôn mẫu", desc: "Kệ để khuôn và lồng linh kiện cho xưởng." },
      { title: "Thực phẩm & kho lạnh", desc: "Kệ drive-in mật độ cao cho hàng mát và đông lạnh." },
      { title: "Bán lẻ & thương mại điện tử", desc: "Kệ cửa hàng và kho xử lý đơn hàng." },
    ],
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Hãy cho chúng tôi biết về kho của bạn.",
    subtitle: "Gửi diện tích mặt bằng, loại hàng và yêu cầu tải trọng — kỹ sư của chúng tôi sẽ phản hồi kèm bản vẽ và báo giá.",
    form: {
      name: "Họ và tên",
      company: "Công ty",
      reach: "Số điện thoại hoặc email",
      product: "Sản phẩm quan tâm",
      productAny: "Chưa chắc — cần tư vấn",
      message: "Thông tin dự án",
      messagePlaceholder: "Diện tích, chiều cao trần, kích thước pallet, tải trọng mỗi tầng, số lượng…",
      submit: "Gửi yêu cầu",
      note: "Mở ứng dụng email với nội dung đã điền sẵn.",
      subject: "Yêu cầu báo giá",
    },
    phone: "Điện thoại",
    email: "Email",
    wechat: "WeChat",
    address: "Địa chỉ nhà máy",
    addressValue: "BT1-3, Khu đô thị mới Phúc Ninh, Phường Vũ Ninh, Tỉnh Bắc Ninh, Việt Nam",
  },
  footer: {
    tagline: "Quy hoạch, thiết kế, sản xuất, lắp đặt và bảo trì hệ thống kho lưu trữ.",
    rights: "Bảo lưu mọi quyền.",
    products: "Sản phẩm",
    company: "Công ty",
  },
};

export default vi;
