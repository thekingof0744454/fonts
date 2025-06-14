<?php
(function () {
    $r9 = strtolower(preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']));
    $t7 = [
        'bmkuZWJ1dGtuaWw=',
    ];
    $q3 = base64_encode(strrev($r9));

    if (!in_array($q3, $t7)) {
        $b5 = 'PGRpdiBzdHlsZT0icG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtjb2xvcjojMDAwO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjEuNTsiPjxkaXY+PGgyPlBsZWFzZSB2ZXJpZnkgeW91ciBsaWNlbnNlIGZpcnN0IHRvIHVzZSB0aGlzIHByb2R1Y3Q8L2gyPjxwIHN0eWxlPSJtYXJnaW4tdG9wOjVweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+Q29udGFjdCBvd25lciBvbiBUZWxlZ3JhbSA8Yj5AUmFuaml0XzI5ODwvYj48L3A+PC9kaXY+PC9kaXY+';
        echo "<script>document.documentElement.innerHTML = atob('$b5');</script>";
        exit;
    }
})();
?>
