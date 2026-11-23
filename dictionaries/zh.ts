import type { Dict } from "./en";

const zh: Dict = {
  meta: {
    title: "Faruit — 仓储货架生产厂家",
    description:
      "Faruit 拥有越南北宁省 20,000 平方米工厂，专业设计、生产及安装托盘货架、阁楼货架、悬臂货架、模具货架等仓储设备，产品出口东南亚、欧洲及美国。",
  },
  nav: { products: "产品中心", capabilities: "工厂实力", process: "服务流程", industries: "应用行业", contact: "联系我们", quote: "获取报价", menu: "菜单", language: "语言" },
  hero: {
    eyebrow: "仓储系统制造商 · 越南",
    titleA: "承载您整个运营的",
    titleB: "可靠货架。",
    subtitle:
      "Faruit 提供仓储规划、设计、生产与安装一站式服务——从单组货架到整座高位立体仓库，均按您的载重、空间与作业流程量身定制。",
    ctaPrimary: "免费询价",
    ctaSecondary: "浏览产品",
    stats: [
      { value: "20,000 m²", label: "工厂面积" },
      { value: "9", label: "大产品系列" },
      { value: "3", label: "大洲出口市场" },
    ],
    tag: "横梁式托盘货架",
  },
  products: {
    eyebrow: "产品系列",
    title: "一家工厂，满足所有仓储需求。",
    subtitle: "标准规格快速交货；所有系统均可按尺寸、载重与表面处理定制。",
    filters: { all: "全部", heavy: "重型", medium: "轻中型", special: "专用型", retail: "商超" },
    load: "承载能力",
    details: "查看详情",
    quote: "咨询此产品",
    close: "关闭",
    features: "产品特点",
    units: { level: "kg / 层", pallet: "kg / 托盘", m2: "kg / m²", arm: "kg / 悬臂", cage: "kg / 个" },
    items: {
      "pallet-rack": {
        name: "横梁式托盘货架",
        desc: "现代仓库的主力货架：每个托盘均可直接存取，适配叉车作业，布局调整灵活。",
        features: ["100% 托盘位直接存取", "横梁高度以 50–75 mm 为单位调节", "配安全销、背拉杆及立柱护脚"],
      },
      "drive-in-rack": {
        name: "贯通式货架（驶入式）",
        desc: "适合同品种大批量存储的高密度方案——叉车驶入巷道作业，最大化利用仓库空间。",
        features: ["托盘位比横梁式货架多达 75%", "适用于冷库及大宗货物", "导轨保护立柱，作业更安全"],
      },
      "mezzanine-rack": {
        name: "阁楼货架 / 钢平台",
        desc: "在货架上方增加完整作业层，无需更换厂房即可使可用面积翻倍。",
        features: ["钢板、花纹板或格栅板可选", "集成楼梯、护栏及货梯", "按布局设计大跨度无柱空间"],
      },
      "cantilever-rack": {
        name: "悬臂货架",
        desc: "开放式悬臂结构，专为长、大件物料设计——钢材、管材、铝型材、木材与板材。",
        features: ["单面或双面结构可选", "悬臂高度与角度可调", "臂端挡块确保长料存放安全"],
      },
      "mold-rack": {
        name: "重型模具货架",
        desc: "抽屉式模具存放架，可全拉出，可选配顶部吊葫芦。",
        features: ["轴承滚轮全拉出抽屉", "可选顶部手拉葫芦", "每层配安全锁定装置"],
      },
      "storage-cage": {
        name: "仓储笼 / 蝴蝶笼",
        desc: "可折叠、可堆叠的钢丝网周转笼，适用于零部件存储、物流周转——镀锌处理，经久耐用。",
        features: ["折叠后平放，节省回程运费", "满载可堆叠至 4 层", "可选脚轮、标牌及盖板"],
      },
      "light-duty-shelf": {
        name: "无螺丝轻中型货架",
        desc: "铆接式免螺丝结构，几分钟即可徒手组装——适用于物料仓、档案室及备件库。",
        features: ["无需螺丝及工具即可组装", "层高以 50 mm 为单位调节", "钢层板、中纤板或网层板可选"],
      },
      "wire-shelving": {
        name: "镀铬线网层架",
        desc: "通风透光、易于清洁的线网货架——适用于厨房、洁净室、诊所及门店后仓。",
        features: ["镀铬或环氧涂层表面", "可配带刹车脚轮的移动款", "高度以 25 mm 为单位调节"],
      },
      "supermarket-shelf": {
        name: "超市货架",
        desc: "适用于超市、便利店及药店的陈列货架，配套端架及各类配件。",
        features: ["单面及双面货架", "洞洞板、网背或实背可选", "提供价签条、挂钩及隔板"],
      },
    },
  },
  capabilities: {
    eyebrow: "走进工厂",
    title: "从钢卷到成品货架，全部自主生产。",
    body: "20,000 平方米工厂集成全部生产工序，从而在每个环节把控质量、交期与成本。",
    items: [
      { title: "全自动冷弯成型线", desc: "立柱与横梁连续辊压成型，公差精准。" },
      { title: "连续带钢冲压线", desc: "一次冲压完成孔位与连接件，孔距精确一致。" },
      { title: "横梁自动焊接机", desc: "自动焊接，焊缝均匀，承载强度稳定可靠。" },
      { title: "静电粉末喷涂线", desc: "静电喷涂加高温固化，涂层坚硬均匀、经久耐用。" },
    ],
    finishesTitle: "可选表面处理",
    finishes: ["环氧树脂", "聚酯", "金属粉末", "防静电", "热浸镀锌", "定制 RAL 色"],
  },
  why: {
    items: [
      { title: "工厂直供价格", desc: "从生产线直达您的仓库，没有中间环节。" },
      { title: "按空间量身设计", desc: "每个项目均提供布局设计与载荷计算。" },
      { title: "自有安装团队", desc: "专业培训的安装队伍及现场监理。" },
      { title: "长期售后支持", desc: "交付后提供检查、维修及扩容服务。" },
    ],
  },
  process: {
    eyebrow: "服务流程",
    title: "从现场勘察到交付验收。",
    steps: [
      { title: "现场勘察", desc: "测量场地，了解货物、载重及搬运设备。" },
      { title: "方案设计与报价", desc: "2D/3D 布局图、载荷计算及清晰的分项报价。" },
      { title: "生产制造", desc: "自有工厂生产，每道工序严格质检。" },
      { title: "发货与安装", desc: "由我们的团队按期运输与安装。" },
      { title: "售后服务", desc: "定期检查、维护保养、备件供应及系统扩容。" },
    ],
  },
  industries: {
    eyebrow: "应用行业",
    title: "契合您作业方式的仓储系统。",
    subtitle: "Faruit 系统已应用于东南亚、欧洲及美国的工厂、配送中心与门店。",
    items: [
      { title: "物流与第三方仓储", desc: "高吞吐量托盘存储与拣选。" },
      { title: "制造业", desc: "原材料、在制品及成品存储。" },
      { title: "钢材与铝型材", desc: "悬臂系统存放长、重物料。" },
      { title: "汽车与模具", desc: "车间用模具货架及零件笼。" },
      { title: "食品与冷链", desc: "冷藏冷冻货物高密度贯通式存储。" },
      { title: "零售与电商", desc: "门店货架及后仓订单履约。" },
    ],
  },
  contact: {
    eyebrow: "联系我们",
    title: "告诉我们您的仓库需求。",
    subtitle: "发送场地面积、货物类型及载重要求——我们的工程师将回复布局方案与报价。",
    form: {
      name: "您的姓名",
      company: "公司名称",
      reach: "电话或邮箱",
      product: "意向产品",
      productAny: "暂不确定，请推荐",
      message: "项目详情",
      messagePlaceholder: "场地面积、净高、托盘尺寸、每层载重、数量……",
      submit: "提交询价",
      note: "将打开您的邮件应用并自动填写内容。",
      subject: "询价请求",
    },
    phone: "电话",
    email: "邮箱",
    wechat: "微信",
    address: "工厂地址",
    addressValue: "越南北宁省武宁坊福宁新城区 BT1-3",
  },
  footer: {
    tagline: "仓储系统规划、设计、生产、安装及维护。",
    rights: "版权所有。",
    products: "产品",
    company: "公司",
  },
};

export default zh;
