
// وظيفة لإظهار/إخفاء العنصر عند النقر على الزر
document.getElementById('click-element').addEventListener('click', function (event) {
    var hiddenElement = document.getElementById('hidden-element');
    if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
        hiddenElement.style.display = 'block';
    } else {
        hiddenElement.style.display = 'none';
    }
    // إيقاف الحدث من الانتشار للأعلى في DOM
    event.stopPropagation();
});

// وظيفة لإخفاء العنصر عند النقر في أي مكان خارج القائمة
document.addEventListener('click', function (event) {
    var hiddenElement = document.getElementById('hidden-element');
    var clickElement = document.getElementById('click-element');

    // التحقق مما إذا كان النقر خارج العنصر المخفي وزر النقر
    if (hiddenElement.style.display === 'block' && !hiddenElement.contains(event.target) && !clickElement.contains(event.target)) {
        hiddenElement.style.display = 'none';
    }
});