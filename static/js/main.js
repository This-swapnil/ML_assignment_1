
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var CRIM = $('.validate-input input[name="CRIM"]');
    var ZN = $('.validate-input input[name="ZN"]');
    var INDUS = $('.validate-input input[name="INDUS"]');
    var CHAS = $('.validate-input input[name="CHAS"]');
    var NOX = $('.validate-input input[name="NOX"]');
    var RM = $('.validate-input input[name="RM"]');
    var AGE = $('.validate-input input[name="AGE"]');
    var DIS = $('.validate-input input[name="DIS"]');
    var RAD = $('.validate-input input[name="RAD"]');
    var TAX = $('.validate-input input[name="TAX"]');
    var B = $('.validate-input input[name="B"]');
    var LSTAT = $('.validate-input input[name="LSTAT"]');


    $('.validate-form').on('submit', function () {
        var check = true;

        if ($(CRIM).val().trim() == '') {
            showValidate(CRIM);
            check = false;
        }

        if ($(ZN).val().trim() == '') {
            showValidate(ZN);
            check = false;
        }

        if ($(INDUS).val().trim() == '') {
            showValidate(INDUS);
            check = false;
        }

        if ($(CHAS).val().trim() == '') {
            showValidate(CHAS);
            check = false;
        }

        if ($(NOX).val().trim() == '') {
            showValidate(NOX);
            check = false;
        }

        if ($(RM).val().trim() == '') {
            showValidate(RM);
            check = false;
        }

        if ($(AGE).val().trim() == '') {
            showValidate(AGE);
            check = false;
        }

        if ($(DIS).val().trim() == '') {
            showValidate(DIS);
            check = false;
        }

        if ($(RAD).val().trim() == '') {
            showValidate(RAD);
            check = false;
        }

        if ($(TAX).val().trim() == '') {
            showValidate(TAX);
            check = false;
        }

        if ($(B).val().trim() == '') {
            showValidate(message);
            check = false;
        }

        if ($(LSTAT).val().trim() == '') {
            showValidate(LSTAT);
            check = false;
        }



        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);