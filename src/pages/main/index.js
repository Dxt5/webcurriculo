import './style.css';
import imgfooter1 from '../../imagens/email.png';
import imgfooter2 from '../../imagens/git.png';
import imgfooter3 from '../../imagens/insta.jpg';

function Main() {
  return (
    <div className="body">
      <div className="bloco-navegacao">
          <nav className="todo-menu">
              <div className="opcoes">
                  <ul>
                      <li><a href="../curriculo#dados-pessoais">Dados Pessoais</a> </li>
                      <li><a href="../curriculo#info-academic">Informações Acadêmicas</a> </li>
                      <li><a href="../curriculo#cursos">Cursos</a> </li>
                      <li><a href="../curriculo#outros-cursos">Outros Cursos</a> </li>
                      <li><a href="../curriculo#exp-profissional">Experiência Profissional</a> </li>
                      <li><a href="../curriculo#conhecimentos">Conhecimentos</a> </li>
                  </ul>
              </div>
          </nav>
      </div>
      <div class="sopraver">
            <h1>Web Currículo</h1>
            <h2>Deseja me conhecer mais um <br/>pouquinho?</h2>
        </div>
        <div class="maior-butao">
            <div class="menor-butao">
                <a href="../curriculo"><h3>Clique Aqui</h3></a>
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

export default Main;
