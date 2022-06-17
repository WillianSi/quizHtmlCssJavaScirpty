//Array of objects

const quiz = [
    {
        q: ' Um exemplo de reciclagem é a utilização de:',
        options: ['garrafas de vidro retornáveis para cerveja ou refrigerante','latas de alumínio como material para fabricação de lingotes','embalagens plásticas vazias e limpas para acondicionar outros alimentos','garrafas PET recortadas em tiras para fabricação de cerdas de vassouras'],
        answer:1
    },

    {
        q: 'O que fazer com lixo eletrônico pilhas, baterias e equipamentos quebrados?',
        options: ['Recolher, organizar e armazenar em casa o máximo de tempo que der','Juntar com plásticos e metais','Jogar junto com “lixo” comum','Procurar locais específicos para seu descarte'],
        answer:3
    },

    {
        q: 'Para a coleta seletiva de lixo, os resíduos orgânicos, de plástico, de papelão e de vidro, são, respectivamente, descartados, em cestos de cor:',
        options: ['verde, amarelo, azul e marrom','amarelo, vermelho, marrom e azu','marrom, vermelho, azul e verde','vermelho, verde, amarelo e azul'],
        answer:2
    },

    {
        q: 'A alternativa que pareia corretamente o material com a cor do cesto é:',
        options: ['Рláѕtісо - Vеrdе; Меtаl - Аmаrеlо; Рареl - Vеrmеlhо; Vіdrо - Аzul; Оrgânісо - Маrrоm','Рláѕtісо - Аzul; Меtаl - Аmаrеlо; Рареl - Vеrmеlhо; Vіdrо - Vеrdе; Оrgânісо - Маrrоm','Рláѕtісо - Аmаrеlо; Меtаl - Маrrоm; Рареl - Vеrdе; Vіdrо - Vеrmеlhо; Оrgânісо - Аzu','Рláѕtісо - Маrrоm; Меtаl - Vеrdе; Рареl - Аzul; Vіdrо - Аmаrеlо; Оrgânісо - Vеrmеlhо','Nеnhumа dаѕ аntеrіоrеѕ'],
        answer:1
    },

    {
        q: 'Quanto tempo o vidro leva para se decompor na natureza?',
        options: ['300 anos','1000 anos','100 anos','O vidro não é biodegradável','3000 anos'],
        answer:3
    },

    {
        q: 'Assinale a alternativa que aponta corretamente os objetos que NÃO podem ser reciclados',
        options: ['Embalagem de salgadinho (plástico); papel celofane; prato Duralex (vidro); esponja de aço','Garrafa PET; papel sulfite; cacos de vidro; lata de refrigerante','Prato de isopor (plástico); papelão; frasco de perfume; papel alumínio','Embalagem de xampu; jornal; copo de requeijão (vidro); lacre','Todos acima são recicláveis'],
        answer:1
    },

    {
        q: 'Qual é o cuidado a ser tomado antes de enviar um determinado material para a reciclagem',
        options: ['Cortá-lo em pedaços pequenos','Misturá-lo com materiais do mesmo gênero','Limpá-lo','Colocá-lo numa sacola','Não deve haver cuidados especiais'],
        answer:2
    },

    {
        q: 'Quais são as consequências mais diretas do despejo inadequado do lixo?',
        options: ['Enchentes e doenças','Chuvas ácidas e o buraco na camada de ozônio','Extinção de algumas espécies de animais, plantas e bactérias','O vidro não é biodegradável','Esgotamento dos reservatórios de água no planeta e estiagem','Não há consequências'],
        answer:0
    },

    {
        q: 'Qual é a porcentagem do lixo que é reciclado no Brasil?',
        options: ['4%','17%','40%','22%','2%'],
        answer:4
    },

    {
        q: 'Qual é a cidade que mais produz lixo diariamente no Brasil?',
        options: ['Santos','São Paulo','Rio de Janeiro','Salvador','Vitória'],
        answer:1
    },

    {
        q: 'O lixo depositado nos aterros sanitários sofre a ação de larvas, vermes e microrganismos, resultando em sua decomposição. Todavia, como os materiais que formam o lixo são de natureza diversas, cada um deles terá um tempo de decomposição diferente.Dos materiais a seguir, qual deles necessitará do menor intervalo de tempo para ser decomposto?',
        options: ['A','B','C','D'],
        answer:3,
        img: 'img/imgQuest1.png'
    },

    {
        q: 'A figura, abaixo representa a possibilidade de reciclagem do papel utilizado pela população nas escolas, empresas e residências. Recomenda-se separar, para reaproveitamento, os papeis que são utilizados no dia a dia, ao invés de descarta-los na lixeira.',
        options: ['Diminui a taxa de oxigênio','Reduz a taxa da fotossíntese','Poupa o corte de árvores','Diminui a incidência de chuvas'],
        answer:2,
        img: 'img/imgQuest2.png'
    },

    {
        q: 'Observe os esquemas e responda. Qual das alternativas é uma das consequências do desmatamento.',
        options: ['poluição do ar','erosão do solo','poluição da água','adubação do solo'],
        answer:1,
        img: 'img/imgQuest3.png'
    },

    {
        q: 'O guarda municipal está mostrando para os alunos ações que ajudam a preservar o planeta.A ação que melhor representa o aproveitamento do lixo é:',
        options: ['economizar água','realizar a coleta seletiva para reciclagem','evitar o desperdício de energia elétrica','plantio de novas mudas'],
        answer:1,
        img: 'img/imgQuest4.png'
    },

    {
        q: 'São considerados resíduos orgânicos: ',
        options: ['Folhas, restos de alimentos e vidro','Galhos de árvores, restos de alimentos e cascas de frutas','Vidro, papel e alumínio','Restos de alimentos, galhos de árvores e alumínio'],
        answer:1
    },

    {
        q: 'O lixo destinado à reciclagem deve ser previamente separado. A utilização de lixeiras coloridas para este fim tem sido considerada mundialmente um sucesso. É incorreto dizer que:',
        options: ['Reutilizar contribui para o aumento da poluição','Reciclar é uma forma de preservar o planeta','Reaproveitar diminui a quantidade de lixo','Reaproveitar e reciclar são atitudes que melhoram a qualidade de vida na Terra'],
        answer:0
    },

    {
        q: 'Verifique se as atitudes respeitam o 3 R’s, e assinale a resposta correta',
        options: ['Utilizar sacolas de tecido','Não reutilizar sacolas plásticas','Não utilizar pilhas recarregáveis','Utilizar muitas sacolas plásticas'],
        answer:0
    },

    {
        q: 'Segundo o código de cores da seleção do lixo para a reciclagem, as lixeiras verde e vermelha são, respectivamente, utilizadas para:',
        options: ['Papel e plástico','Vidro e plástico','Papel e vidro','Metal e plástico'],
        answer:1,
        img: 'img/imgQuest5.png'
    },

    {
        q: 'O _________ é um dos principais problemas ambientais no Brasil que acontece desde a chegada dos portugueses em 1500. Das alternativas abaixo, a que preenche corretamente a lacuna é:',
        options: ['assoreamento','efeito estufa','desmatamento','empobrecimento do solo','uso de agrotóxicos'],
        answer:2
    },

    {
        q: 'A poluição radioativa é considerada um dos piores tipos de poluição, pois:',
        options: ['provoca o desmatamento da cobertura vegetal','acelera o processo de desertificação do planeta','utiliza elementos artificiais criados em laboratório','libera gases e elementos tóxicos na atmosfera','aquece os mares e os oceanos provocando a extinção de espécies'],
        answer:3
    }
]
