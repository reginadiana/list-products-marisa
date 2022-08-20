import React from "react";
import * as Styled from "./Footer.style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComments } from "@fortawesome/free-regular-svg-icons";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Article className="flex-column">
        <h3 className="article__title">Não encontrou o que estava procurando?</h3>
        <div className="flex article__item">
          {/* <FontAwesomeIcon icon={faComments} />{" "} */}
          <a href="#!">Podemos ajudar? Fale conosco</a>
        </div>
        <div className="flex article__item">
          {/* <FontAwesomeIcon icon={faLocationDot} />{" "} */}
          <a href="#!">Encontre as lojas mais próximas</a>
        </div>
      </Styled.Article>
      <section className="md-flex">
        <Styled.Details open>
          <Styled.Summary>departamentos</Styled.Summary>
          <ul>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                feminino
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                calçados
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                lingerie
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                jeans
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                plus size
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                acessórios
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                infantil
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                masculino
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                marcas
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                black friday
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                roupas femininas
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                blusas
              </a>
            </Styled.Item>
          </ul>
        </Styled.Details>
        <Styled.Details open>
          <Styled.Summary>institucional</Styled.Summary>
          <ul>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                sobre a marisa
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                nossas lojas
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                investidores
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                termos de segurança
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                impresa
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                MBank
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                mapa do site
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                certificados
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                política de privacidade
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                fornecedores
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                canal de denúncias
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                sustentabilidade
              </a>
            </Styled.Item>
          </ul>
        </Styled.Details>
        <Styled.Details open>
          <Styled.Summary>atendimento ao cliente</Styled.Summary>
          <ul>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                nossos canais de atendimento
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                fale com a gente
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                formas de pagamento
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                troca e devoluções
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                meus pedidos
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                como comprar
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                prazo de entrega
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                2 via de boleto
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                regras e promoções
              </a>
            </Styled.Item>
          </ul>
        </Styled.Details>
        <Styled.Details open>
          <Styled.Summary>trabalhe conosco</Styled.Summary>
          <ul>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                trabalhe conosco
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                contratação de modelos
              </a>
            </Styled.Item>
            <Styled.Item>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                sou sócia
              </a>
            </Styled.Item>
          </ul>
        </Styled.Details>
      </section>
    </Styled.Footer>
  );
};

export default Footer;
