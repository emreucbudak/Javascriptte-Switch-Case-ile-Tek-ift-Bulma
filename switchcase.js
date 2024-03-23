let i;
let a;
for(i = 0 ; i<101 ; i++) {
    a = i%2;
    switch(a) {
        case 0:
            document.writeln("<br>Sayı Çift Sayı = " +i);
            break;
        case 1:
            document.writeln("<br>Sayı Tek Sayı = " + i);
            break;
    }
}