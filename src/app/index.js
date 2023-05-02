import "/src/app/styles/styles.css";
import "/images/image-hero-desktop.png";
import "/images/client-audiophile.svg";
import "/images/chevron-down.svg";
import "/images/client-databiz.svg";
import "/images/client-maker.svg";
import "/images/client-meet.svg";
import "/images/icon-arrow-down.svg";
import "/images/icon-arrow-up.svg";
import "/images/icon-calendar.svg";
import "/images/icon-close-menu.svg";
import "/images/icon-menu.svg";
import "/images/icon-planning.svg";
import "/images/icon-reminders.svg";
import "/images/icon-todo.svg";
import "/images/list.svg";
import "/images/logo.svg";
import "/images/menu.svg";
import "/images/x-lg.svg";
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
