const feature_list = document.querySelector(".feature_list");
const list_company = document.querySelector(".list_company");
const list_feature = document.querySelector(".list_feature");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const nav_button = document.querySelector(".nav_button");
const components = document.querySelector(".components");
const close_button = document.querySelector(".close_button");

features.addEventListener(`click`, () =>{
    list_feature.classList.toggle("dropDown");
})

company.addEventListener(`click`, () =>{
    list_company.classList.toggle("dropDown");
})

nav_button.addEventListener(`click`, () =>{
  components.classList.toggle("dropDown");
})

close_button.addEventListener(`click`, () => {
    components.classList.remove("dropDown");
})


