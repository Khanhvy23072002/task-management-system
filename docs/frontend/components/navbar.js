function renderNavbar(activePage) {
    return `
        <div class="nav">
            <button onclick="go('dashboard')" class="${activePage==='dashboard'?'active':''}">Bảng điều khiển</button>
            <button onclick="go('room')" class="${activePage==='room'?'active':''}">Phòng</button>
            <button onclick="go('tenant')" class="${activePage==='tenant'?'active':''}">Người thuê</button>
            <button onclick="go('contract')" class="${activePage==='contract'?'active':''}">Hợp đồng</button>
            <button onclick="go('invoice')" class="${activePage==='invoice'?'active':''}">Hóa đơn</button>
        </div>
    `;
}

function go(page) {
    window.location.href = page + ".html";
}
