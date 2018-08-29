$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault()
        form = $('form')

        $.ajax({
            'url':'/ajax/newsletter/',
            'type': 'POST',
            'data': form.serialize(),
            'datatype':'json',
            'success': function(data){
                alert(data['success'])
            },
        })
        $('#id_your_name').val('') //clearing the name field
        $("#id_email").val('')  //clearing the email field
    })
})