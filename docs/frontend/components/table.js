function renderTable(headers, rowCount) {
    let headHTML = headers.map(h => `<th>${h}</th>`).join("");

    let rows = "";
    for (let i = 0; i < rowCount; i++) {
        rows += "<tr>";
        for (let j = 0; j < headers.length; j++) {
            rows += `<td><input class="fake-input"></td>`;
        }
        rows += "</tr>";
    }

    return `
        <table>
            <tr>${headHTML}</tr>
            ${rows}
        </table>
    `;
}
