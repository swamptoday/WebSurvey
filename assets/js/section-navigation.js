const main_section = document.querySelector('#main-section-href');
const more_section = document.querySelector('#more-section-href');
const survey_section = document.querySelector('#survey-section-href');
const footer_section = document.querySelector('#footer-section-href');

main_section.addEventListener('click', function(){
    if (!main_section.classList.contains("current-list-item")){
        main_section.classList.add("current-list-item");
    }
    if(more_section.classList.contains("current-list-item")){
        more_section.classList.remove("current-list-item");
    }
    if(survey_section.classList.contains("current-list-item")){
        survey_section.classList.remove("current-list-item");
    }
    if(footer_section.classList.contains("current-list-item")){
        footer_section.classList.remove("current-list-item");
    }
})

more_section.addEventListener('click', function(){
    if (main_section.classList.contains("current-list-item")){
        main_section.classList.remove("current-list-item");
    }
    if(!more_section.classList.contains("current-list-item")){
        more_section.classList.add("current-list-item");
    }
    if(survey_section.classList.contains("current-list-item")){
        survey_section.classList.remove("current-list-item");
    }
    if(footer_section.classList.contains("current-list-item")){
        footer_section.classList.remove("current-list-item");
    }
})

survey_section.addEventListener('click', function(){
    if (main_section.classList.contains("current-list-item")){
        main_section.classList.remove("current-list-item");
    }
    if(more_section.classList.contains("current-list-item")){
        more_section.classList.remove("current-list-item");
    }
    if(!survey_section.classList.contains("current-list-item")){
        survey_section.classList.add("current-list-item");
    }
    if(footer_section.classList.contains("current-list-item")){
        footer_section.classList.remove("current-list-item");
    }
})

footer_section.addEventListener('click', function(){
    if (main_section.classList.contains("current-list-item")){
        main_section.classList.remove("current-list-item");
    }
    if(more_section.classList.contains("current-list-item")){
        more_section.classList.remove("current-list-item");
    }
    if(survey_section.classList.contains("current-list-item")){
        survey_section.classList.remove("current-list-item");
    }
    if(!footer_section.classList.contains("current-list-item")){
        footer_section.classList.add("current-list-item");
    }
})

