 $("#clientes").submit(function(){
        var referencia = $("#referencia").val();
        $.post(path+"/extrato/verificarExtratoLancamento/"+referencia,function(data){
            if(data){
                var alerta = "S\u00f3 permitindo cancelamento quando extrato ref. [EXTRATO] n\u00e3o est\u00e1 compensado!"
                alert(alerta.replace('[EXTRATO]',data));
                location.href = host + "contaspagar";
            }else{
                return true;
            }
        });
    return false;
});