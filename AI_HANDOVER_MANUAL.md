# 🤖 MAXVOR Medical Platform — AI Handover & Project Continuity Manual
> **重要说明 / NOTICE FOR FUTURE AI AGENTS**:
> 本文档是 MAXVOR 医疗器械与耗材出海独立站项目的完整交接档案与核心记忆库。无论您是切换至新的聊天窗口、新版 AI 助手、其他 IDE（如 Cursor、Windsurf、VS Code）或不同开发终端，请**首先阅读本文件与 `README.md`**，即可 100% 还原项目背景、业务规则、设计规范、技术架构及后续迭代任务。

---

## 🪪 一、品牌定位与核心信息 (Brand Identity)

- **品牌名称**: **MAXVOR Medical** (中文品牌名：迈沃医疗)
- **业务邮箱**: `sales@maxvor.com`
- **品牌定位**: 集约型医疗耗材与诊断设备超级供应链枢纽（专注全球医院招标、私立诊所、急诊网络及海外医疗器械分销商）。
- **目标市场**: 全球市场，重点覆盖非洲（卢旺达、喀麦隆、肯尼亚、坦桑尼亚等）、中东、东南亚、拉美及欧洲多语言采购网络。
- **建站原则**:
  1. **彻底去 OEM/批发化**: 前台界面严禁出现 `OEM/ODM`、`B2B Wholesale`、`Direct B2B Factory Supply`、`Dedicated B2B Desk` 等批发代工词汇，全站树立自主品牌、集约型医疗产品供应商（Medical Products Supplier）的专业形象。
  2. **知识产权与授权合规**: 仅上架取得正式商业授权的产品系列（如索诺星 Sonostar 掌超探头、沃克 Woke 医用微创内窥镜器械及高品质敷料），坚决下架或不上架未授权测试品（如 `CP-6CPL`、`CP-6F`、`CP-8C` 严禁上架）。
  3. **起订量策略 (MOQ)**: 高值医疗设备（超声探头、内窥镜系统、摄像主机、冷光源）统一为 **1 Unit**；医用耗材（绷带、贴布、冷疗包）统一为 **1 Carton**；一次性软镜/导丝统一为 **1 Box**。
  4. **产品型号展示规则**: 对于型号尚未正式最终确定的产品线（如沃克内窥镜），标题、前台卡片、详细规格及 URL Slug 中**严格隐藏未定型号**，统一采用标准临床功能术语命名。

---

## 📝 二、全站核心文案规范 (Copywriting & Tone Standards)

1. **Home Banner 副标题**:
   `Connecting global buyers with reliable medical products, flexible sourcing solutions, and efficient supply support.`
2. **Products 页面**:
   - 移除结果行 `Direct B2B Factory Supply & Verified Specifications` 标签。
   - 页面副标题规范为：`Explore a comprehensive portfolio of diagnostic instruments, imaging probes, and clinical supplies for diverse healthcare needs worldwide.`
3. **产品详情页主按钮**:
   统一使用 **`Inquire for Pricing`**。
4. **FAQ 页面 All Questions 描述与徽标**:
   - 描述规范为：`Browse our FAQs for helpful information about our products, services, and support.`
   - 移除 `Dedicated B2B Desk` 徽标。
5. **全站底部栏 (Footer)**:
   `MAXVOR is a medical products supplier based in China, offering a diverse portfolio of diagnostic instruments, medical equipment, and clinical supplies to healthcare professionals and medical institutions worldwide.`

---

## 🛠️ 三、技术架构与规范 (Technical Stack & Architecture)

- **前端技术栈**:
  - `React 18` + `Vite` 构建单页应用 (SPA)
  - `Tailwind CSS` 现代化原子样式库，采用“纯净极简白灰”主视觉风格
  - `Lucide React` 图标库
  - `React Router DOM v6` 客户端路由
- **多语言架构 (i18n)**:
  - 动态双语引擎：英语 (English) + 法语 (Français)，支持多语言上下文切换
  - 核心数据集双向映射：`src/data/products.js` (EN) 与 `src/data/productsFr.js` (FR)；`categories.js` (EN) 与 `categoriesFr.js` (FR)；`articles.js` (EN) 与 `articlesFr.js` (FR)
- **可视化 CMS 后台 (/admin)**:
  - 独立运维控制台，支持管理 RFQ 询盘线索、SEO 站点地图配置、导航菜单及产品/博客全生命周期。
  - **数据双向持久化机制**: 采用 `findStoredData()` 跨版本加载器 + `mergeProductsWithCode()` 深度合并算法，确保后台在线编辑（如添加多图画廊、修改参数）与代码层新增数据自动双向融合，杜绝覆盖丢失。
  - **灾备与持久化**: 本地预览服务器配备 `/api/site-data.ashx` 与 `/api/upload.ashx` 实时存取接口，生产环境对接 Windows IIS C# `.ashx` 后端接口。
- **生产部署与服务器环境**:
  - 生产环境：阿里云 Windows Server (IIS 托管)
  - 配置 `public/web.config` 实现 SPA 路由重写规则（URL Rewrite），防止刷新页面 404。
  - **防强缓存协议**: `index.html` 与 `web.config` 内置 `Cache-Control: no-cache, no-store, must-revalidate`，确保前端代码迭代后访客浏览器即刻拉取最新 JS Hash，杜绝历史缓存残留。
  - **标准化生产部署流程**: 彻底弃用 `.bat` 批处理，统一采用【生产压缩包 + PowerShell 直拷命令】进行服务器更新，严格物理隔离并 100% 保护 `App_Data/site_data.json` 与 `assets/uploads/` 目录。

---

## 📦 三、现有 3 大产品品类矩阵 (73 款核心 SKU)

1. **Point-of-Care Ultrasound Diagnostic Systems (27款)**:
   - 凸阵、线阵、微凸、微线阵、相控阵、双头探头及四维探头，覆盖腹部、血管、浅表器官、心脏及妇产科床旁诊断。
2. **Medical Bandages, Tapes & Cold Therapy Consumables (13款)**:
   - 自粘弹性绷带、肌内效贴布、输液贴、刚性透气贴布、皮肤膜、轻/重弹绷带、即冷冷敷绷带、自粘冷敷绷带、急救冷冻喷雾、一次性速冷冰袋、液体敷料及冷热敷冰袋。
3. **Rigid & Flexible Endoscopy Systems & Accessories (33款)**:
   - **肾镜系列**: 超微可视穿刺肾镜、微型肾镜 (8.5/12Fr)、标准经皮肾镜 (15/18Fr)、新型 Mini-PCNL 广角肾镜、520,000 像素高清刚性数字肾镜、UPS 12° 双通道数字肾镜等。
   - **输尿管镜系列**: USP 12° 刚性数字输尿管镜 (160k/520k px)、双通道输尿管镜、柱状光学纤维输尿管镜、一次性数字电子软镜 (275°双向弯曲)、可复用数字电子软镜系统。
   - **膀胱镜系列**: 免鞘刚性数字膀胱镜 (9/11/13Fr)、一次性电子膀胱软镜、可复用电子膀胱软镜系统。
   - **妇产科与前列腺微创系统**: 超薄前列腺激光镜、超微旋切镜 (22Fr外鞘)、TTTS 双胎输血综合征激光凝固胎儿镜 (2mm外径)、智能旋切动力系统。
   - **内窥镜主机设备与工作站**: 1080P 高清图像处理器、便携式带屏图像处理器、4K UHD 超高清摄像系统、100W 医用高功率 LED 冷光源、智能双泵/单泵灌注吸引工作站、直视导引鞘负压碎石一体化推车塔桥、宫腔镜手术系统完整工作站。
   - **内窥镜耗材与器械**: 一次性万向可弯曲负压清石鞘、医用亲水超滑斑马导丝 (0.028"~0.038")、各类异物钳/活检钳/剪刀套件及 IUD 节育环缝合器械套装。

---

## 🔄 六、后台手动更新与前后台双向同步版本管理机制 (Admin Sync & Version Protocol)

为确保用户在 CMS 管理后台（`/admin`）的修改操作能即时体现在前台，且后续代码升级不会冲刷掉用户的修改，所有后续 AI 与维护者必须严格遵循以下机制：

1. **前后台双向智能同步机制 (Bidirectional Merge & Persistence)**:
   - **后台修改 -> 前台即时生效**: 用户在后台修改产品标题、图片、画廊、技术规格、MOQ 或在线状态后，`saveSiteData()` 会立即更新本地存储并通过 `maxvor_site_data_updated` 事件驱动前台页面秒级刷新，同时异步 POST 至服务器 `/api/site-data.ashx` 持久化到 `App_Data/site_data.json`。
   - **代码升级 -> 用户修改 100% 保护**: 当后续通过代码新增产品或修改页面时，`fetchServerSiteData()` 与 `getSiteData()` 会调用 `mergeProductsWithCode()` 与 `mergeCategoriesWithCode()` 深度合并算法：
     - **优先保护用户在后台手动上传的图片与画廊** (`matchedStored.gallery` 位于前列)；
     - **优先保留用户在后台手动调整的在线/下架状态** (`isActive`)；
     - **自动引入代码层新增的 SKU 与新分类**，合并为全量最新数据集；
     - **自动将合并后的全量数据回写服务器**，使服务器端数据库始终保持最新全集，杜绝产品数量回退（如 73 降回 40）。

2. **全站图片资源镜像与多层级容错兜底 (Image Mirror & Fallback)**:
   - 所有产品图片必须在 `/assets/images/` 及其子目录保持规范镜像；
   - 所有前端组件（`ProductCard`、`ProductDetailPage`、`ProductQuickViewModal`、`ProductManagement`）必须配置 `onError` 智能容错处理，当外部路径不可用时自动无缝降级为对应品类的白底高清矩阵图，杜绝任何破图/裂图现象。

3. **用户手动更新版本记录规范 (Version Audit Log)**:
   - 每次用户在后台完成数据批量调整或新功能上线后，系统在 `siteStore.js` 自动更新 `lastUpdated` 时间戳，并在 `CHANGELOG.md` 及交接档案中留存版本记录，确保项目可追溯、可审计。

---

## 🚀 七、接手本项目的 AI 操作指令指南 (How to Work)

当新的 AI 接手本项目时，请按照以下标准工作流执行任务：

1. **启动与本地预览**:
   - 运行 `node preview-server.cjs` 启动本地静态预览与 API 持久化服务（端口 `5188`，访问 `http://localhost:5188/`）。
2. **新增或修改产品数据**:
   - 英文数据：编辑 `src/data/products.js`；
   - 法文数据：编辑 `src/data/productsFr.js`；
   - 产品图片：将白底图放置于 `public/assets/images/` 对应子目录（如 `endoscopy/` 或 `gspmed/`），并配置多图 `gallery` 数组。
3. **新增或修改博客/临床文章**:
   - 编辑 `src/data/articles.js` (EN) 与 `src/data/articlesFr.js` (FR)。
4. **编译与打包**:
   - 执行 `npm run build` 生成生产编译产物（输出至 `dist/`）；
   - 执行打包脚本生成 `maxvor-medical-website-dist.zip` 交付给用户。
5. **服务器部署命令规范 (PowerShell 直拷)**:
   - 指引用户在服务器 PowerShell 中执行标准直拷与 IIS 刷新指令：
   ```powershell
   $zip = "C:\Users\Administrator\Desktop\maxvor-medical-website-dist.zip"
   $target = "D:\wwwroot\maxvor"
   $temp = "C:\Users\Administrator\Desktop\maxvor_temp_extract"
   if (Test-Path $temp) { Remove-Item -Path $temp -Recurse -Force }
   Expand-Archive -Path $zip -DestinationPath $temp -Force
   Copy-Item -Path "$temp\index.html" -Destination "$target\index.html" -Force
   Copy-Item -Path "$temp\web.config" -Destination "$target\web.config" -Force
   Copy-Item -Path "$temp\assets\*" -Destination "$target\assets\" -Recurse -Force
   (Get-Item "$target\web.config").LastWriteTime = Get-Date
   Remove-Item -Path $temp -Recurse -Force
   ```
6. **站点地图同步**:
   - 如增删页面或产品，同步更新 `public/sitemap.xml` 并运行 XML 语法校验。
