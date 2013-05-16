function hitung(harga,id,jumlah){
	
	
	if(isNaN(jumlah)){
		alert('Jumlah harus angka');
		return;
	}
	
    //dapatkan nilai awal dari tabel kolom harga
    var old_value_harga = $("#harga_"+id).html()==""?0:$("#harga_"+id).html();
   
    //daptkan nilai awal total
     var total = $("#total").html() == ""?0:$("#total").html();
   
    //total dikurangi nilai awal kolom harga
    total-=old_value_harga;
  
    var calculate = parseInt(jumlah)*parseInt(harga);
    $("#harga_"+id).html(calculate);
    
    
   
    total = parseInt(total) + calculate;
    
    $("#total").html(total);  
    
}

function hapusRow(id){
	
	if(confirm('Apakah data barang ini akan dihapus?')){
		//dapatkan nilai awal dari tabel kolom harga
    var old_value_harga = $("#harga_"+id).html()==""?0:$("#harga_"+id).html();
   
    //daptkan nilai awal total
     var total = $("#total").html() == ""?0:$("#total").html();
	 total-=old_value_harga;
	 $("#total").html(total);
	  var cariDupe = $("#temp_id").val().split(",");
       
        var dupeLength = cariDupe.length;
       
        for(var i=0;i<dupeLength;i++){
          
            if(cariDupe[i]==id){
                cariDupe[i] = '';
            }
       }
	   
	   $("#temp_id").val(cariDupe.join(","));
       $("#row_"+id).remove();
		
	}
	
	
    
}

function checkDupe(id){
    
    if($("#temp_id").val()==""){
        $("#temp_id").val(id)
        return false
    }else{
        var cariDupe = $("#temp_id").val().split(",");
       
        var dupeLength = cariDupe.length;
       
        for(var i=0;i<dupeLength;i++){
          
            if(cariDupe[i]==id){
                return true
            }
        }
        
         $("#temp_id").val($("#temp_id").val()+","+id);
         return false;
    }
    
    
}