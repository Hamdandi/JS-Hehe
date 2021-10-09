var stock       = 10;
var barangbagus = 6;
 

for (var pemasok = 1; pemasok <= stock; pemasok++){
    
    if (pemasok <= 6){
        console.log('barang bagus No .' + pemasok + ' merupakan barang BAGUS')
    }else if (pemasok == 8 || pemasok == 10){
        console.log('barang bagus No .' + pemasok + ' barang sedang di PROSES')
    }else {
        console.log('barang bagus No .' + pemasok + ' merupakan barang kurang BAGUS')
    }

}


