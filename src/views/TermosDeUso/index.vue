<template>
  <div>
    <div class="container-fluid">
      <div class="row py-3">
        <preload v-show="preload"></preload>
        <topo-mybp :dadosempresa="empresa" v-if="!preload"></topo-mybp>
        <navbar-mybp v-if="!preload"></navbar-mybp>
      </div>
    </div>

    <div class="container" v-if="!preload">
      <div class="row">
        <div class="col-12 mb-3">
          <h3>TERMOS DE USO</h3>

          <p style="font-size: 1rem; line-height: 2.5rem; word-spacing: 0.3rem; text-align: justify">
            <strong>1. RELAÇÃO NEGOCIAL ESTABELECIDA POR ESTES TERMOS E CONDIÇÕES DE USO</strong>
            <br>
            Estes Termos e Condições de Uso (“Termos”) estabelecem regras e condições aplicáveis a todos os usuários, seja
            usuário pessoa física, conforme identificado em cadastro (“Candidato”); seja usuário pessoa jurídica e seus
            representantes (“Empresa”), em conjunto denominados tão somente como “Usuário”, que acessam ou utilizam a
            aplicação de internet disponibilizada para conectar empresas ofertantes de Vagas de trabalho a candidatos
            nelas interessados (“MyBP” ou “Plataforma”), a qual é operada e administrada por BPSE BUSINESS PARTNERS
            SERVICOS EMPRESARIAIS EIRELI, pessoa jurídica de direito privado, inscrita no CNPJ nº. 22.055.835/0001-81
            (“BPSE”).
            <br>
            1.1. Estes Termos se aplicam ao Usuário da MyBP, com o propósito de estabelecer as regras que devem ser
            obedecidas ao utilizar a aplicação e os serviços prestados pela BPSE (“Serviços”).
            <br>
            1.2. Ao utilizar, de qualquer forma, os Serviços, o Usuário concorda com estes Termos, declarando estar ciente
            de que, caso não concorde com o teor deste documento, não deverá acessar nem utilizar os Serviços.
            <br>
            1.3. O Usuário declara que efetua a adesão a estes Termos pessoalmente, por seu representante legal
            validamente constituído ou por procurador a quem foram outorgados os poderes necessários para tanto.
            <br>
            1.4. Estes Termos podem ser alterados a qualquer momento, sem a necessidade de autorização prévia do Usuário.
            Assim, o Usuário deverá verificar os Termos, pelo menos, a cada utilização, para assegurar que está ciente de
            quaisquer alterações do seu conteúdo. Os Termos estarão disponíveis em https://mybp.com.br/ (“Website”) e será
            considerada vigente a redação publicada na data de utilização da Plataforma pelo Usuário.
            <br>
            1.5. A BPSE poderá deixar de oferecer ou negar acesso à Plataforma, aos Serviços ou a qualquer parte deles, a
            qualquer momento e por qualquer motivo, sem necessidade de comunicação prévia, ficando apenas obrigada a
            cumprir os compromissos porventura já firmados com o Usuário.
            <br>
            1.6. Eventuais dúvidas, reclamações e demais comunicações relativas a estes Termos ou ao funcionamento e/ou
            uso da MyBP devem ser dirigidas pelos meios indicados na Plataforma ou no Website.
            <br>
            1.7. Ao se cadastrar, o Usuário poderá utilizar todos os serviços disponibilizados pelo MyBP, declarando, para
            tanto, ter lido, compreendido e aceitado os respectivos Termos e Condições de uso de cada um destes serviços
            que passam a fazer parte integrante destes Termos e condições gerais quando concluído o cadastro
            <br>
            1.8. Caso a empresa BPSE decida checar a veracidade dos dados cadastrais de um Usuário e se constate haver
            entre eles dados incorretos ou inverídicos, poderá recorrer a dados publicamente disponíveis ou a bases de
            dados comerciais para alterar ou enriquecer os Dados Pessoais, ou, ainda caso o Usuário se furte ou se negue a
            enviar os documentos requeridos, a BPSE poderá suspender temporariamente ou definitivamente o atendimento ao
            cliente, sem que lhe seja assistido qualquer indenização ou ressarcimento de valores para esse usuário.
            <br>
            1.9. O cliente/usuário do sistema autoriza a publicação de sua imagem pessoal para complementar seu cadastro
            no site e uso exclusivo para fins contratuais no banco de dados da empresa.
            <br>
            <strong>2. OBJETO E DESCRIÇÃO DOS SERVIÇOS</strong>
            <br>
            O MyBP é um sistema completo de gestão de pessoas e processos para empresas que desejam elevar o seu
            desempenho e otimizar seus resultados por meio da implementação de melhorias nos processos organizacionais,
            realizando serviços 100% online de planejamento pessoal, pré-admissão digital, controle de exames e
            treinamentos, recrutamento, seleção, admissão, acessos portariais, emissão de carteiras e certificados,
            controle de movimentação, desmobilização, recontratação. Através do MyBP, a BPSE prestará os seguintes
            Serviços:
            <br>
            I – em favor do Candidato: viabilizar cadastro para oportunizar acesso às Vagas ofertadas pela Empresa e
            demais empresas cadastradas na Plataforma, bem como da inscrição para concorrer a quaisquer Vagas; e
            <br>
            II – em favor da Empresa: oportunização da oferta de Vagas, da publicação de conteúdos a elas relacionados e
            do engajamento com os Candidatos; e visualização da candidatura e do perfil cadastrado pelo Candidato e demais
            candidatos cadastrados na Plataforma, e contato direto com eles, em caso de interesse de dar início ao
            processo seletivo.
            <br>
            <strong>3. CADASTRO E USO DOS SERVIÇOS PELO CANDIDATO</strong>
            <br>
            O Candidato poderá acessar de forma livre e gratuita a MyBP, porém, para que possa realizar as inscrições nas
            Vagas de seu interesse, deverá realizar cadastro prévio, a partir do qual será criada uma conta de acesso
            (“Conta”) que lhe permitirá usufruir das funcionalidades disponibilizadas pela BPSE.
            <br>
            3.1. O Candidato é integralmente responsável pelo cadastro realizado na MyBP para a abertura da Conta, devendo
            escolher uma senha forte e segura, bem como mantê-la em sigilo, não podendo a BPSE ser responsabilizada por
            quaisquer atos, fatos e/ou consequências decorrentes do compartilhamento, uso inapropriado e/ou descuido do
            Candidato.
            <br>
            3.2. O Candidato deverá preencher todos os campos obrigatórios com informações exatas e verdadeiras,
            comprometendo-se, inclusive, a atualizar as informações de cadastro sempre que ocorrer alguma alteração. O
            Candidato responde pessoalmente pela veracidade das informações prestadas no cadastro na Plataforma.
            <br>
            3.3. O Candidato autoriza a BPSE a solicitar todos os documentos porventura necessários à comprovação da
            veracidade dos dados de cadastro informados, e ainda a fazer checagem por quaisquer outros meios. O fato de a
            BPSE eventualmente não solicitar tais documentos, nem realizar a checagem da veracidade dos dados informados,
            não exime o Candidato da responsabilidade prevista nesta cláusula.
            <br>
            3.4. A BPSE poderá ainda, a seu critério e em conformidade com a sua Política de Privacidade vigente,
            requisitar do Candidato, a qualquer tempo durante a vigência destes Termos, outros documentos e/ou informações
            que julgar relevantes para a prestação dos Serviços.
            <br>
            3.5. O Candidato cadastrado deverá ter capacidade jurídica para a prática dos atos civis, isto é, deve ser
            maior de 18 (dezoito) anos ou emancipado, além de não estar submetido a nenhuma das causas incapacitantes
            previstas na lei civil, nem a curatela determinada pelo Poder Judiciário. Sendo o Candidato menor de 18
            (dezoito) anos, incapaz ou submetido a curatela, o responsável legal e/ou curador responderá pelos atos
            praticados em seu nome, devendo enviar autorização específica em anexo, sendo essa uma obrigação do usuário.
            3.6. O Candidato deverá, ainda, estar apto ao desempenho das funções indicadas pela Empresa na oferta da vaga,
            inclusive as que exigirem inscrição em conselho profissional específico, responsabilizando-se de forma
            exclusiva e pessoal por qualquer falsidade havida em suas declarações nesse sentido.
            <br>
            3.7. Ao se inscrever em uma vaga divulgada na MyBP, o Candidato declara ter perfil, formação e experiência
            compatíveis com as exigidas pela Empresa, sob sua exclusiva e pessoal responsabilidade, não havendo por parte
            da BPSE garantia alguma a respeito de tais declarações.
            <br>
            3.8. A qualquer momento a BPSE poderá cancelar a Conta do Candidato ou ainda recusar o seu cadastro, mesmo que
            já previamente aceito, em casos de descumprimento das regras e políticas previstas nestes Termos, realização
            de cadastros em duplicidade, inexatidão nas informações prestadas pelo Candidato ou prática de ilegalidade em
            sua conduta na utilização da MyBP.
            <br>
            3.9. O Candidato poderá, a qualquer tempo, excluir sua Conta na MyBP, de modo que seu conteúdo não estará mais
            disponível para visualização pelas empresas ali cadastradas, não sendo a BPSE responsável pela perda de tais
            conteúdos após exclusão.
            <br>
            <strong>4. CADASTRO E USO DOS SERVIÇOS PELA EMPRESA</strong>
            <br>
            A Empresa poderá acessar a MyBP desde que aceite as condições comerciais previstas nestes Termos e realize,
            por intermédio de pessoa com os poderes necessários para tanto, cadastro prévio a partir do qual será criada
            uma conta de acesso (“Conta”) que lhe permitirá usufruir das funcionalidades disponibilizadas pela BPSE.
            <br>
            4.1. O cadastro para a criação da Conta poderá ser realizado por representante da Empresa diretamente na MyBP,
            ou mediante o preenchimento de formulário externo à Plataforma, de cujo conteúdo a BPSE tomará ciência a fim
            de diligenciar a criação da Conta.
            <br>
            4.2. Em qualquer caso, a Empresa é integralmente responsável pela definição da senha acesso à MyBP na
            oportunidade do primeiro acesso à sua Conta, devendo escolher uma senha forte e segura, bem como mantê-la em
            sigilo, não podendo a BPSE ser responsabilizada por quaisquer atos, fatos e/ou consequências decorrentes do
            compartilhamento, uso inapropriado e/ou descuido da Empresa e/ou seus prepostos e representantes legais.
            <br>
            4.3. Todos os campos obrigatórios para a realização do cadastro deverão ser preenchidos com informações exatas
            e verdadeiras, comprometendo-se a Empresa a atualizar as informações de cadastro sempre que ocorrer alguma
            alteração, sob sua exclusiva responsabilidade.
            <br>
            4.4. A Empresa, de acordo com o Plano contratado, poderá cadastrar diferentes usuários para acesso simultâneo
            à Conta de sua titularidade, responsabilizando-se pelos dados informados e por todas as condutas associadas
            aos usuários no uso da Plataforma.
            <br>
            4.5. A Empresa autoriza a BPSE a solicitar todos os documentos porventura necessários à comprovação da
            veracidade dos dados de cadastro informados, e ainda a fazer checagem por quaisquer outros meios. O fato de a
            BPSE eventualmente não solicitar tais documentos, nem realizar a checagem da veracidade dos dados informados,
            não exime a Empresa da responsabilidade prevista nesta cláusula.
            <br>
            4.6. A BPSE poderá ainda, a seu critério e em conformidade com a sua Política de Privacidade vigente,
            requisitar da Empresa, a qualquer tempo durante a vigência destes Termos, outros documentos e/ou informações
            que julgar relevantes para a prestação dos Serviços.
            <br>
            4.7. A Empresa declara que somente divulgará na MyBP vagas reais e existentes, obrigando-se a cumprir todos os
            termos porventura ofertados e assumindo total e irrestritamente, com total isenção da BPSE, qualquer
            responsabilidade decorrente de falsidade ou inconsistência das informações da vaga, bem como de danos causados
            a candidatos porventura prejudicados.
            <br>
            4.7.1 A Empresa autoriza a BPSE utilizar qualquer informação contida no cadastro da vaga para divulgação e
            correta prestação do serviço.
            <br>
            4.7.2 A BPSE está autorizada a reprovar qualquer vaga cadastrada pela empresa que esteja com requisitos,
            remuneração ou benefícios inconformes com suas recomendações.
            <br>
            4.8. A qualquer momento a BPSE poderá cancelar a Conta da Empresa ou ainda recusar o seu cadastro, mesmo que
            já previamente aceito, em casos de descumprimento das regras e políticas previstas nestes Termos, realização
            de cadastros em duplicidade, inexatidão nas informações prestadas pela Empresa ou prática de ilegalidade em
            sua conduta na utilização da MyBP.
            <br>
            4.9. A Empresa poderá, a qualquer tempo, excluir sua Conta na MyBP, de modo que, a critério da BPSE, seu
            conteúdo poderá não estar mais disponível para visualização pelos candidatos ali cadastrados, não sendo a BPSE
            responsável pela perda de tais conteúdos após exclusão. Nesse caso, permanecerão devidos os valores referentes
            ao período de licença contratado, quanto aos quais a BPSE não tem dever de ressarcimento. O cancelamento
            poderá se dar de forma antecipada, com respeito ao pagamento integral do período de licença contratado; ou ao
            término do período, com a opção da Empresa pela não renovação da licença.
            <br>
            <strong>5. CONDUTA E OBRIGAÇÕES DO USUÁRIO</strong>
            <br>
            Durante a utilização da Plataforma, o Usuário deverá obedecer a todos os deveres estabelecidos nestes Termos.
            <br>
            5.1. O Usuário declara e se compromete a usar os Serviços e navegar na MyBP sempre com vistas a intuitos e
            fins lícitos, bem como a observar estes Termos e toda a legislação nacional, abstendo-se de promover
            atividades criminosas e/ou ilícitas em geral.
            <br>
            5.1.1. O Usuário deverá ser respeitoso e educado com todos os sujeitos com quem tenha algum contato por meio
            da MyBP. Assim, o Usuário deverá se abster de, na utilização dos Serviços e durante toda a sua navegação na
            MyBP, publicar ou divulgar conteúdo difamatório, calunioso, injurioso, violento, obsceno, racista,
            preconceituoso, pornográfico, imoral, ilegal, que contenha nudez ou seja de qualquer modo ofensivo, conforme
            apuração a ser realizada pela BPSE, que poderá, mas não está obrigada a, analisar, monitorar ou remover tais
            conteúdos a qualquer momento.
            <br>
            5.1.2. O Usuário responde pessoalmente pelos atos praticados no uso da Plataforma que sejam difamatórios,
            discriminatórios, ofensivos, obscenos, injuriosos, caluniosos, violentos, que constituam ameaças ou assédios
            de qualquer natureza, ou, ainda, que, por qualquer outro meio, possam ferir direitos de terceiros, e que
            venham a ser praticados no contexto indicado acima. A BPSE não será responsável por eventuais danos
            relacionados, associados ou decorrentes de ato do Usuário e seus prepostos, representantes e curadores.
            <br>
            5.2. Cabe ao Usuário providenciar os acessos à internet e aos serviços de terceiros eventualmente necessários
            à utilização dos Serviços, bem como custear todas as despesas referentes a esses acessos.
            <br>
            5.2.1. A BPSE não se responsabiliza, em hipótese alguma, por falhas na conexão do Usuário ou na sua conexão
            com os serviços de terceiros que venha a utilizar.
            <br>
            5.2.2. A BPSE não responde pelos prejuízos eventualmente sofridos pelo Usuário em decorrência de falhas de
            seus equipamentos ou de operação de suas redes, nem por eventuais bloqueios de acesso, ou obstáculos às
            operações, decorrentes da desatualização das configurações de acesso e/ou das suas permissões de utilização,
            cabendo ao Usuário atualizar esses dados quando preciso.
            <br>
            5.2.3. A BPSE adverte que a Plataforma poderá se sujeitar a interferências, mau funcionamento e/ou atrasos
            inerentes ao uso da internet e de comunicações eletrônicas. O Usuário, neste ato, declara que tem conhecimento
            dessas possibilidades, bem como que esses fatores poderão alterar de algum modo a eficácia de utilização dos
            Serviços, sem que lhe seja devida qualquer indenização por eventuais prejuízos, de qualquer natureza, que
            venha a sofrer. Nesses casos a BPSE providenciará, com a maior brevidade possível, o retorno do funcionamento
            da Plataforma.
            <br>
            5.3. O Usuário deverá zelar pelo sigilo dos dados de acesso à sua Conta, os quais não deverão ser
            compartilhados com terceiros. A BPSE não possui qualquer ingerência sobre essas informações, e em caso de
            extravio, o Usuário deverá de imediato solicitar a sua alteração, para evitar quaisquer prejuízos decorrentes
            desse evento.
            <br>
            5.3.1. O Usuário reconhece que todos os acessos realizados com o uso dos seus dados são interpretados como
            tendo sido feitos por si mesmo, sendo de sua inteira responsabilidade todas as condutas praticadas por e na
            sua Conta.
            <br>
            5.3.2. A BPSE não será responsável por nenhum dano, obrigação ou prejuízo decorrente do uso dos Serviços pelo
            Usuário ou sua incapacidade de acessar ou usar os Serviços.
            <br>
            5.4. O Usuário se declara ciente de que será considerada ilícita a sua conduta sempre que, no contexto da
            utilização dos Serviços ou da sua navegação na MyBP : (i) descumprir qualquer regra fixada nestes Termos; (ii)
            cometer crimes e/ou contravenções penais; (iii) praticar quaisquer ilícitos cibernéticos, a exemplo de invasão
            de sistemas e hardwares de terceiros, sabotagem, alteração de informações, reversão de criptografia,
            espionagem, acesso a informações confidenciais etc.; ou (iv) violar normas protetivas da propriedade
            intelectual da BPSE ou de terceiros.
            <br>
            5.4.1. A BPSE, a qualquer tempo, se recusa a ofertar os Serviços ao Usuário, ou mesmo impedir, pelos meios
            técnicos disponíveis, o seu acesso à MyBP, nos casos de: (i) utilização indevida da plataforma; (ii) violação,
            pelo Usuário, das regras previstas nestes Termos e/ou na legislação brasileira; (iii) imposição de obstáculo,
            pelo Usuário, à verificação de sua identidade, quando isso for necessário à utilização dos Serviços; (iv)
            inadimplência da Empresa; e (v) interrupção, por qualquer motivo, do fornecimento dos Serviços.
            <br>
            5.4.2. Caso seja imputada responsabilidade à BPSE por ato atribuível ao Usuário, este deverá adotar todas as
            providências necessárias à imediata exclusão daquela do processo judicial que porventura esteja em curso.
            Ademais, a BPSE terá direito ao reembolso de todos os valores eventualmente despendidos, inclusive custas e
            honorários advocatícios.
            <br>
            5.4.3. Havendo fundada suspeita da prática de atos ilícitos por parte do Usuário, a BPSE poderá, além das
            medidas já apontadas, comunicar o ocorrido às autoridades competentes, para fins de investigação.
            <br>
            <strong>6. AUSÊNCIA DE GARANTIA E RESPONSABILIDADE</strong>
            <br>
            As Partes têm ciência de que os Serviços correspondem apenas ao descrito nestes Termos, de modo que a sua
            extensão deverá ser interpretada de forma restritiva, sem a inclusão de quaisquer itens que não tenham sido
            expressamente indicados neste documento. Dessa forma, fica desde já expressamente consignado que:
            <br>
            I – a BPSE não garante ao usuário/candidato a oferta, no MyBP ou fora dele, de Vagas do seu interesse;
            <br>
            II – a BPSE não garante à Empresa a existência de interessados nas Vagas, nem a aptidão e a contratação dos
            Candidatos que porventura manifestem interesse em tais Vagas;
            <br>
            III – a BPSE não garante a permanência do Candidato eventualmente contratado pela Empresa por um período
            mínimo de tempo no trabalho;
            <br>
            IV – a BPSE não interfere, de maneira alguma, na condução do processo seletivo por parte da Empresa, razão por
            que está totalmente isenta de responsabilidade por quaisquer prejuízos que venham a ser causados no seu bojo;
            <br>
            V – a BPSE não é parte nem interfere, de modo algum, no contrato eventualmente firmado entre Empresa e
            Candidato, razão porque está totalmente isenta de responsabilidade por quaisquer prejuízos que venham a ser
            causados no seu bojo.
            <br>
            Parágrafo Único – O usuário declara ciência de todas as condições e da separação das responsabilidades no
            processo de seleção, de modo que não poderá alegar em juízo ou fora dele qualquer responsabilidade em face da
            BPSE.
            <br>
            Parágrafo Segundo - É responsabilidade exclusiva do usuário o preenchimento dos dados e a anexação de
            documentos necessários e exigidos para cada seleção, de modo que o encaminhamento do candidato para seleção
            por parte da empresa não significa aquiescência da BPSE sobre tais documentos, muito menos checagem sobre
            ausência de documentos, mas tão somente o encaminhamento na forma que foram anexados pelo candidato.
            <br>
            <strong>7. PAGAMENTO E CONDIÇÕES COMERCIAIS</strong>
            <br>
            Em contraprestação pelos Serviços, a Empresa pagará à BPSE o valor referente à assinatura mensal, em
            conformidade com as condições comerciais em vigor e divulgadas pela BPSE no Website, na própria Plataforma ou
            por meio de proposta comercial.
            <br>
            7.1. O pagamento para utilização dos Serviços deverá ser feito de forma antecipada, de modo que a
            disponibilização do acesso à Plataforma para uso somente ocorrerá quando a Empresa efetuar o pagamento.
            7.2. A BPSE poderá suspender o acesso da Empresa à Plataforma em caso de não pagamento, antes da data de
            término do período de licença contratado, do valor do Plano selecionado.
            <br>
            7.3. A BPSE poderá alterar o valor do Plano a qualquer tempo. A alteração ora referida, no entanto, só
            produzirá efeitos após o término do período de licença contratado, cabendo à Empresa a decisão pela renovação,
            de acordo com as novas condições estabelecidas. Caso não haja interesse na continuidade da prestação de
            serviço, é suficiente que a Empresa não realize o pagamento; por outro lado, na hipótese de realização do
            pagamento, ficam estes Termos renovados por mais um período.
            <br>
            7.4. Os pagamentos devidos pela Empresa poderão ser feitos por algum dos meios divulgados pela BPSE no
            Website, na própria Plataforma ou por meio de proposta comercial.
            <br>
            7.5. Os valores cobrados pela BPSE incluem os encargos fiscais, trabalhistas e previdenciários associados aos
            Serviços, nada mais sendo devido pela Empresa. No prazo de até 30 (trinta) dias após a confirmação do
            pagamento, será emitida a respectiva nota fiscal.
            <br>
            7.6. A Empresa declara ciência de que, salvo disposição expressa em sentido contrário, eventuais ofertas
            gratuitas de funcionalidades e módulos serão temporárias, podendo a BPSE alterá-las, descontinuá-las ou passar
            a cobrá-las sem necessidade de anuência prévia, cabendo-lhe apenas o dever de informar previamente a ação que
            adotará com relação aos itens gratuitos.
            <br>
            <strong>8. PROPRIEDADE INTELECTUAL</strong>
            <br>
            Todos os textos, imagens, fotos, ilustrações, ícones, layouts, designs, recursos e outros recursos visuais,
            bem como sistemas, base de dados, redes, tecnologias, links e arquivos que permitem que o Usuário navegue na
            aplicação e utilize os Serviços são de propriedade da BPSE e estão protegidos pelas leis e tratados
            internacionais de direito autoral, marcas, patentes, modelos e desenhos industriais, sendo vedado o uso pelo
            Usuário, salvo mediante prévia autorização por escrito.
            <br>
            8.1. Ao acessar a MyBP, o Usuário declara que irá respeitar todos os direitos autorais e de propriedade
            intelectual da BPSE. O simples acesso à MyBP, à sua Conta ou a utilização dos Serviços não confere ao Usuário
            qualquer direito de uso dos nomes, títulos, palavras, frases, marcas, patentes, criações intelectuais,
            imagens, vídeos, símbolos, entre outros, que nelas estejam, ou já estiveram, disponíveis.
            <br>
            8.2. É vedado ao Usuário copiar, reproduzir ou espelhar o conteúdo e layout da MyBP, bem como realizar
            engenharia reversa da tecnologia de titularidade da BPSE ou dos Serviços de um modo geral.
            <br>
            8.3. O Usuário assume toda e qualquer responsabilidade pela utilização indevida dos elementos mencionados
            nesta cláusula, isto é, pela violação de qualquer direito de propriedade intelectual da BPSE, tanto de caráter
            civil quanto criminal.
            <br>
            <strong>9. CONFIDENCIALIDADE E PROTEÇÃO DE DADOS</strong>
            <br>
            A BPSE se compromete a realizar tratamentos de dados pessoais do Usuário em respeito à LGPD (Lei 13.709/2018),
            ao Marco Civil da Internet (Lei 12.965/2014) e às demais leis brasileiras relacionadas à proteção dos dados
            pessoais, tudo nos termos da Política de Privacidade da MyBP , disponível na URL https://
            https://mybp.com.br/politicadeprivacidade/, de cujo conteúdo o Usuário declara ter ciência, sem a oposição de
            qualquer ressalva.
            <br>
            9.1. Cada parte se compromete a manter e tratar com sigilo e não revelar a terceiros qualquer informação
            confidencial relacionada ao sistema, serviços, dados de usuários, segredo de negócios, estratégias e outros,
            ou usar o privilégio do acesso as referidas informações para propósito conflitante que não seja o previsto no
            presente Termo.
            <br>
            9.2. As Partes se comprometem a adotar as melhores práticas para respeitar a legislação vigente e/ou que venha
            a entrar em vigor sobre proteção de dados, sendo certo que se adapta, inclusive à Lei nº 13.709/2018.
            9.3. Cada parte se compromete a cientificar e instruir seus colaboradores quanto proteção e privacidade de
            dados pessoais e sensíveis, bem como sigilo e confidencialidade de quaisquer informações oriundas deste
            instrumento.
            <br>
            9.4. O Cliente Empresa declara que possui o consentimento de todos os seus colaboradores, para que seus dados
            possam ser utilizados para os fins deste contrato.
            <br>
            9.5. Os usuário e/ou candidato declara que tem conhecimento da necessidade de coleta de dados, os quais estão
            devidamente justificados para a funcionalidade que se presta o sistema MyBP, podendo os titulares dos dados
            pessoais, além de indagarem a razão da coleta de cada dado, exigirem a qualquer momento que seus dados
            pessoais sejam retificados, atualizados e/ou excluídos.
            <br>
            9.6. A BPSE possui o direito de utilizar os dados de forma anônima para fins estatísticos e de pesquisa para
            melhorar as atualizações das ferramentas oferecidas respeitando as especificações da Lei, quanto a
            anonimização e impossibilidade de identificação do indivíduo.
            <br>
            9.7. Ficam as partes cientes que os dados podem ser modificados conforme as necessidades dos termos e permitir
            que os dados sejam utilizados pela BPSE para envio de e-mails comerciais.
            <br>
            <strong>10. VIOLAÇÕES NO SISTEMA OU DA BASE DE DADOS</strong>
            <br>
            10.1. Não é permitida a utilização de nenhum dispositivo, software ou outro recurso que venha a interferir nas
            atividades e operações do Sistema de Gestão Interno (SGI) da BPSE bem como nos anúncios, descrições, contas ou
            seus bancos de dados.
            <br>
            10.2. Qualquer intromissão, tentativa ou atividade que viole ou contrarie as leis de direito de propriedade
            intelectual e/ou as proibições estipuladas nestes Termos e condições gerais de uso, tornarão o responsável
            passível das ações legais pertinentes, bem como das sanções aqui previstas, sendo ainda responsável pelas
            indenizações por eventuais danos causados.
            <br>
            <strong>11. DO SUPORTE E SISTEMA</strong>
            <br>
            A BPSE manterá os serviços contratados com um SLA - Service Level Agreement -de 95% (noventa por cento), até o
            encerramento deste Termo de Uso e Responsabilidade. Entende-se por Service Level Agreement de 95% como sendo
            que a plataforma deve estar ativa e acessível por pelo menos 95% (noventa e cinco) do tempo total de horas em
            cada mês. Caso a plataforma apresente disponibilidade por tempo inferior a 95%, a BPSE irá ressarcir em iguais
            períodos sem custo adicional para o CLIENTE. Desde que seja comprovada a indisponibilidade do mesmo;
            <br>
            11.1. A Correção de problemas eventuais, detectados pelo CLIENTE e identificados como sendo do software com
            prazo máximo de 10 (dez) dias úteis contados da data em que forem reportados pelo suporte@bpse.com.br, ou nas
            seguintes situações:
            <br>
            Indisponibilidade de um menu da plataforma: 4 dias úteis
            <br>
            Problema Contornável: 7 dias úteis
            <br>
            Problemas de baixo impacto: 10 dias úteis
            <br>
            11.2. A BPSE se obriga a oferecer suporte online gratuito em relação ao uso da plataforma, o qual será
            acionado através do e-mail suporte@bpse.com.br ou via formulário disponível na plataforma. O retorno será
            realizado em até 02 (dois) dias úteis e durante o horário comercial (das 9h00 às 17h00 – hora de Brasília,
            BRT).
            <br>
            <strong>12. DISPOSIÇÕES GERAIS</strong>
            <br>
            12.1. Todas as comunicações que o Usuário pretenda realizar com a BPSE, inclusive as relacionadas a exclusão
            da sua Conta; desistência dos serviços prestados; e esclarecimento de dúvidas, deverão ser feitas pelos meios
            indicados na MyBP ou no Website, considerando-se não recebidas as feitas por meios diversos porventura eleitos
            pelo Usuário.
            <br>
            12.2. A BPSE poderá, a qualquer tempo, ceder a terceiros os direitos sobre a MyBP, bem como a sua posição
            nestes Termos, com o que o Usuário desde já concorda, nada tendo a opor a esse respeito.
            <br>
            12.3. Caso a BPSE deixe de exigir o cumprimento pontual e integral de quaisquer das obrigações decorrentes
            destes Termos, ou de exercer qualquer direito ou faculdade que lhe seja atribuída, tal fato será interpretado
            como mera tolerância e não importará na renúncia dos direitos e faculdades não exercidos, nem em novação ou
            revogação de quaisquer cláusulas ou condições dos presentes Termos que, para todos os efeitos, continuarão em
            pleno vigor.
            <br>
            12.4. Caso qualquer disposição destes Termos seja, por qualquer razão, reputada inválida ou ineficaz,
            permanecerão plenamente válidas e vinculantes todas as cláusulas e condições restantes, gerando efeitos em sua
            máxima extensão, como forma de alcançar a vontade das Partes.
            <br>
            12.5. Estes Termos serão regidos e interpretados exclusivamente de acordo com as leis do Brasil. Qualquer
            reclamação, conflito ou controvérsia que surgir destes Termos ou a eles relacionada, inclusive que diga
            respeito a sua validade, interpretação ou exequibilidade, será solucionada no foro da comarca de São Luís - MA

          </p>
        </div>
      </div>
    </div>
    <footer-mybp v-if="!preload" class="mt-5"></footer-mybp>
  </div>
</template>
<script>
import Api from "@/services/Api";
import TopoMybp from "@/components/Layout/TopoMybp";
import FooterMybp from "@/components/Layout/FooterMybp";
import NavbarMybp from "@/components/Layout/NavbarMybp";
import BannerMybp from "@/components/Layout/BannerMybp";
import Quemsomos from "@/components/Layout/Quemsomos";

export default {
  components: {
    FooterMybp,
    TopoMybp,
    NavbarMybp,
    BannerMybp,
  },
  data() {
    return {
      empresa: null,
      preload: true,
      keyword: "",
    };
  },
  filters: {
    uppercase(valor) {
      return valor.toUpperCase();
    },
  },
  mounted() {
    this.preload = true;
    Api.get(`/${this.$route.params.cliente_slug}`)
        .then(({data}) => {
          this.empresa = data.dados;
          this.preload = false;
        })
        .catch((error) => {
          window.location.href = `/${this.$route.params.cliente_slug}/naoencontrado`;
        });
  },
  methods: {
    selecionaVaga(vaga_aberta) {
      let slugVaga = vaga_aberta.titulo.trim().toLowerCase().replace(/ /g, "-");
      this.$router.push({
        name: "VagaUnica",
        params: {
          cliente_slug: this.$route.params.cliente_slug,
          vaga_aberta_id: vaga_aberta.id,
          vaga_slug: slugVaga,
        },
      });
    },
  },
};
</script>
<style lang="scss">
.logo {
  height: 130px;
}

.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}


</style>
