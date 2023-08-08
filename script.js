
$( document ).ready(function() {

    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onloadend = () => {
                resolve(reader.result);
            };
        });
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }


    $(".file-input").on("change", async function(){
        const file = $(this).prop('files');
        
        $(".file-name").text(file[0].name)
   


        const valueBase64 = await getBase64(file[0])
        const encoded = valueBase64.toString().replace(/^data:(.*,)?/, '');
        const finalValue = atob(encoded)

        $("#download-btn").css("display", "block");
        $("#audio-player").css("display", "block");

        $("#audio-player").attr("src", finalValue);
        $("#download-btn").attr("href", finalValue);
    })
});