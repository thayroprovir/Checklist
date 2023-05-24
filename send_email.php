<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $empresa = $_POST["empresa"];
    $ambiente = $_POST["ambiente"];
    
    // Processar funções e riscos
    $funcoes = array();
    if (isset($_POST["funcao"])) {
        $funcaoCount = count($_POST["funcao"]);
        
        for ($i = 0; $i < $funcaoCount; $i++) {
            $funcao = $_POST["funcao"][$i];
            $riscos = array();
            
            if (isset($_POST["nomeRisco"][$i])) {
                $riscoCount = count($_POST["nomeRisco"][$i]);
                
                for ($j = 0; $j < $riscoCount; $j++) {
                    $nomeRisco = $_POST["nomeRisco"][$i][$j];
                    $fonteRisco = $_POST["fonteRisco"][$i][$j];
                    $exposicaoRisco = $_POST["exposicaoRisco"][$i][$j];
                    $propagacaoRisco = $_POST["propagacaoRisco"][$i][$j];
                    $lesaoRisco = $_POST["lesaoRisco"][$i][$j];
                    $tipoAvaliacaoRisco = $_POST["tipoAvaliacaoRisco"][$i][$j];
                    
                    $risco = array(
                        "nome" => $nomeRisco,
                        "fonte" => $fonteRisco,
                        "exposicao" => $exposicaoRisco,
                        "propagacao" => $propagacaoRisco,
                        "lesao" => $lesaoRisco,
                        "tipoAvaliacao" => $tipoAvaliacaoRisco
                    );
                    
                    if ($tipoAvaliacaoRisco == "quantitativo" && isset($_FILES["avaliacaoQuantitativa"][$i][$j])) {
                        // Processar o arquivo de avaliação quantitativa, se fornecido
                        $avaliacaoQuantitativa = $_FILES["avaliacaoQuantitativa"][$i][$j];
                        // Faça o processamento necessário do arquivo
                        // Por exemplo, mover o arquivo para um diretório específico e armazenar o caminho em $risco
                        
                        // Exemplo de movimentação do arquivo para um diretório (diretório deve existir)
                        $targetDirectory = "Ccaminha\anexo\";
                        $targetFilename = $targetDirectory . basename($avaliacaoQuantitativa["name"]);
                        
                        if (move_uploaded_file($avaliacaoQuantitativa["tmp_name"], $targetFilename)) {
                            $risco["avaliacaoQuantitativa"] = $targetFilename;
                        } else {
                            // Falha no upload do arquivo
                            // Lide com o erro de acordo com os requisitos do seu aplicativo
                        }
                    }
                    
                    $riscos[] = $risco;
                }
            }
            
            $funcaoItem = array(
                "funcao" => $funcao,
                "riscos" => $riscos
            );
            
            $funcoes[] = $funcaoItem;
        }
    }
    
    // Processar os dados como necessário
    
    // Exemplo de exibição dos dados recebidos
    echo "Empresa: " . $empresa . "<br>";
    echo "Ambiente.
