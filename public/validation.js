/*global $*/

$(function() {
    $('button[type="submit"]').prop('disabled', true)
    $('input:file').on('change', function() {
        if (!this.files[0]) {
            $(this).css('background-color', 'white')
            $('button[type="submit"]').prop('disabled', true)
            $('.form-group').removeClass('has-error')
            $('.message').html('Choose a file to upload')
        }
        else if (this.files[0].size > 10500000) {
            $(this).css('background-color', '#fcf8e3')
            $('button[type="submit"]').prop('disabled', true)
            $('.form-group').addClass('has-error')
            $('.message').html('File size is greater than 10Mb')
        } else {
            $(this).css('background-color', '#dff0d8')
            $('button[type="submit"]').prop('disabled', false)
            $('.form-group').removeClass('has-error')
            $('.message').html('Press Upload button')
        }
    })
})