import React, { useRef } from "react";
import { palette, Title } from "../../styles/GlobalStyles";
import Card from "../../components/Card";

import { CardWrapper, SkillsContainer, Slide, SlideButton } from "./style";

import cardRedSVG from "../../img/cards/card_red.svg";
import cardGreenSVG from "../../img/cards/card_green.svg";
import cardBlueSVG from "../../img/cards/card_blue.svg";
import cardPurpleSVG from "../../img/cards/card_purple.svg";
import htmlSVG from "../../img/cards/html.svg";
import designSVG from "../../img/cards/design.svg";
import starsSVG from "../../img/cards/stars.svg";
import frameworksSVG from "../../img/cards/frameworks.svg";

function Skills() {
  const slideRef = useRef(Function);

  const previous = () => {
    if (slideRef.current.scrollLeft < 18) {
      return (slideRef.current.scrollLeft += 945);
    }
    return (slideRef.current.scrollLeft -= 200);
  };

  const next = () => {
    if (slideRef.current.scrollLeft > 850) {
      return (slideRef.current.scrollLeft -= 945);
    }
    return (slideRef.current.scrollLeft += 200);
  };

  return (
    <SkillsContainer id="Section-C">
      <Title>Skills</Title>
      <Slide>
        <SlideButton onClick={() => previous()} id="previous">
          &#60;
        </SlideButton>
        <SlideButton onClick={() => next()} id="next">
          &#62;
        </SlideButton>
        <CardWrapper ref={slideRef} id="slides">
          <Card
            wave={cardRedSVG}
            icon={htmlSVG}
            card_fill={palette.cards.background.red}
            shadow={palette.cards.border.red}
            shadow_hover={palette.cards.border.selectedRed}
          >
            {"Conhecimentos em HTML e CSS avançados, sabendo bastante as tags e montagem de estruturas, estilização de páginas tanto manual com o próprio css ou com alguma biblioteca como Bootstrap, Material, Vuetify etc... "}
          </Card>
          <Card
            wave={cardGreenSVG}
            icon={designSVG}
            card_fill={palette.cards.background.green}
            shadow={palette.cards.border.green}
            shadow_hover={palette.cards.border.selectedGreen}
          >
            {"Prototipação é a chave de uma boa visualização do que se quer construir tanto na parte de HTML quanto no css ou em outra engine de estilizção, utilizo bastante o Figma para UX e UI dos meus projetos, inclusive esse portifólio "}
          </Card>
          <Card
            wave={cardBlueSVG}
            icon={starsSVG}
            card_fill={palette.cards.background.blue}
            shadow={palette.cards.border.blue}
            shadow_hover={palette.cards.border.selectedBlue}
          >
            {"em cada código que eu faço/refatoro eu levo o desenvolvimento agil comigo, tenho muito apreço pelos livros do Robert C. martin(uncle bob) que me passou muitos conhecimento relacionados a desenvolvimento agil, Código limpo. "}
          </Card>
          <Card
            wave={cardPurpleSVG}
            icon={frameworksSVG}
            card_fill={palette.cards.background.purple}
            shadow={palette.cards.border.purple}
            shadow_hover={palette.cards.border.selectedPurple}
          >
            {"já Estudei diversos Frameworks, porém Django, Vue.js e React.js/Next.js são os que eu mais consegui tirar proveito e ter avanços, Django é um ótimo framework para fazer Api e vue.js React/next.js são ótimos para fazer um frontend bonito e eficiente"}
          </Card>
        </CardWrapper>
      </Slide>
    </SkillsContainer>
  );
}

export default Skills;
