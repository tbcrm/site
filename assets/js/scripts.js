// data tables
var handleDataTableSelect = function() {
    "use strict";
    $('.data-table').DataTable({
        select: true,
        responsive: true,
        searching: true,
        paging: false
    });
    $('.data-table2').DataTable({
        select: true,
        responsive: true,
        searching: false,
        paging: false
    });
    $('.data-table3').DataTable({
        select: false,
        responsive: true,
        searching: false,
        paging: false
    });
    $('.data-table4').DataTable({
        select: false,
        responsive: false,
        searching: false,
        paging: false
    });
};
var TableManageTableSelect = function () {
    "use strict";
    return {
        //main function
        init: function () {
            handleDataTableSelect();
        }
    };
}();

$(document).ready(function(){

    // change status to SA - Reason select appears
    $('.footer-tabs select.type').on('change', function(){
        if ( $(this).find('option:selected').val() == 'sa' ) {
            $(this).next('.status2').removeClass('hidden');
        } else {
            $(this).next('.status2').addClass('hidden');
        }
    });

    // user update status select
    $('.modal-body table select.status').on('change', function(){
        var selectedValue = $(this).val();
        $(this).removeClass('accepted, rejected').addClass(selectedValue);
    })

    // evalution table tl request
    $('.evaluation-table .tl-request + div').hide();
    $('.evaluation-table .tl-request').on('click', function(){
        $(this).hide().next().fadeIn();
        return false;
    });

    // expand/collapse table row
    $('.expenses-table .table-cell .toggle').on('click', function(){
        $(this)
            .text($(this).text() == "+" ? "-" : "+")
            .parent().parent().toggleClass('expanded')
            .toggleClass('collapsed');
        return false;
    });

    // toggle between RTA and NRD
    $('.evaluation-table .toggle button').on('click', function(){
        $('.evaluation-table .toggle button.active').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    // google images grid
    var $cell = $('.image__cell');
    $cell.find('.image--basic .info').on('click', function() {
        var $thisCell = $(this).closest('.image__cell');
        if ($thisCell.hasClass('is-collapsed')) {
            $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
            $thisCell.removeClass('is-collapsed').addClass('is-expanded');
        } else {
            $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        }
        return false;
    });
    $cell.find('.expand__close').on('click', function() {
        var $thisCell = $(this).closest('.image__cell');
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    });

    // contact box toggles
    $('.contact-box .toggle').on('click', function(){
        $(this).toggleClass('collapse');
        $('.contact-box .expandable').slideToggle();
        return false;
    });
    $('.toggles a').on('click', function(){
        if ( $(this).hasClass('activated') ) {
            $(this).removeClass('activated');
        } else {
            $('.toggles a').removeClass('activated');
            $(this).addClass('activated');
        }
        return false;
    });

    // toggle team selector
    $('.team-selector .item').on('click', function(e){
        if ( !$(e.target).is("select") ) {
            $(this).toggleClass('active');
        }
    });

    // collapse statuses
    $('.footer-tabs .tab-content .head .right li.toggle a').on('click', function(){
        $(this).parent().parent().toggleClass('collapsed');
        return false;
    });

    // contact box progress - call
    $('.customer-details-cols .contact-type a.call, .contact-box .contact-active .status .contact-type a.call').on('click', function(){
        $('.contact-sms, .contact-mail').hide();
        $('.contact-box .contact-active.contact-call-2').removeClass('active').hide();
        $('.contact-box').show();
        $('.contact-call-1').show();
        return false;
    });
    // contact box progress - sms
    $('.customer-details-cols .contact-type a.message, .contact-box .contact-active .status .contact-type a.message').on('click', function(){
        $('.contact-call, .contact-mail').hide();
        $('.contact-box .contact-active.contact-sms-2').removeClass('active').hide();
        $('.contact-box').show();
        $('.contact-sms-1').show();
        return false;
    });
    // contact box progress - mail
    $('.customer-details-cols .contact-type a.email, .contact-box .contact-active .status .contact-type a.email').on('click', function(){
        $('.contact-call, .contact-sms').hide();
        $('.contact-box .contact-active.contact-mail-2').removeClass('active').hide();
        $('.contact-box').show();
        $('.contact-mail-1').show();
        return false;
    });
    // contact box results
    $('.selectContactResult').on('change', function(){
        if ($(this).val() === 'none') {
            $(this).parent().next().find('.contact-inprogress').show()
                .next().hide();
        } else {
            $(this).parent().next().find('.contact-inprogress').hide()
                .next().show();
                if ( $(this).hasClass('call') ) {
                    $('.contact-box .contact-call').addClass('active');
                } else if ( $(this).hasClass('sms') ) {
                    $('.contact-box .contact-sms').addClass('active');
                } else if ( $(this).hasClass('mail') ) {
                    $('.contact-box .contact-mail').addClass('active');
                }
        }
    });
    // contact call, sms, mail
    $('.contact-box .contact-active .status .btn.end.send').on('click', function(){
        $(this).parent().parent().hide().next().show();
        return false;
    });
    // contact end
    $('.contact-box .contact-active .status .btn.end.contact').on('click', function(){
        $('.contact-box > div').not('.contact-comments').hide();
        $('.contact-box .contact-history').removeClass('active');
        $('.contact-conclusion').show();
        return false;
    });
    // remove employee
    $('.contact-box .contact-conclusion .names a.remove').on('click', function(){
        $(this).parent().fadeOut();
        return false;
    });
    // overview save script template
    $('.contact-box .contact-template .toolbar .buttons > a.save, .contact-box .contact-comments .comment > a.save ').on('click', function(){
        $(this).hide().next('.save-field').css('display','inline-block');
        return false;
    });
    $('.contact-box .contact-template .toolbar .buttons .save-field a.save, .contact-box .contact-comments .comment .save-field a.save ').on('click', function(){
        $(this).parent().hide().prev('.save').show();
        return false;
    });

    // custom scrollbar
    $(window).on('load',function(){
        $('.customscroll').mCustomScrollbar({
            alwaysShowScrollbar: 1
        });
    });

    // infinite tabs
    $('.infinite-tabs .list a').on('click',function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        var subStr = $(this).attr('href').substring(1);
        var clickedTab = '.tab.' + subStr;
        $(clickedTab).addClass('active').siblings().removeClass('active');
        return false;
    });

    // tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // presets
    $('.caption h2 a').on('click', function(){
        $('.caption-expand').slideToggle();
        return false;
    });

    // FILTERS & SORTING
    $('.group-sort .filters a').on('click', function() {
        $('.group-sort-expand').slideToggle();
        $('.caption .status').hide();
        $('.caption .status-changed').show();
        return false;
    });
    // close options
    $('.group-sort-expand li .close').on('click', function(){
        $(this).parent().fadeOut();
        return false;
    });
    // make them sortable
    $('.sortable').sortable({
        cancel: '.add'
    });
    // add new column
    $('.group-sort-expand .columns li.add a').on('click', function(){
        $('.group-sort-expand .columns .sort-list').hide().next().show();
        return false;
    });
    // cancel new column
    $('.group-sort-expand .columns .sort-add .cancel').on('click', function(){
        $('.group-sort-expand .columns .sort-list').show().next().hide();
        return false;
    });
    // add new filter
    $('.group-sort-expand .filters li.add a').on('click', function(){
        $('.group-sort-expand .filters .filters-list').hide().next().show();
        return false;
    });
    // cancel new column
    $('.group-sort-expand .filters .filter-add .cancel').on('click', function(){
        $('.group-sort-expand .filters .filters-list').show().next().hide();
        return false;
    });

    // populate overall row count of data tables
    $('.table-responsive').each(function(){
        $(this).parent().prev('.table-caption')
            .find('.options').find('.selected').find('.all')
                    .html(
                        $(this).find('tbody tr').length
                    )
            .parent().parent().parent()
                .find('h3 span')
                .html(
                    $(this).find('tbody tr').length
                )
    });
    // update table selected rows
    $('.table-responsive').on('click', function(){
        $(this).parent().prev('.table-caption').find('.options').find('.selected').find('.count').html(
            $(this).find('.data-table').DataTable().rows('.selected').data().length
        )
        // $(this).parent().parent().parent().prev().find('.options').find('.selected').find('.all').html(
        //     $(this).DataTable().rows().data().length
        // )
    });

    // toggle named tables
    $('.table-caption h3.named a').on('click', function(){
        $(this).parent().parent().next().toggle();
        var text = $(this).next('i').text();
        $(this).next('i').text( text == 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up' );
        return false;
    });

    // datepicker
    $('.datepicker').datepicker({
        autoclose: true,
        format: "dd-M-yyyy"
    });

    // remove filter
    $('.cases-filters .names a.remove').on('click', function(){
        $(this).parent().fadeOut();
        return false;
    });

    // remove st owner
    $('.footer-tabs .tab-content .top .leftside .field a.remove').on('click',function(){
        $(this).parent().fadeOut();
        return false;
    });

    // remove footer tab
    $('.footer-tabs .nav-tabs>li .remove').on('click',function(e){
        e.stopPropagation();
        $(this).parent().fadeOut();
    });

    // approve or discard buttons
    $('.tab-content .leftside .doc-list .item .left .status a').on('click',function(){
        $(this).parents('.item').fadeOut();
        return false;
    });
    // good or bad buttons
    $('.tab-content .leftside .doc-list .item .left .type a').on('click',function(){
        $(this).parents('.item').fadeOut();
        return false;
    });

    // show hidden phones/emails
    $('.customer-details-cols a.showall').on('click', function(){
        $(this).toggleClass('active').parent().next('.list')
            .toggleClass('expanded').toggleClass('collapsed');
        return false;
    });

    // split body with options
    $('.newcase .btn-options').on('click', function(){
        $('.content').toggleClass('split');
        return false;
    });
    // close sidebar
    $('.content .split-left .close').on('click', function(){
        $('.content').removeClass('split');
        return false;
    });

    // EDITABLE FIELDS
    // select focus
    let initialSelectText;
    let finalSelectText;
    $('.editable.select').on('dblclick', function(){
        initialSelectText = $(this).text();
        $(this).hide().next().show().focus();
    });
    // select blur
    $('.editable-select').on('blur', function(){
        finalSelectText = $(this).find('option:selected').text();
        if ( initialSelectText != finalSelectText ) {
            $(this).hide().prev().show().text(finalSelectText).addClass('edited');
        } else {
            $(this).hide().prev().show().text(finalSelectText);
        }
    });
    // textarea focus
    let initialTextareaText;
    let editableTextareaHeight;
    let finalTextareaText;
    $('.editable.textarea').on('dblclick', function(){
        initialTextareaText = $(this).text();
        editableTextareaHeight = $(this).height() + 'px';
        $(this).hide()
            .next().css('height',editableTextareaHeight).val(initialTextareaText).show().focus();
    });
    // textarea blur
    $('.editable-textarea').on('blur', function(){
        finalTextareaText = $(this).val();
        if ( initialTextareaText != finalTextareaText ) {
            $(this).hide().prev().text(finalTextareaText).show().addClass('edited');
        } else {
            $(this).hide().prev().text(finalTextareaText).show();
        }
    });
    // text focus
    let initialInputText;
    let editableInputWidth;
    let finalInputText;
    $('.editable.text').on('dblclick', function(){
        initialInputText = $(this).text();
        editableInputWidth = $(this).width() + 7 + 'px';
        $(this).hide().next().css('width', editableInputWidth).val(initialInputText).show().focus();
    });
    // text blur
    $('.editable-text').on('blur', function(){
        if ( !$(this).hasClass('date') ) {
            finalInputText = $(this).val();
            if ( initialInputText != finalInputText ) {
                $(this).hide().prev().text(finalInputText).show().addClass('edited');
            } else {
                $(this).hide().prev().text(finalInputText).show();
            }
        }
    });
    // date change
    $('.editable-text.date').on('change', function(){
        finalInputText = $(this).val();
        if ( initialInputText != finalInputText && finalInputText ) {
            $(this).hide().prev().text(finalInputText).show().addClass('edited');
        } else if ( initialInputText != finalInputText && !finalInputText ) {$(this).hide().prev().text(initialInputText).show();
        } else {
            $(this).hide().prev().text(finalInputText).show();
        }
    });

    // accordion
    $('.accordion .item .item-title a').on('click', function(){
        if ( $(this).parent().parent().hasClass('active') ) {
            $(this).parent().parent().removeClass('active')
                .find('.item-body').first().slideUp();
        } else {
            $(this).parent().parent().siblings().removeClass('active')
                .find('.item-body').slideUp();
            $(this).parent().parent().addClass('active')
                .find('.item-body').first().slideDown();
        }
        return false;
    });

    $('.accordion .item.sub .item-title').on('click', function(){
        $(this).parents('.tpl-list').removeClass('in');
        return false;
    });

    // filter collapse/expand
    $('h3.accordion').on('click', function(){
        $(this).toggleClass('active');
        if ( $(this).parent().parent().next('.collapsible').hasClass('open') ) {
            $(this).parent().parent().next('.collapsible').removeClass('open').slideUp();
        } else {
            $(this).parent().parent().next('.collapsible').addClass('open').slideDown();
        }
    });

    // form toggler
    $('.toggler').on('click', function(){
        $(this).toggleClass('active');
    });

    // expandable box
    $('.section.expandable .title a').on('click',function(){
        $(this).parent().parent().next('.box').slideToggle();
        return false;
    });

    // new MultipleSelect
    $('.multipleSelect').fastselect({
        placeholder: 'Select one or more'
    });

    // On/Off switch
    $('.section .title .switch').on('click',function(){
        var switchText = $('.section .title .switch .onoff').text();
        $('.section .title .switch .onoff').text(
            switchText == "On" ? "Off" : "On"
        );
        return fase;
    });

    // checkbox dropdown
    $('.checkbox-dropdown .drop').on('click', function(){
        $(this).next().next('.list').show();
        return false;
    });
    // hide checkbox dropdown when done
    $('.checkbox-dropdown button').on('click', function(){
        $(this).parent().parent().parent().hide();
        return false;
    });
    // selecting checkboxes
    $('.checkbox-dropdown input').on('change', function(){
        // checking a checkbox
        if ( $(this).is(':checked') ) {
            $(this).parent().addClass('active');
            if ( $(this).parent().hasClass('active') ) {
                var clickedValue = $(this).attr('value');
                var appendixStart = '<span class="' + clickedValue + '">';
                var clickedCheckbox = $(this).next('span').html();
                var appendixEnd = '<a href="#" class="btn-close">&times;</a></span>';
                var fullAppend = appendixStart + clickedCheckbox + appendixEnd;
                $(this).parent().parent().parent().parent()
                    .prev().prev('.drop').hide().next('.chosen').show().append(fullAppend);
            }
        // unchecking a checkbox
        } else {
            $(this).parent().removeClass('active');
            var clickedValue = '.' + $(this).attr('value');
            // remove checkbox item
            if ( $(this).parent().parent().parent().parent()
                    .prev('.chosen').find('span').length == 1 ) {
                $(this).parent().parent().parent().parent()
                    .prev('.chosen').hide().prev('.drop').show();
            }
            $('.checkbox-dropdown .chosen').find(clickedValue).remove();
        };
    });
    // remove added checkbox
    $('body').on('click', '.checkbox-dropdown .chosen span a', function(){
        var removedCheckbox = 'input[value= ' + $(this).parent().attr('class') + ']';
        $(this).parent().parent().next('.list').find('ul').find('li').find(removedCheckbox).click();
        if ( $(this).parent().parent().find('span').length == 1 ) {
            $(this).parent().parent().hide().prev('.drop').show();
        }
        $(this).parent().remove();
        return false;
    });

    // fixed floating element
    // var stickyEl = $('.footer-tabs.sticky');
    // var stickyElWidth = stickyEl.width() + 'px';
    // // store the initial position of the element
    // var vTop = stickyEl.offset().top - parseFloat(stickyEl.css('margin-top').replace(/auto/, 0));
    // $(window).scroll(function (event) {
    //     // what the y position of the scroll is
    //     var y = $(this).scrollTop();

    //     // whether that's below the form
    //     if (y >= vTop) {
    //     // if so, ad the fixed class
    //     stickyEl.addClass('stuck').css('width',stickyElWidth);
    //     } else {
    //     // otherwise remove it
    //     stickyEl.removeClass('stuck');
    //     }
    // });

});

    //drawer menu
    function openNav(koeDaOtvorya) {
        if(koeDaOtvorya==='case') {
            document.getElementById("rightMenuAssign").style.width = "0";
            document.getElementById("rightMenu").style.width = "350px";
            $("button[name=assignTo]").removeClass("active");
            $("button[name=checkCase]").addClass("active");
        } else if (koeDaOtvorya==='assign') {
            document.getElementById("rightMenu").style.width = "0";
            document.getElementById("rightMenuAssign").style.width = "350px";
            $("button[name=checkCase]").removeClass("active");
            $("button[name=assignTo]").addClass("active");
        }
        document.getElementById("content").style.marginRight = "350px";
    }

    function closeNav(koeDaZatvorya) {
        if(koeDaZatvorya==='case') {
            document.getElementById("rightMenu").style.width = "0";
            $("button[name=checkCase]").removeClass("active");
        } else if (koeDaZatvorya==='assign') {
            document.getElementById("rightMenuAssign").style.width = "0";
            $("button[name=assignTo]").removeClass("active");
        }
        document.getElementById("content").style.marginRight= "0";
    }