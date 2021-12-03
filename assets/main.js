// Datatable Setting
$(document).ready( function () {
    $('#table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/tr.json'
        }
    });
} );

// Veri çekme
let data = fetch("")
.then(respons=>respons.json())
.then(veri => {
})

// Veri Yazdırma
$(".for").html("");
for (index = 0; index < 150; index++) {
    var mod = index % 2;
    if (  mod == 0 ) {
        $(".for").append(`
        <tr class="working">
                <td>`+index+`</td>
                <td>0</td>
                <td>3.12.2021 01:18</td>
                <td><span class="statu">Çalışıyor</span></td>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate aliquam possimus deleniti porro eius pariatur voluptatibus placeat nostrum aperiam autem sapiente enim, iste id aliquid ratione consectetur velit, magni ullam?</td>
                <td>
                    <button class="success">buton</button>
                    <button class="warning">buton</button>
                    <button class="danger">buton</button>
                </td>
            </tr>
        `);
    }else {
        $(".for").append(`
        <tr class="set">
                <td>`+index+`</td>
                <td>0</td>
                <td>3.12.2021 01:18</td>
                <td><span class="statu">Atandı</span></td>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate aliquam possimus deleniti porro eius pariatur voluptatibus placeat nostrum aperiam autem sapiente enim, iste id aliquid ratione consectetur velit, magni ullam?</td>
                <td>
                    <button class="success">buton</button>
                    <button class="warning">buton</button>
                    <button class="danger">buton</button>
                </td>
            </tr>
        `);
    }

}