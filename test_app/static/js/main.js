$(document).ready(function () {
//стандартный код инициализации запросов в ajax
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            function getCookie(name) {
                var cookieValue = null;
                if (document.cookie && document.cookie != '') {
                    var cookies = document.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = jQuery.trim(cookies[i]);
                        if (cookie.substring(0, name.length + 1) == (name + '=')) {
                            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                            break;
                        }
                    }
                }
                return cookieValue;
            }

            if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                // Only send the token to relative URLs i.e. locally.
                xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
            }
        }
    });
});

$('.js-go-to-theme').on('click', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $('.js-get-template').load('test/'+$(this).data('id'));
});

$('.js-go-create-question').on('click', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $('.js-get-template').load('create_question/');
});


$('.js-go-create-theme').on('click', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $('.js-get-template').load('create_theme/');
});


$('.js-go-login').on('click', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $('.js-get-template').load('login/');
});


$('.js-go-home').on('click', function (e) {
    e.preventDefault();
    $('body').load('/');
});


$('.js-registration').on('click', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $('.js-get-template').load('regme/');
});


$('.js-change-element').on('click', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $('.js-get-template').load('change_theme/'+$(this).data('id'));
});


$('.js-show-results').on('click', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $('.js-get-template').load('results/');
});


$('.js-delete-element').on('click', function (e) {
    e.preventDefault();
    $.ajax({
            type: "POST",
            url: 'delete_theme/' + $(this).data('id') + "/",
            data: {},
            success: function () {
                    $('body').load('/');
            },
            error: function (error) {
                console.log(error);
            }
        });
});


$(document, '.js-go-create-question').on('click', '.js-question-create', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $.ajax({
            type: "POST",
            url: 'create_question/',
            data: $(this).parents().serialize(),
            success: function () {
                    $('body').load('/');
            },
            error: function () {
                console.log('no');
            }
        });
});


$(document, '.js-go-create-theme').on('click', '.js-theme-create', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $.ajax({
            type: "POST",
            url: 'create_theme/',
            data: $(this).parents().serialize(),
            success: function () {
                    $('body').load('/');
            },
            error: function () {
                console.log('no');
            }
        });
});


$(document, '.js-form-theme-change').on('click', '.js-theme-change', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $.ajax({
            type: "POST",
            url: 'change_theme/' + $(this).data('id') + "/",
            data: $(this).parents().serialize(),
            success: function () {
                    $('body').load('/');
            },
            error: function () {
                console.log('no');
            }
        });
});

$(document, '.js-form-user-create').on('click', '.js-user-create', function (e) {
    e.preventDefault();
    $('.js-to-hide').hide();
    $.ajax({
            type: "POST",
            url: 'regme/',
            data: $(this).parents().serialize(),
            success: function () {
                    $('body').load('/');
            },
            error: function () {
                console.log('no');
            }
        });
});


$(document, '.js-go-to-theme').on('click', '.js-answer', function (e) {
    $().load('');
    e.preventDefault();
    var arr_ans=[];
    var arr_right=[];
    var fall=0;
    $('label').each(function () {
        if ($(this).children().prop('checked') && $(this).text()[$(this).text().search('д')]+$(this).text()[$(this).text().search('а')] =='да'){
            arr_ans.push('да')
        }else if($(this).children().prop('checked') && $(this).text()[$(this).text().search('н')]+$(this).text()[$(this).text().search('е')] =='не'){
            arr_ans.push('нет')
        }
    });
    $(this).parents().find('.js-right-answer').each(function () {
        arr_right.push($(this).text());
    });
    if (arr_ans.length < arr_right.length){
        alert("Ответьте на все вопросы")
    }else{
    arr_ans.forEach(function(array, index){
        if(arr_ans[index]!=arr_right[index]){
            fall+=1;
        }
    });
//    $('.js-create-result').load('create_result/');
//    $('.js-add-which-user').val($(this).parents().find('.js-create-result').data('user'));
//    $('.js-add-result').val(fall);
    $.ajax({
        type: "POST",
        url: 'create_result/',
        data: { which_user: $(this).parents().find('.js-create-result').data('user'), result: fall, test_name: $(this).parents().find('.js-create-result').data('testname') },
        success: function () {
                $('body').load('/');
        },
        error: function () {
            console.log('no');
        }
    });
    if (fall) {
        alert("Неправильных ответов: " + fall)
    }else{
        alert("Поздравляем у Вас нет ошибок")
    }
        $('body').load('/');
        }
});