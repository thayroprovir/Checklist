<?php
// Recupera os dados do formulário
$empresa = $_POST['empresa'];
$ambiente = $_POST['ambiente'];

// Recupera as informações das funções e riscos adicionados dinamicamente
$funcoes = $_POST['funcao'];
$cbos = $_POST['cbo'];
$riscoNomes = $_POST['nomeRisco'];
$fontesRisco = $_POST['fonteRisco'];
$exposicoesRisco = $_POST['exposicaoRisco'];
$propagacoesRisco = $_POST['propagacaoRisco'];
$lesoesRisco = $_POST['lesoesRisco'];
$tiposAvaliacaoRisco = $_POST['tipoAvaliacaoRisco'];

// Monta o conteúdo do e-mail
$subject = "Checklist Provir Segurança Ocupacional - Dados";
$message = "Empresa: $empresa\n";
$message .= "Ambiente: $ambiente\n\n";

// Itera sobre as funções e riscos para adicionar ao conteúdo do e-mail
foreach ($funcoes as $i => $funcao) {
    $message .= "Função ".($i + 1).": $funcao\n";
    $message .= "CBO: $cbos[$i]\n";
    
    // Itera sobre os riscos para adicionar ao conteúdo do e-mail
    foreach ($riscoNomes[$i] as $j => $nomeRisco) {
        $message .= "Risco ".($j + 1).": $nomeRisco\n";
        $message .= "Fonte do Risco: $fontesRisco[$i][$j]\n";
        $message .= "Exposição do Risco: $exposicoesRisco[$i][$j]\n";
        $message .= "Meio de Propagação: $propagacoesRisco[$i][$j]\n";
        $message .= "Lesões: $lesoesRisco[$i][$j]\n";
        $message .= "Tipo de Avaliação: $tiposAvaliacaoRisco[$i][$j]\n\n";
    }
    $message .= "\n";
}

// Configurações do e-mail
$to = "administracao@clinicaporvir.com";
$headers = "From: checklist@clinicaporvir.com";

// Envia o e-mail
mail($to, $subject, $message, $headers);

// Criação do arquivo Excel
// Aqui você pode usar uma biblioteca como PHPExcel ou PHPSpreadsheet para gerar o arquivo Excel com os dados

// Redireciona de volta para a página principal
header("Location: index.html");
exit();
?>
