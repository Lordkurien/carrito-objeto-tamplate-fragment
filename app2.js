
const lista = document.querySelector("#lista");

const arrayPaises = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment();

const liTemplate = document.querySelector("#liTemplate");

arrayPaises.forEach((pais) => {
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector("span").textContent = pais 

    fragment.appendChild(clone)


})

lista.appendChild(fragment)
// const clone = liTemplate.content.cloneNode(true);



// clone.querySelector(".text-primary").textContent = "agregue por template"

// lista.appendChild(clone)