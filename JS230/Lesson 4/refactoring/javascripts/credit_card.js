function verifyCard(cc_number) {
    let odd_total = 0;
    let even_total = 0;
    cc_number = cc_number.split("").reverse();
    for (var i = 0, len = cc_number.length; i < len; i++) {
        if (i % 2 == 1) {
            cc_number[i] = (+cc_number[i] * 2) + "";
            if (cc_number[i].length > 1) {
                cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
            }
            else {
                cc_number[i] = +cc_number[i];
            }
            odd_total += cc_number[i];
        }
        else {
            even_total += +cc_number[i];
        }
    }
    return (odd_total + even_total) % 10 == 0
}