import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TargetEnd from '../components/TargetEnd';
import { Container, 
        Content, 
        Img, 
        AreaText, 
        Title,
        Description,
        SubContent,
        SubTitle } from '../styles/pages/States';
import statesBaby from '../assets/gravidez-passo-a-passo.jpg';

const States = ()=>{
    return(
        <Container>
            <Header/>
            <Content>
                <Img
                    src={statesBaby}
                />
                <Title>FAZES DA GRAVIDEZ</Title>
                <AreaText>
                    <SubContent>
                        <SubTitle>01ª Semana</SubTitle>
                        <Description>O método de contagem da idade gestacional começa mesmo antes de ter acontecido a concepção (fecundação). Dessa forma, a semana 1 começa com o 1º dia da sua última menstruação.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>02ª Semana</SubTitle>
                        <Description>Nesse momento está acontecendo o preparo do berço do bebê, ou seja, o útero estará sofrendo profundas modificações para receber o futuro embrião em desenvolvimento.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>03ª Semana</SubTitle>
                        <Description>No início dessa semana acontece a concepção. Os espermatozóides encontram-se com o óvulo na trompa e o milagre da vida começa. É um processo que leva cerca de 24 horas.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>04ª Semana</SubTitle>
                        <Description>04ª Semana do Gravidez Passo a Passo. No final desta semana as células do zigoto se multiplicam enquanto ele caminha pela trompa, dando origem a uma minúscula estrutura (cerca de 0,2 mm de diâmetro – 5 vezes menor que a cabeça de um alfinete) denominada blastocisto.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>05ª Semana</SubTitle>
                        <Description>No início desta fase o embrião tem a forma de um “disco” e mede cerca de 0,4 mm; no final da mesma ele tem a forma de uma “sola de sapato” (a região da cabeça é mais larga e maior que a região da cauda) e mede em torno de 2,5 mm.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>06ª Semana</SubTitle>
                        <Description>Os primeiros batimentos cardíacos do embrião já começaram. Ele mede cerca de 2,5 mm de comprimento no início dessa semana e tem a forma de um “S”. O embrião já apresenta o esboço da cabeça, coração e um tubo neural.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>07ª Semana</SubTitle>
                        <Description>O bebê mede cerca de 6 mm de comprimento no início desta semana (é o tamanho de um grão de arroz). A formação dos braços e pernas continua, embora os dedos das mãos e dos pés ainda não tenham se formado.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>08ª Semana</SubTitle>
                        <Description>08ª Semana do Gravidez Passo a Passo. O embrião mede cerca de 12-13 mm de comprimento no início desta semana. A face continua a mudar, aparecem as orelhas, os olhos e a ponta do nariz.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>09ª Semana</SubTitle>
                        <Description>No início desta semana o bebê mede cerca de 15-16 mm. As primeiras ondas cerebrais são detectadas. A estrutura básica dos olhos já está bem adiantada, porém ainda situados de cada lado da cabeça do embrião.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>10ª Semana</SubTitle>
                        <Description>No início desta semana o bebê mede cerca de 22 mm. Ele começa a se movimentar dentro do útero, embora a mãe não perceba. Os olhos estão bem desenvolvidos, porém ainda situados de cada lado da cabeça do embrião.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>11ª Semana</SubTitle>
                        <Description>A partir de agora o bebê é chamado de feto. A parte mais crítica do desenvolvimento já terminou. Esse é um período de rápido crescimento e desenvolvimento, e o bebe tem cerca de 26 mm de comprimento no início da semana, atingindo cerca de 50 mm no final.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>12ª Semana</SubTitle>
                        <Description>Nessa fase quase todos os órgãos e estruturas do feto estão formados. Eles continuarão a crescer e desenvolver até o parto. Os dedos das mãos e pés já se separaram e os pelos e unhas iniciam o seu crescimento.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>13ª Semana</SubTitle>
                        <Description>Enquanto o bebê continua a crescer, começam a se formar as cordas vocais. A face parece cada dia mais e mais humana. Os olhos começam a se mover para ficarem juntos na frente da face assumindo sua posição normal e definitiva.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>14ª Semana</SubTitle>
                        <Description>O feto mede cerca de 14 a 15 cm de comprimento e pesa em torno de 40 a 60 gramas. Começa a fazer movimentos respiratórios – inspiração e expiração. Os olhos e ouvidos continuam a se desenvolver e a assumir suas posições definitivas.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>15ª Semana</SubTitle>
                        <Description>Se você fizer um exame de ultra-som agora vai notar seu bebê sugando o polegar. Os ossos estão ficando mais duros a cada dia. A pele é muito fina e transparente.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>16ª Semana</SubTitle>
                        <Description>Se você nunca sentiu os movimentos do bebê, é possível que já possa percebê-los, pois os seus ossos estão cada vez mais enrijecidos. Agora as pernas são maiores que os braços e ele move os membros com muita frequência.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>17ª Semana</SubTitle>
                        <Description>Esse é um período de rápido crescimento, quando começa a deposição de gordura sob a pele do bebê. O feto e a placenta possuem o mesmo tamanho agora.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>18ª Semana</SubTitle>
                        <Description>18ª Semana do Gravidez Passo a Passo – Seu bebê está perto das 260 gramas e tem feições humanas completas; mede cerca de 19 cm de comprimento. As pontas dos dedos estão mais recheadas, os olhos estão mirando para frente (antes eles estavam na parte lateral da face).</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>19ª Semana</SubTitle>
                        <Description>Esse é um período de intenso crescimento. Mede cerca de 20 cm dos pés à cabeça e pesa cerca de 300-320 gramas. Juntamente com o lanugo, forma-se o “vérnix caseoso” na pele de seu bebê.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>20ª Semana</SubTitle>
                        <Description>Estamos na metade do caminho da gestação e o bebê dorme e acorda como um recém-nascido. Os cabelos do couro cabeludo começam a se formar. A presença dos pelos temporários, denominados de “lanugo”, aparecem na cabeça.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>21ª Semana</SubTitle>
                        <Description>A fase de crescimento rápido começa a reduzir. Os cílios e o couro cabeludo tornam-se mais visíveis e o feto pisca mais freqüentemente. O lanugo cobre completamente o corpo, embora seja mais concentrado em torno da cabeça, pescoço e face.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>22ª Semana</SubTitle>
                        <Description>22ª Semana do Gravidez Passo a Passo – O bebê está perto de meio quilo, ainda muito magrinho, porém muito desenvolvido. Mede cerca de 26 cm da cabeça aos pés. Os cílios e as sobrancelhas estão agora formados e o cérebro começa a crescer rápido.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>23ª Semana</SubTitle>
                        <Description>Seu bebê pesa cerca de 580 gramas agora. Mede cerca de 27 cm da cabeça aos pés. O corpo torna-se mais proporcional a cada dia e os ossos do ouvido médio começam a endurecer, tornando possível a condução do som.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>24ª Semana</SubTitle>
                        <Description>O feto ainda é magro e não possui muito tecido gorduroso. O bebê deve ganhar cerca de 80 gramas esta semana enquanto o corpo começa a se tornar mais rechonchudo.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>25ª Semana</SubTitle>
                        <Description>As estruturas da coluna – 33 anéis, 150 juntas e cerca de 1000 ligamentos – começam a se formar. Os vasos sangüíneos dos pulmões estão em franco desenvolvimento e as narinas se abrem. Os pulmões já são capazes de se adaptar à vida extra-uterina.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>26ª Semana</SubTitle>
                        <Description>Seu bebê está pesando cerca de 900-1000 gramas e medindo cerca de 31-32 cm de comprimento. Os vasos sangüíneos começaram a proliferar nos pulmões na última semana, os pequenos sacos de ar pulmonares (alvéolos) terminam sua formação nesta semana.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>27ª Semana</SubTitle>
                        <Description>Durante essa semana o cérebro continua seu rápido crescimento e os pulmões já estão quase completamente desenvolvidos. Os pulmões são capazes de respirar o ar.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>28ª Semana</SubTitle>
                        <Description>Seu bebê está crescendo e se desenvolvendo a uma velocidade incrível. As sobrancelhas e os cílios agora estão presentes, e os cabelos estão mais espessos. As pálpebras se abrem e os olhos estão completamente formados.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>29ª Semana</SubTitle>
                        <Description>A cabeça do feto começa a ficar proporcional ao resto do corpo. Ele pesa cerca de 1300 gramas e mede em torno de 37 cm. O acúmulo de gordura sob a pele, continua.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>30ª Semana</SubTitle>
                        <Description>Nosso pequeno príncipe pesa em torno de 1500 gramas agora. Mede cerca de 39 cm da cabeça aos pés. A superfície do cérebro fetal apresenta um aspecto enrugado com circunvoluções do tecido nervoso.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>31ª Semana</SubTitle>
                        <Description>O crescimento começa a diminuir um pouco a velocidade e o cérebro passa por mais um período de rápida expansão. O tamanho da cabeça aumenta à medida que o cérebro em crescimento empurra o crânio externamente, criando mais circunvoluções na superfície.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>32ª Semana</SubTitle>
                        <Description>O feto repousa sobre o útero – não mais flutua. Os olhos se abrem na fase alerta e se fecham durante o sono. A cor dos olhos é geralmente azul, embora a pigmentação permanente ainda não esteja totalmente desenvolvida.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>33ª Semana</SubTitle>
                        <Description>Nessa fase o líquido amniótico atinge o seu nível máximo na gravidez. Essa quantidade permanece constante até o final. O rápido crescimento do cérebro aumentou o tamanho da cabeça cerca de 1 cm nessa semana.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>34ª Semana</SubTitle>
                        <Description>O bebê já responde como um recém-nascido, com seus olhos abrindo e fechando durante o ato de dormir e acordar. Há franco o desenvolvimento da imunidade para lutar contra as infecções.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>35ª Semana</SubTitle>
                        <Description>A cabeça pode agora posicionar-se na pelve (o feto vira de cabeça para baixo) antes do parto. As gengivas apresentam os sulcos dentários. O sistema gastrointestinal é ainda muito imaturo e permanecerá assim até 3 a 4 meses após o nascimento.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>36ª Semana</SubTitle>
                        <Description>Faltando cerca de 4 semanas para o final, o feto está quase pronto para nascer. Ele pode adentrar o canal de parto a qualquer momento a partir de agora. Nesta semana a gordura está preenchendo os ombros e joelhos bem como formando dobras no pescoço.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>37ª Semana</SubTitle>
                        <Description>A partir de 37 semanas o bebe estará pronto para nascer. Ele pesa cerca de 3 quilos e mede em torno de 47 cm agora. O corpo está mais arredondado e rechonchudo devido a novos depósitos de gordura.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>38ª Semana</SubTitle>
                        <Description>O bebê está ganhando cerca de 30 gramas por dia agora. Seus intestinos estão acumulando grande quantidade de mecônio (as primeiras excretas do bebê). A circunferência da cabeça e a do abdome têm agora o mesmo tamanho.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>39ª Semana</SubTitle>
                        <Description>A maior parte do lanugo já desapareceu e o bebê se prepara para nascer em poucos dias. O crânio ainda não é totalmente sólido, apresentando-se mais amolecido nas 5 fontanelas, que ainda estão separadas e podem ser apertadas umas contra as outras.</Description>
                    </SubContent>
                    <SubContent>
                        <SubTitle>40ª Semana</SubTitle>
                        <Description>40ª Semana do Gravidez Passo a Passo – A última semana. O bebê pesa em torno de 3300 a 3700 gramas e mede cerca de 50-51 cm dos pés à cabeça.</Description>
                    </SubContent>
                </AreaText>
            </Content>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
};

export default States;