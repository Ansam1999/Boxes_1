const services = [
  {
    title: "الإزالة والنقل",
    description: [
      "خدمات الإزالة الدولية.",
      "خدمات النقل العالمي.",
      "نقل القطع الفنية.",
      "نقل السيارات.",
      "نقل الحيوانات الأليفة.",
      "نقل المعارض والأحداث ومتعلقاتها.",
    ],
  },
  {
    title: "شحن البضائع",
    description: [
      "النقل والتوصيل الداخلي.",
      "FCL/LCL خدمات .",
      "خدمات الوساطة الجمركية.",
      "إدارة البضائع الخطرة.",
      "نقل البضائع السائلة وغير المتماسكة كالأتربة.",
    ],
  },
  {
    title: "لوجستيات",
    description: [
      "خدمات لوجستية كاملة بما في ذلك التأمين والتخليص الجمركي.",
      "البضائع الضخمة والثقيلة والمعقدة.",
      "شحن متعدد الوسائط.",
      "تحريك وحدات ونماذج معينة.",
    ],
  },
];
const cards = document.getElementById("cards");

const showInHtml = services
  .map((service, index) => {
    const title = service.title;
    return `<div class="service_card">
   
  <p class="card_title" id="title">${title}</p>
</div>`;
  })
  .join("");

cards.innerHTML = showInHtml;
