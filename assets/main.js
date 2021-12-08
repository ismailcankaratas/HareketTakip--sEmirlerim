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
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-skip-start-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.71 5.093 7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z"/>
            </svg>
            Start
        </button>
        <button class="warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
            </svg>
            Pause
        </button>
        <button class="danger">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
            </svg>
            Finish
        </button>
        </div>
        </td>
    </tr>
        `);
    }else {
        $(".for").append(` 
        <tr class="set">
        <td>`+index+`</td>
        <td>0</td>
        <td>3.12.2021 01:18</td>
        <td><span class="statu">Tamamlandı</span></td>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-skip-start-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.71 5.093 7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z"/>
            </svg>
            Start
        </button>
        <button class="warning">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
            </svg>
            Pause
        </button>
        <button class="danger">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
            </svg>
            Finish
        </button>
        </div>
        </td>
    </tr>
        `);
    }

}

// POP-UP

$(".description svg").click(function() {
    $(".pop-up-wrapper ").css("display", "block");
})
$(".pop-up .close").click(function() {
    $(".pop-up-wrapper ").css("display", "none");

})
