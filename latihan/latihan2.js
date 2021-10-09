var stock       = 10;
var barangbagus = 9;
var pemasok     = 1;
 
while ( pemasok <= barangbagus ) {
    console.log('stock NO .' + pemasok +' merupakan barang bagus') ;
    pemasok++ ;
}

for (pemasok = barangbagus + 1; pemasok <= stock; pemasok++){
    console.log('stock NO .' + pemasok + ' merpukan barang yang kurang bagus');

}
