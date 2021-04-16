import './style.css';
import logo from '../../imagens/dollify.jpeg';
import imgfooter1 from '../../imagens/email.png';
import imgfooter2 from '../../imagens/git.png';
import imgfooter3 from '../../imagens/insta.jpg';

function Curriculo() {
    return (
      <div className="body">
        <div class="bloco-navegacao">
            <nav class="todo-menu">
                <div class="opcoes">
                    <ul>
                        <li><a href="#dados-pessoais">Dados Pessoais</a> </li>
                        <li><a href="#info-academic">Informações Acadêmicas</a> </li>
                        <li><a href="#cursos">Cursos</a> </li>
                        <li><a href="#outros-cursos">Outros Cursos</a> </li>
                        <li><a href="#exp-profissional">Experiência Profissional</a> </li>
                        <li><a href="#conhecimentos">Conhecimentos</a> </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="banner">
            <div class="name">
                <h1>Thyago</h1>
                <h1 class="name2">Moura</h1>
            </div>
            <div class="img">
                <img src={logo}/>
            </div>
        </div>
        <div id="dados-pessoais">
            <h2>Dados Pessoais</h2>
            <div class="lista-dados">
                <ul>
                    <li>Nacionalidade: Brasileiro</li>
                    <li>Naturalidade: Brasília</li>
                    <li>Data de Nascimento: 30/05/2002</li>
                    <li>Telefone: (61) 98506-8451</li>
                    <li>E-mail: thyagohenriquemoura@gmail.com</li>
                </ul>
            </div>
        </div>
        <div id="info-academic">
            <h2>Informações Acadêmicas</h2>
            <div class="lista-info-academics">
                <ul>
                    <li>Escola: Instituto Educaional Santo Elias <br/> Ensino Médio – 12/2019</li>
                    <li>Faculdade: Instituto Federal de Brasilia <br/> Graduação de Nível Superior: <br/> Tecnologia em Sistemas para Internet (cursado um semestre)</li>
                    <li>Faculdade: Universidade de Brasília <br/> Graduação de Nível Superior: <br/> Engenharia de Software (cursando)</li>
                </ul>
            </div>
        </div>
        <div id="cursos">
            <div class="title-cursos">
                <h2>Cursos</h2>
            </div>
            <div class="c1">
                <h3>LÍNGUA INGLESA: VERBS IN THE FUTURE</h3>
                <p>Fundação BRADESCO - 2020</p>
            </div>
            <div class="c2">
                <h3>LÍNGUA INGLESA: ADJECTIVES</h3>
                <p>Fundação BRADESCO - 2020</p>
            </div>
            
            <div class="c1">
                <h3>LÍNGUA INGLESA: BASIC REVIEW</h3>
                <p>Fundação BRADESCO - 2020</p>
            </div>
            <div class="c2">
                <h3>INTRODUÇÃO À PROGRAMAÇÃO <br/> DE COMPUTADORES</h3>
                <p>Udemy - 2020</p>
            </div>
            
            <div class="c1">
                <h3>INTRODUÇÃO À LINGUAGEM HTML</h3>
                <p>Udemy - 2020</p>
            </div>
            <div class="c2">
                <h3>INTRODUÇÃO À LINGUAGEM CSS</h3>
                <p>Udemy - 2020</p>
            </div>
            
            <div class="c1">
                <h3>HTML E CSS NA PRÁTICA</h3>
                <p>Fundação BRADESCO - 2020</p>
            </div>
            <div class="c2">
                <h3>HTML - BÁSICO</h3>
                <p>Fundação BRADESCO - 2020</p>
            </div>
            <div class="c1">
                <h3>HTML - AVANÇADO</h3>
                <p>Fundação BRADESCO - 2020</p>
            </div>
            <div class="c2">
                <h3>INTRODUÇÃO AO HACKING E PENTEST</h3>
                <p>SOLYD - 2020</p>
            </div>
            <div class="c1">
                <h3>ALGORITMOS E LÓGICA DE PROGRAMAÇÃO</h3>
                <p>Udemy - 2020</p>
            </div>
            <div class="c2">
                <h3>PYTHON BÁSICO</h3>
                <p>SOLYD - 2020</p>
            </div>
            <div class="c3">
                <h3>INTRODUÇÃO AO PYTHON</h3>
                <p>Udemy - 2020</p>
            </div>
        </div>
        <div id="outros-cursos">
            <div class="title-outros-cursos">
                <h2>Outros Cursos</h2>
            </div>
            <div class="oc1">
                <h3>ALEMÃO BÁSICO</h3>
                <p>Babbel – 2018/2019</p>
            </div>
            <div class="oc2">
                <h3>ALGORITMOS E LÓGICA</h3>
                <p>Udemy - 2020</p>
            </div>
        </div>
        <div id="exp-profissional">
            <h2>Experiência Profissional</h2>
            <div class="lista-expf">
                <ul>
                    <li>
                        <h3>SECRETARIA ESPECIAL DE AGRICULTURA FAMILIAR E DESENVOLVIMENTO AGRÁRIO (04/06/2018 – 31/01/2019)</h3>
                        <p class="expf-funcao">Função: Estagiário</p>
                        <p>
                            Atribuições: Estágio de meio período com objetivo de aprendizado na 
                            entrada e saída de processos, 
                            cadastro de correspondência e atividades básicas de pacote Office.
                        </p>
                    </li>
                    <li>
                        <h3>TRIBUNAL DE JUSTIÇA DO DF TJDFT (22/02/2019 – 11/06/2019)</h3>
                        <p class="expf-funcao">Função: Estagiário</p>
                        <p>
                            Atribuições: Estágio de meio período com objetivo de aprendizado na entrada e saída de processos,
                            cadastro de correspondência e atividades básicas de pacote Office 
                            e montagem de malotes judiciais.

                        </p>
                    </li>
                    <li>
                        <h3>AUTO COLORADO VEÍCULO (11/2019 – 01/2020)</h3>
                        <p class="expf-funcao">Função: Vendedor e Atendente</p>
                        <p>
                            Função: Função: Vendedor e Atendente
                            Atribuições: Atribuições: Atendimento ao cliente, marketing digital,
                            photoshop, analise de documentação
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div id="conhecimentos">
            <h2>Conhecimentos</h2>
            <div class="lista-conhecimentos">
                <ul>
                    <li>
                        <p>
                            Windows, Word, Excel, Internet, Power Point, Outlook.
                        </p>
                    </li>
                    <li>
                        <p>
                            Hacking e Penteste, Programação de Computadores, 
                            Lógica de Programação, Python, JavaScript, C, HTML e CSS.
                        </p>
                    </li>
                    <li>
                        <p>
                            Photoshop, Canva, SEI, DaVinci Resolve, Fl Studio, Figma, Linux, Kali Linux .
                        </p>
                    </li>
                    <li>
                        <p>
                            Inglês – Intermediário; Espanhol – Intermediário; Alemão – Básico.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="banner-rodape">
            <div class="name-rodape">
                <h2>&#169;Thyago Moura</h2>
            </div>
            <div class="img-rodape">
                <a href="https://github.com/Dxt5"><img src={imgfooter2}/></a>
                <a href="https://www.instagram.com/thyagomouraa/"><img src={imgfooter3}/></a>
                <a href="mailto:thyagohenriquemoura@gmail.com?"><img src={imgfooter1}/></a>
            </div>
        </div>
       </div>
    );
  }
  
  export default Curriculo;