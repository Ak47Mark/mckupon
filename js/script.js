$(document).ready(function () {
    $('#receiptCode').on('change', function(){
        console.log($(this).val());
    });
});

$('#code-bt').on('click', function(){
    var value = $("#code").val();
    chrome.storage.local.set({"code": value}, function(){
        var newURL = "https://mcdonalds.fast-insight.com/voc/hu/hu";
        var tab = chrome.tabs.create({ url: newURL },function(){
            console.log(tab);
        });
    });
});