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
// $(".for").html("");
for (index = 0; index < 150; index++) {
    var mod = index % 2;
    if (  mod == 0 ) {
        $(".for").append(`
        <tr>
        <td>`+index+`</td>
        <td>0</td>
        <td>3.12.2021 01:18</td>
        <td><span class="statu Çalışıyor">Çalışıyor</span></td>
        <td>
            <div class="description">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box-arrow-up-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"/>
                    <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"/>
                  </svg>
            </div>
        </td>
        <td>
        <div class="buttons">
            <button class="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-skip-start-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
            </svg>
            Başla
        </button>
        <button class="danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
            </svg>
            Bitir
        </button>
        <button class="support">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
            </svg>
            Destek İste
        </button>
        </div>
        </td>
    </tr>
        `);
    }else {
        $(".for").append(` 
        <tr>
        <td>`+index+`</td>
        <td>0</td>
        <td>3.12.2021 01:18</td>
        <td><span class="statu Atandı">Atandı</span></td>
        <td>
            <div class="description">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box-arrow-up-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"/>
                    <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"/>
                  </svg>
            </div>
        </td>
        <td>
        <div class="buttons">
            <button class="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-skip-start-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
            </svg>
            Başla
        </button>
        <button class="danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
            </svg>
            Bitir
        </button>
        <button class="support">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
            </svg>
            Destek İste
        </button>
        </div>
        </td>
    </tr>
        `);
    }

}

// POP-UP

$(".description svg").click(function() {
    $("#description-popup").css("display", "block");
})
$(".close").click(function() {
    $(".pop-up-wrapper").css("display", "none");
})
$("#other-startbtn").click(function() {
    $("#other-popup").css("display", "block");
})

// ATANDI - ÇALIŞIYOR
$(".for .Atandı").parent().parent().addClass("set");
$(".for .Çalışıyor").parent().parent().addClass("working");

// Destek İste
$(".support").click(function() {
    $(this).html(`
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
    </svg>
    Destek Kapa
    `);
    $(this).css("background-color", "#023953");
})


//PROGRESS
var beklenenIsPercent = "95%";
var calisilanIsPercent = "50%";
var tamamlananIsPercent = "10%";
$("#beklenenIs").attr("style", "--percent:" + beklenenIsPercent);
$("#calisilanIs").attr("style", "--percent:" + calisilanIsPercent);
$("#tamamlananIs").attr("style", "--percent:" + tamamlananIsPercent);

// SCROLL

// $(document).scroll(function(scroll) {
//     var scrollTop = $(document).scrollTop();
//     console.log(scrollTop);
//     if ( scrollTop > 100 )
//     {
//         $(".aktif-is").css("position", "fixed");
//     }else {
//         $(".aktif-is").css("position", "relative");
//     }
    
// })