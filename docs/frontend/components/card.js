function renderCard(title, id, value="", readonly=false) {
    return `
        <div class="box">
            <p>${title}</p>
            <input 
                id="${id}" 
                value="${value}" 
                class="fake-input"
                ${readonly ? "readonly" : ""}
            >
        </div>
    `;
}
