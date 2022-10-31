const description = document.getElementById("description");
console.log(services);
const showDescription = services
  .map((service, index) => {
    return `<div class="service_section" >
  
  <div class="service_title">
  <span >${
    service.title
  }</span><i class="fa-sharp fa-solid fa-angles-left" class="arrow_icon"></i></div>
  <ul class="list">
  ${service.description
    .map((item) => {
      return `<li class="note" >${item}</li>`;
    })
    .join("")}</ul>
</div>`;
  })
  .join("");

description.innerHTML = showDescription;
