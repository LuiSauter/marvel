"use strict";
// const button = document.getElementById("button");
const select = document.getElementById("select");
const form = document.getElementById("form");
/**
 * LIBRERIA AXIOS
 * <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
 * debe estar por encima de cualquier script
 */ 
form.addEventListener("change",(e) => {
    if (e.target.value == 'male') {
        getData('Hombre');
    } else if (e.target.value == 'female') {
        getData('Mujer');
    } else {
        getData('All')
    }
});

const getData = (gender) => {
    form.addEventListener("submit",(e) => {
        e.preventDefault();
        axios({
            method: "GET",
            url: "db/data.json"
        }).then(res => {
            const fragment = document.createDocumentFragment();
            const container = document.getElementById('container');
            // console.log(res.data[1].data.Gender);
            // console.log(gender);
            for (const userInfo of res.data[1].data) {
                // console.log(userInfo.Gender);
                    if (gender === userInfo.Gender && userInfo.Gender === gender){
                        console.log(res.data[1].data);
                        const containItem = document.createElement("DIV");
                        containItem.classList.add('grid-container__item');
                        const img = document.createElement("IMG");
                        img.setAttribute("src", userInfo.Img)
                        containItem.appendChild(img)
                        fragment.appendChild(containItem);
                    } else if (gender === 'All') {
                        const containItem = document.createElement("DIV");
                        containItem.classList.add('grid-container__item');
                        const img = document.createElement("IMG");
                        img.setAttribute("src", userInfo.Img)
                        containItem.appendChild(img)
                        fragment.appendChild(containItem);
                    }
                }
            container.appendChild(fragment);
        }).catch(err => console.log(err));
    })
    
}