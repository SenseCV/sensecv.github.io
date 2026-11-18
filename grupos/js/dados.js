/* Dados do mapeamento. Edite aqui para atualizar o site. */
window.DADOS = {
 "meta": {
  "verificadoEm": "2026-11-08",
  "verificadoEmTexto": "8 de novembro de 2026"
 },
 "paises": {
  "US": {
   "nome": "Estados Unidos",
   "bandeira": "🇺🇸"
  },
  "DE": {
   "nome": "Alemanha",
   "bandeira": "🇩🇪"
  },
  "CH": {
   "nome": "Suíça",
   "bandeira": "🇨🇭"
  },
  "IT": {
   "nome": "Itália",
   "bandeira": "🇮🇹"
  },
  "BR": {
   "nome": "Brasil",
   "bandeira": "🇧🇷"
  },
  "JP": {
   "nome": "Japão",
   "bandeira": "🇯🇵"
  },
  "KR": {
   "nome": "Coreia do Sul",
   "bandeira": "🇰🇷"
  },
  "ES": {
   "nome": "Espanha",
   "bandeira": "🇪🇸"
  },
  "GB": {
   "nome": "Reino Unido",
   "bandeira": "🇬🇧"
  },
  "CN": {
   "nome": "China",
   "bandeira": "🇨🇳"
  }
 },
 "grupos": [
  {
   "id": "aigd",
   "nome": "AI Guide Dog",
   "secao": "assistiva",
   "tipo": "equipe",
   "instituicao": "Carnegie Mellon University, com colaboração externa (Pinterest)",
   "paises": [
    "US"
   ],
   "pagina": {
    "url": "https://arxiv.org/abs/2501.07957",
    "tipo": "Página do artigo (a equipe não tem página própria)"
   },
   "areas": [
    "Navegação assistiva",
    "Predição de direção e trajetória",
    "Navegação interna e externa"
   ],
   "linhas": [
    "Navegação assistiva",
    "Imagens em primeira pessoa",
    "Predição de direção",
    "Modelos leves para smartphone",
    "Integração com GPS"
   ],
   "resumo": {
    "foco": "Navegação assistiva em tempo real usando apenas a câmera de um smartphone usado junto ao peito.",
    "problemas": "Muitos sistemas de apoio à navegação dependem de equipamentos caros e volumosos, como LiDAR. A equipe busca orientar pessoas com deficiência visual tanto em trajetos com destino definido (ambiente externo) quanto em exploração sem destino (ambiente interno).",
    "tecnologias": "Classificação multirrótulo baseada só em visão, que prevê as próximas ações de direção (seguir em frente, virar à esquerda, virar à direita). O artigo compara modelos CNN e recorrentes (ConvLSTM, CNN+LSTM) e combina o vídeo com sinais de GPS e direções de alto nível.",
    "contribuicoes": "Formula a navegação como predição egocêntrica de caminho em vez de previsão exata de trajetória, propõe um método para incorporar o destino ao modelo visual e apresenta um aplicativo de baixa latência executado no próprio celular, além dos dados e avaliações descritos no artigo."
   },
   "trabalhos": [
    "aigd"
   ],
   "datasets": [
    "aigd-dados"
   ],
   "observacoes": [
    "Os autores estavam vinculados à Carnegie Mellon University quando o trabalho foi feito; uma nota do artigo informa que vários deles atuam hoje em empresas. A lista de pesquisadores representa os autores do trabalho, não uma equipe ativa."
   ],
   "imagem": {
    "arquivo": "img/g-aigd.jpg",
    "fonte": "Figura 1 do artigo AI Guide Dog (arXiv 2501.07957)",
    "url": "https://arxiv.org/abs/2501.07957",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Pessoa com bengala usando o celular preso ao corpo, ao lado da previsão de direção na imagem da câmera"
   }
  },
  {
   "id": "kit",
   "nome": "Vision4Blind — cv:hci",
   "secao": "assistiva",
   "tipo": "laboratorio",
   "instituicao": "Karlsruhe Institute of Technology (KIT) — Computer Vision for Human-Computer Interaction Lab",
   "paises": [
    "DE"
   ],
   "pagina": {
    "url": "https://cvhci.iar.kit.edu/1108.php",
    "tipo": "Página da linha de pesquisa no site do laboratório"
   },
   "linksExtras": [
    {
     "rotulo": "Demonstração Vision4Blind (ICCV 2023)",
     "url": "https://jamycheung.github.io/Vision4Blind.html"
    }
   ],
   "areas": [
    "Navegação assistiva",
    "Caminho livre e área navegável",
    "Detecção de obstáculos",
    "Compreensão de cena",
    "Dispositivos vestíveis",
    "Feedback sonoro e tátil"
   ],
   "linhas": [
    "Visão computacional assistiva",
    "Identificação de áreas abertas",
    "Detecção e desvio de obstáculos",
    "Compreensão de cena",
    "Dispositivos vestíveis",
    "Interfaces sonoras e táteis"
   ],
   "resumo": {
    "foco": "Sistemas de percepção visual que ajudam pessoas com deficiência visual a entender o ambiente e se deslocar com mais autonomia.",
    "problemas": "Determinar a região livre de obstáculos à frente de quem caminha, detectar obstáculos a distância (o que a bengala não alcança) e descrever cenas e objetos relevantes, como objetos transparentes e materiais.",
    "tecnologias": "Campos aleatórios condicionais (CRF) com textura e profundidade de câmera estéreo; adaptação de algoritmos de carros autônomos (stixels) para detecção de obstáculos; segmentação semântica e transformers; reconhecimento de situações combinado ao Segment Anything (SAM).",
    "contribuicoes": "Dataset de cenas urbanas internas e externas gravadas com câmera estéreo de mão (Way to Go!), protótipo de desvio de obstáculos baseado em hardware automotivo avaliado com seis pessoas vendadas e o sistema OpenSU de compreensão de cena para pessoas com deficiência visual."
   },
   "trabalhos": [
    "waytogo",
    "autocars",
    "opensu"
   ],
   "datasets": [],
   "observacoes": [
    "O projeto eSash, citado no levantamento original, não foi encontrado em fontes verificáveis e não foi incluído.",
    "O nome “Kaiwei Yang” não foi localizado nos trabalhos do grupo. O pesquisador do KIT que aparece nos trabalhos é Kailun Yang, cadastrado em seu lugar."
   ],
   "imagem": {
    "arquivo": "img/g-kit.jpg",
    "fonte": "Página Vision4Blind (KIT)",
    "url": "https://jamycheung.github.io/Vision4Blind.html",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Protótipo vestível com óculos, câmera e processador portátil, e exemplos de segmentação"
   }
  },
  {
   "id": "slade",
   "nome": "Slade Lab — Mobilio",
   "secao": "assistiva",
   "tipo": "laboratorio",
   "instituicao": "Harvard University — John A. Paulson School of Engineering and Applied Sciences (SEAS)",
   "paises": [
    "US"
   ],
   "pagina": {
    "url": "https://sladelab.seas.harvard.edu/",
    "tipo": "Página do laboratório"
   },
   "linksExtras": [
    {
     "rotulo": "Notícia oficial da Harvard SEAS sobre o Mobilio",
     "url": "https://seas.harvard.edu/news/smartphone-navigation-app-people-blindness-and-low-vision"
    }
   ],
   "areas": [
    "Navegação assistiva",
    "Navegação interna e externa",
    "Detecção de obstáculos",
    "Feedback sonoro e tátil",
    "Avaliação com usuários"
   ],
   "linhas": [
    "Navegação assistiva ao ar livre",
    "Detecção e desvio de obstáculos",
    "Visão computacional em smartphone",
    "Orientação sonora personalizada",
    "Avaliação com usuários"
   ],
   "resumo": {
    "foco": "Dispositivos assistivos e mobilidade. No Mobilio, um aplicativo de smartphone que orienta pessoas cegas ou com baixa visão em trajetos externos.",
    "problemas": "Um levantamento com mais de 100 pessoas cegas ou com baixa visão apontou três necessidades: instruções curva a curva confiáveis, orientação contínua ao longo de calçadas e detecção e desvio de obstáculos. O GPS sozinho não é preciso o suficiente para isso.",
    "tecnologias": "Câmera, GPS, sensor inercial e LiDAR do próprio celular (quando disponível), modelos de visão computacional executados em tempo real no aparelho, planejamento de rota inspirado em veículos autônomos e bipes sonoros contínuos personalizados.",
    "contribuicoes": "Em estudo com 14 participantes do Carroll Center for the Blind, o uso do Mobilio com bengala tornou a rota externa cerca de 13% mais rápida e reduziu em cerca de 41% os contatos com obstáculos no percurso interno, em comparação com Google Maps e bengala (dados da nota oficial da Harvard)."
   },
   "trabalhos": [
    "mobilio"
   ],
   "datasets": [],
   "observacoes": [
    "Amostra pequena (14 participantes). A equipe informa que pretende testar o sistema em mais ambientes reais.",
    "O repositório github.com/Harvard-Slade-Lab/Mobilio indicado no levantamento original não pôde ser verificado; por isso não há afirmação sobre código ou dados públicos."
   ],
   "imagem": {
    "arquivo": "img/g-slade.jpg",
    "fonte": "Página de pesquisa do Slade Lab (Harvard)",
    "url": "https://sladelab.seas.harvard.edu/research/",
    "ajuste": "cover",
    "pos": "center 30%",
    "alt": "Pessoa com bengala caminhando em um caminho ao ar livre usando o assistente de navegação"
   }
  },
  {
   "id": "vita",
   "nome": "VITA Laboratory — HEADS-UP",
   "secao": "assistiva",
   "tipo": "laboratorio",
   "instituicao": "École Polytechnique Fédérale de Lausanne (EPFL) — Visual Intelligence for Transportation",
   "paises": [
    "CH"
   ],
   "pagina": {
    "url": "https://www.epfl.ch/labs/vita/research/prediction/heads-up/",
    "tipo": "Página do projeto no site do laboratório"
   },
   "areas": [
    "Navegação assistiva",
    "Predição de direção e trajetória",
    "Detecção de obstáculos",
    "Datasets"
   ],
   "linhas": [
    "Predição de trajetórias",
    "Obstáculos em movimento",
    "Risco de colisão",
    "Imagens egocêntricas",
    "Navegação assistiva"
   ],
   "resumo": {
    "foco": "Inteligência visual e previsão de movimento. No HEADS-UP, a previsão de trajetórias de pedestres é aplicada a sistemas de assistência para pessoas cegas.",
    "problemas": "A bengala oferece pouca ajuda contra obstáculos dinâmicos. O grupo busca prever, a partir de uma câmera presa à cabeça, a trajetória de pedestres próximos e avaliar o risco de colisão com quem usa o sistema.",
    "tecnologias": "Câmera estéreo ZED Mini montada em um boné (RGB, profundidade, nuvem de pontos e IMU), predição de trajetória em um sistema de coordenadas semi-local e implementação em ROS executada em GPU NVIDIA Jetson.",
    "contribuicoes": "Primeiro dataset egocêntrico de câmera na cabeça voltado à predição de trajetórias em assistência a pessoas cegas (mais de 43 mil quadros e cerca de mil trajetórias de pedestres), além de um método base validado no dataset e em testes ao vivo com usuários."
   },
   "trabalhos": [
    "headsup"
   ],
   "datasets": [
    "headsup"
   ],
   "observacoes": [
    "Quatro coautores do HEADS-UP têm afiliações diferentes da EPFL no artigo; essas afiliações não foram confirmadas e o país deles aparece como não informado."
   ],
   "imagem": {
    "arquivo": "img/g-vita.jpg",
    "fonte": "Página do HEADS-UP (VITA, EPFL), quadro de vídeo",
    "url": "https://www.epfl.ch/labs/vita/research/prediction/heads-up/",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Vista em primeira pessoa de um caminho arborizado gravada pela câmera na cabeça"
   }
  },
  {
   "id": "ohnbar",
   "nome": "Pesquisa de Eshed Ohn-Bar — ASSISTER",
   "secao": "assistiva",
   "tipo": "equipe",
   "instituicao": "Boston University",
   "paises": [
    "US"
   ],
   "pagina": {
    "url": "https://www.bu.edu/cise/advancing-assistive-technologies-with-ai/",
    "tipo": "Página institucional (notícia da BU sobre a pesquisa)"
   },
   "areas": [
    "Navegação assistiva",
    "Navegação interna e externa",
    "Datasets"
   ],
   "linhas": [
    "Navegação assistiva",
    "Geração de instruções",
    "Cenas urbanas dinâmicas",
    "Aprendizado por imitação",
    "Dados reais e simulados"
   ],
   "resumo": {
    "foco": "Sistemas inteligentes que aprendem a partir de interações para oferecer assistência personalizada à navegação.",
    "problemas": "Gerar, em tempo real, instruções em linguagem natural para uma pessoa cega que caminha em cenários urbanos dinâmicos, levando em conta o destino, os comandos de navegação e a segurança imediata.",
    "tecnologias": "Navegação visão-e-linguagem (VLN), agente treinado por imitação a partir do modo como guias de orientação e mobilidade conduzem pessoas, geração condicional de instruções e uso combinado de dados simulados e reais.",
    "contribuicoes": "Define a tarefa de navegação visão-e-linguagem assistiva e apresenta o agente ASSISTER (ECCV 2022), com repositório que descreve os dados UrbanWalk. Segundo a Boston University, a equipe testa uma versão do sistema em aplicativo de smartphone."
   },
   "trabalhos": [
    "assister"
   ],
   "datasets": [
    "urbanwalk"
   ],
   "observacoes": [
    "A página do relatório final do projeto na BU indicada no levantamento original não pôde ser verificada. Por isso, os pesquisadores listados apenas nesse relatório (Calin Belta, Venkatesh Saligrama e Ruizhao Zhu) não foram incluídos."
   ],
   "imagem": {
    "arquivo": "img/g-ohnbar.jpg",
    "fonte": "Matéria do CISE, Boston University",
    "url": "https://www.bu.edu/cise/advancing-assistive-technologies-with-ai/",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Pessoa com bengala em uma calçada urbana durante a coleta de dados"
   }
  },
  {
   "id": "coughlan",
   "nome": "Coughlan Lab",
   "secao": "assistiva",
   "tipo": "laboratorio",
   "instituicao": "Smith-Kettlewell Eye Research Institute (SKERI), São Francisco",
   "paises": [
    "US"
   ],
   "pagina": {
    "url": "https://www.ski.org/lab/coughlan-lab/",
    "tipo": "Página do laboratório no site do SKERI"
   },
   "areas": [
    "Navegação assistiva",
    "Navegação interna e externa",
    "Feedback sonoro e tátil",
    "Avaliação com usuários"
   ],
   "linhas": [
    "Visão computacional assistiva",
    "Orientação em cruzamentos",
    "Localização em ambientes internos",
    "Reconhecimento de sinalização",
    "Mapas e interfaces acessíveis"
   ],
   "resumo": {
    "foco": "Desenvolver e testar tecnologia assistiva habilitada por visão computacional e outros sensores para pessoas cegas ou com baixa visão.",
    "problemas": "Travessia segura de cruzamentos, localização e orientação em ambientes internos sem instalar infraestrutura (como beacons) e acesso não visual a mapas.",
    "tecnologias": "Smartphone com visão computacional, reconhecimento de placas existentes (como placas de saída), odometria visual-inercial, mapas digitais 2D e áudio espacial.",
    "contribuicoes": "Sistema Crosswatch para cruzamentos, aplicativo de navegação interna com instruções curva a curva, ferramentas de mapas não visuais e colaboração com a Universidade de Milão no NavGraph."
   },
   "trabalhos": [
    "crosswatch",
    "indoorapp",
    "mapa3d",
    "navgraph"
   ],
   "datasets": [],
   "observacoes": [],
   "imagem": {
    "arquivo": "img/g-coughlan.jpg",
    "fonte": "Página do Coughlan Lab (Smith-Kettlewell)",
    "url": "https://www.ski.org/lab/coughlan-lab/",
    "ajuste": "cover",
    "pos": "center 40%",
    "alt": "Cruzamento visto pela câmera do celular, com o sinal de pedestre destacado"
   }
  },
  {
   "id": "everyware",
   "nome": "EveryWare Lab",
   "secao": "assistiva",
   "tipo": "laboratorio",
   "instituicao": "Università degli Studi di Milano — Dipartimento di Informatica",
   "paises": [
    "IT"
   ],
   "pagina": {
    "url": "https://everywarelab.di.unimi.it/",
    "tipo": "Página do laboratório"
   },
   "areas": [
    "Navegação assistiva",
    "Feedback sonoro e tátil",
    "Avaliação com usuários"
   ],
   "linhas": [
    "Tecnologias móveis",
    "Acessibilidade",
    "Navegação assistida",
    "Sonificação e interfaces multimodais",
    "Interação humano-computador"
   ],
   "resumo": {
    "foco": "IA e gestão de dados para computação móvel e pervasiva, com aplicações em saúde digital e tecnologias assistivas.",
    "problemas": "Em navegação assistida, equilibrar segurança e quantidade de instruções: o usuário precisa saber que segue a rota correta sem ser sobrecarregado de mensagens.",
    "tecnologias": "Arquitetura modular de navegação (localização, roteamento, orientação e interface), princípio de “instruções parcimoniosas” e sonificação de instruções.",
    "contribuicoes": "NavGraph, avaliado com 10 participantes cegos: menos instruções, mais clareza e mais tempo em áreas seguras, sem aumentar o tempo de percurso. O grupo também tem trabalhos sobre detecção de faixas de pedestre e semáforos para pessoas com deficiência visual."
   },
   "trabalhos": [
    "navgraph"
   ],
   "datasets": [],
   "observacoes": [
    "A página indicada no levantamento original (di.unimi.it) não pôde ser verificada; foi substituída pelo site oficial do laboratório."
   ],
   "imagem": {
    "arquivo": "img/g-everyware.jpg",
    "fonte": "Página do EveryWare Lab (Universidade de Milão)",
    "url": "https://everywarelab.di.unimi.it/",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Diagrama das áreas do laboratório: computação pervasiva, inteligência artificial e privacidade de dados"
   }
  },
  {
   "id": "navwear",
   "nome": "Projeto NavWear",
   "secao": "assistiva",
   "tipo": "colaboracao",
   "instituicao": "Unesp (Bauru), Ufes e USP",
   "paises": [
    "BR"
   ],
   "pagina": {
    "url": "https://repositorio.unesp.br/entities/publication/c77bbb9c-e424-4e81-81d9-d58783a0181c",
    "tipo": "Registro do artigo no repositório institucional (o projeto não tem página própria)"
   },
   "linksExtras": [
    {
     "rotulo": "Registro no eduCAPES",
     "url": "https://educapes.capes.gov.br/handle/11449/298218?mode=full"
    },
    {
     "rotulo": "Reportagem da Revista Pesquisa FAPESP",
     "url": "https://revistapesquisa.fapesp.br/camera-acoplada-a-mochila-alerta-sobre-obstaculos-para-deficiente-visual/"
    }
   ],
   "areas": [
    "Detecção de obstáculos",
    "Dispositivos vestíveis",
    "Feedback sonoro e tátil",
    "Avaliação com usuários"
   ],
   "linhas": [
    "Detecção de obstáculos",
    "Tecnologia assistiva vestível",
    "Câmeras RGB-D",
    "Feedback por vibração",
    "Usabilidade e design"
   ],
   "resumo": {
    "foco": "Projeto e avaliação de um dispositivo vestível que detecta obstáculos acima da linha da cintura, complementando a bengala.",
    "problemas": "A bengala alerta sobretudo para obstáculos próximos ao chão. A equipe também busca tratar aspectos pouco estudados da interação entre usuário e dispositivo, como conforto e aceitação.",
    "tecnologias": "Câmera RGB-D e unidade de processamento integradas a uma mochila, com sinalizadores táteis nas alças: o lado do obstáculo vibra.",
    "contribuicoes": "Protótipo desenvolvido por equipe interdisciplinar de design e engenharia elétrica. Nos testes, usar NavWear junto com a bengala resultou em menos colisões, menos frustração e maior percepção de segurança."
   },
   "trabalhos": [
    "navwear"
   ],
   "datasets": [],
   "observacoes": [
    "Limitação da avaliação: o protótipo foi testado com 10 participantes vendados, não com pessoas cegas, em percursos de obstáculos. Segundo a autora, isso ocorreu por restrições da pandemia, e os resultados não podem ser generalizados para pessoas com deficiência visual."
   ],
   "imagem": {
    "arquivo": "img/g-navwear.jpg",
    "fonte": "Ilustração: Revista Pesquisa FAPESP",
    "url": "https://revistapesquisa.fapesp.br/camera-acoplada-a-mochila-alerta-sobre-obstaculos-para-deficiente-visual/",
    "ajuste": "cover",
    "pos": "center 35%",
    "alt": "Ilustração de pessoa com mochila equipada com câmera que emite alertas"
   }
  },
  {
   "id": "sanpo",
   "nome": "Google Research — SANPO",
   "secao": "assistiva",
   "tipo": "equipe",
   "instituicao": "Google Research, com dados sintéticos produzidos em parceria com a Parallel Domain",
   "paises": [
    "US"
   ],
   "pagina": {
    "url": "https://google-research-datasets.github.io/sanpo_dataset/",
    "tipo": "Página oficial do dataset"
   },
   "linksExtras": [
    {
     "rotulo": "Post do Google Research sobre o SANPO",
     "url": "https://research.google/blog/sanpo-a-scene-understanding-accessibility-navigation-pathfinding-obstacle-avoidance-dataset/"
    }
   ],
   "areas": [
    "Compreensão de cena",
    "Caminho livre e área navegável",
    "Detecção de obstáculos",
    "Datasets"
   ],
   "linhas": [
    "Compreensão de cenas",
    "Navegação humana",
    "Dados egocêntricos",
    "Segmentação panóptica",
    "Profundidade",
    "Dados reais e sintéticos"
   ],
   "resumo": {
    "foco": "Compreensão de cena egocêntrica para navegação humana em ambientes externos.",
    "problemas": "Há poucos datasets públicos voltados à navegação de pedestres; os de carros autônomos generalizam mal para o ponto de vista de uma pessoa caminhando.",
    "tecnologias": "Gravação com duas câmeras estéreo (uma na cabeça e outra no peito), mapas de profundidade, segmentação panóptica temporalmente consistente e vídeos sintéticos com anotações exatas.",
    "contribuicoes": "Dataset com 701 vídeos estéreo reais de quatro locais nos EUA e 1.961 vídeos sintéticos. Segundo o artigo, o SANPO é usado pelo Project Guideline para treinar modelos móveis que ajudam pessoas com baixa visão a correr de forma independente."
   },
   "trabalhos": [
    "sanpo"
   ],
   "datasets": [
    "sanpo"
   ],
   "observacoes": [],
   "imagem": {
    "arquivo": "img/g-sanpo.jpg",
    "fonte": "Página do dataset SANPO (Google Research)",
    "url": "https://google-research-datasets.github.io/sanpo_dataset/",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Esquema das câmeras na cabeça e no peito, com imagens estéreo, profundidade e segmentação"
   }
  },
  {
   "id": "daros",
   "nome": "DARoS Lab — GuideNav",
   "secao": "robotica",
   "classeRobotica": "assistiva",
   "tipo": "laboratorio",
   "instituicao": "University of Massachusetts Amherst, com colaboradores da UT Austin, University of Maine e DGIST",
   "paises": [
    "US"
   ],
   "pagina": {
    "url": "https://www.umass.edu/robotics/people/donghyun-kim",
    "tipo": "Página institucional do diretor do laboratório"
   },
   "linksExtras": [
    {
     "rotulo": "GuideData — dataset de interação condutor–cão-guia",
     "url": "https://guidedogrobot-hgidataset.github.io"
    },
    {
     "rotulo": "GuideTWSI — dataset de piso tátil",
     "url": "https://guidedogrobot-tactile.github.io"
    }
   ],
   "areas": [
    "Robôs-guia",
    "Navegação assistiva",
    "Datasets",
    "Avaliação com usuários"
   ],
   "linhas": [
    "Robôs-guia",
    "Navegação apenas visual",
    "Interação humano-robô",
    "Aprendizado de rotas (teach-and-repeat)",
    "Detecção de piso tátil"
   ],
   "resumo": {
    "foco": "Sistemas robóticos dinâmicos e autônomos, com uma linha dedicada a robôs-guia quadrúpedes para pessoas cegas ou com baixa visão.",
    "problemas": "Décadas de robôs-guia quase não chegaram a usuários finais. O grupo parte das necessidades reais de condutores de cães-guia e busca navegação confiável sem sensores caros, pesados e de alto consumo, como LiDAR.",
    "tecnologias": "Navegação apenas visual no estilo teach-and-repeat (o robô repete uma rota demonstrada), reconhecimento visual de lugares com filtragem temporal, estimador de pose relativa e segmentação de piso tátil de alerta.",
    "contribuicoes": "Estudo formativo com 26 condutores de cães-guia, 4 usuários de bengala, 9 treinadores e 1 instrutor de orientação e mobilidade, com dataset aberto (GuideData); GuideNav seguiu rotas em escala de quilômetros em cinco ambientes externos; GuideTWSI permitiu ao robô parar em piso tátil com taxa de sucesso acima de 96%."
   },
   "trabalhos": [
    "guidenav",
    "guidetwsi"
   ],
   "datasets": [
    "guidedata",
    "guidetwsi"
   ],
   "observacoes": [
    "A página www.umass.edu/robotics/daros/research/guide-dog-robot e a página guidedogrobot-navigation.github.io indicadas no levantamento original não puderam ser verificadas.",
    "No artigo GuideNav, o primeiro autor é Hochul Hwang; Donghyun Kim é o último autor."
   ],
   "imagem": {
    "arquivo": "img/g-daros.jpg",
    "fonte": "Figura 1 do artigo GuideTWSI (arXiv 2603.07060)",
    "url": "https://arxiv.org/abs/2603.07060",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Cão-guia e robô quadrúpede parando antes do piso tátil, com os tipos de piso tátil"
   }
  },
  {
   "id": "miraikan",
   "nome": "Miraikan Accessibility Lab — AI Suitcase",
   "secao": "robotica",
   "classeRobotica": "assistiva",
   "tipo": "laboratorio",
   "instituicao": "Miraikan (Museu Nacional de Ciência e Inovação Emergentes), em consórcio com IBM Research, Carnegie Mellon University e outras instituições",
   "paises": [
    "JP"
   ],
   "pagina": {
    "url": "https://www.miraikan.jst.go.jp/en/lab/AccessibilityLab/",
    "tipo": "Página do laboratório"
   },
   "linksExtras": [
    {
     "rotulo": "Página oficial do AI Suitcase",
     "url": "https://www.miraikan.jst.go.jp/en/lab/AIsuitcase/"
    }
   ],
   "areas": [
    "Robôs-guia",
    "Navegação assistiva",
    "Navegação interna e externa",
    "Detecção de obstáculos",
    "Avaliação com usuários"
   ],
   "linhas": [
    "Robôs-guia",
    "Detecção de obstáculos e pedestres",
    "Navegação em espaços públicos",
    "Interação humano-robô",
    "Controle compartilhado"
   ],
   "resumo": {
    "foco": "Consórcio de pesquisa que cria tecnologias para que pessoas com deficiência visual se desloquem livremente pela cidade, com destaque para o robô de navegação AI Suitcase.",
    "problemas": "Pessoas com deficiência visual que visitam pela primeira vez shoppings, museus e terminais de transporte têm dificuldade para se orientar de forma independente e segura.",
    "tecnologias": "Robô em formato de mala com LiDAR, câmeras de profundidade e GPU; posicionamento por satélite RTK no modelo externo; reconhecimento de pedestres por IA; aplicativo de smartphone para escolher o destino e placas vibratórias na alça que indicam as curvas.",
    "contribuicoes": "Testes de campo com cerca de 2.200 participantes até setembro de 2024, um quarto deles com deficiência visual, incluindo operação diária no Miraikan desde abril de 2024 e teste em larga escala na Expo 2025 de Osaka. O grupo também estuda controle compartilhado e passeios guiados por robô."
   },
   "trabalhos": [
    "fieldtrials",
    "grouptours"
   ],
   "datasets": [],
   "observacoes": [
    "Os testes ocorreram no Japão, onde normas sociais, infraestrutura e regras diferem de outros países. O artigo de 2025 é um estudo de caso (resumo estendido da CHI), não um estudo controlado."
   ],
   "imagem": {
    "arquivo": "img/g-miraikan.jpg",
    "fonte": "Página do AI Suitcase (Miraikan)",
    "url": "https://www.miraikan.jst.go.jp/en/lab/AIsuitcase/",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Pessoa guiada pela AI Suitcase em uma exposição do museu"
   }
  },
  {
   "id": "rpg",
   "nome": "Robotics and Perception Group — DroNet",
   "secao": "robotica",
   "classeRobotica": "metodologica",
   "tipo": "laboratorio",
   "instituicao": "Universidade de Zurique, com colaboradores da Universidad Politécnica de Madrid",
   "paises": [
    "CH"
   ],
   "pagina": {
    "url": "https://rpg.ifi.uzh.ch/dronet.html",
    "tipo": "Página do projeto no site do laboratório"
   },
   "linksExtras": [
    {
     "rotulo": "Código do DroNet no GitHub",
     "url": "https://github.com/uzh-rpg/rpg_public_dronet"
    }
   ],
   "areas": [
    "Predição de direção e trajetória",
    "Detecção de obstáculos",
    "Robótica com visão"
   ],
   "linhas": [
    "Navegação visual de drones",
    "Detecção de obstáculos",
    "Redes neurais embarcadas",
    "Predição de direção",
    "Aprendizado de navegação"
   ],
   "resumo": {
    "foco": "Percepção e navegação de robôs e drones autônomos.",
    "problemas": "Fazer drones voarem com segurança por ruas urbanas sem depender de mapas, reagindo a obstáculos estáticos e dinâmicos.",
    "tecnologias": "Rede convolucional residual de oito camadas que, a partir de uma única imagem, produz duas saídas: ângulo de direção e probabilidade de colisão. Treinada com vídeos de carros (dataset Udacity) e com imagens gravadas de bicicleta para colisão.",
    "contribuicoes": "Política de navegação que generaliza para corredores e estacionamentos, com código, dataset de colisão e pesos treinados públicos. Para pesquisas assistivas, a contribuição é metodológica: prever direção e risco de colisão a partir de uma imagem."
   },
   "trabalhos": [
    "dronet"
   ],
   "datasets": [
    "dronet-colisao"
   ],
   "observacoes": [
    "DroNet é uma pesquisa de navegação de drones, não um sistema assistivo para pessoas.",
    "O link oa.upm.es/79216 indicado no levantamento original não pôde ser verificado; usou-se o DOI do artigo."
   ],
   "imagem": {
    "arquivo": "img/g-rpg.jpg",
    "fonte": "Página do DroNet (RPG, Universidade de Zurique)",
    "url": "https://rpg.ifi.uzh.ch/dronet.html",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Exemplos de imagens de direção e de colisão usadas para treinar o DroNet"
   }
  },
  {
   "id": "lookout",
   "nome": "Equipe LookOut",
   "secao": "robotica",
   "classeRobotica": "metodologica",
   "tipo": "equipe",
   "instituicao": "Stanford University",
   "paises": [
    "US"
   ],
   "pagina": {
    "url": "https://sites.google.com/stanford.edu/lookout",
    "tipo": "Página do projeto"
   },
   "areas": [
    "Predição de direção e trajetória",
    "Detecção de obstáculos",
    "Robótica com visão",
    "Datasets"
   ],
   "linhas": [
    "Navegação egocêntrica",
    "Predição de trajetórias (poses 6D da cabeça)",
    "Obstáculos estáticos e dinâmicos",
    "Análise temporal",
    "Robótica humanoide"
   ],
   "resumo": {
    "foco": "Navegação em primeira pessoa e predição de movimentos futuros em ambientes reais.",
    "problemas": "Prever, a partir de vídeo egocêntrico, uma sequência de poses futuras da cabeça sem colisão, incluindo comportamentos humanos como olhar para os lados antes de atravessar.",
    "tecnologias": "Óculos Project Aria para coleta de dados e modelo que agrega ao longo do tempo características 3D latentes da cena, considerando partes estáticas e dinâmicas.",
    "contribuicoes": "Dataset Aria Navigation Dataset (AND), com 4 horas de gravação em 18 locais movimentados, e modelo que aprende a esperar, desacelerar, mudar de rota e olhar o trânsito."
   },
   "trabalhos": [
    "lookout"
   ],
   "datasets": [
    "and"
   ],
   "observacoes": [
    "A aplicação-alvo é robótica humanoide e realidade virtual/aumentada. O artigo menciona navegação assistiva como aplicação possível, mas o trabalho não é um sistema assistivo para pessoas."
   ],
   "imagem": {
    "arquivo": "img/g-lookout.jpg",
    "fonte": "Página do LookOut (Stanford)",
    "url": "https://sites.google.com/stanford.edu/lookout",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Óculos Aria e trajetória prevista sobre a nuvem de pontos da cena"
   }
  }
 ],
 "trabalhos": [
  {
   "id": "aigd",
   "titulo": "AI Guide Dog: Egocentric Path Prediction on Smartphone",
   "ano": 2025,
   "veiculo": "Proceedings of the AAAI Symposium Series, 5(1), 220–227",
   "autores": [
    "jadhav",
    "cao-jeffery",
    "shetty",
    "kumar-urvashi",
    "sharma-aditi",
    "sukboontip",
    "tamarapalli",
    "zhang-jingyi",
    "koul"
   ],
   "links": [
    {
     "rotulo": "Artigo (AAAI)",
     "url": "https://ojs.aaai.org/index.php/AAAI-SS/article/view/35591"
    },
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1609/aaaiss.v5i1.35591"
    },
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2501.07957"
    }
   ],
   "grupos": [
    "aigd"
   ]
  },
  {
   "id": "waytogo",
   "titulo": "Way to Go! Detecting Open Areas Ahead of a Walking Person",
   "ano": 2014,
   "veiculo": "ECCV 2014 Workshops (ACVR), LNCS 8927, 349–360",
   "autores": [
    "schauerte",
    "koester",
    "martinez",
    "stiefelhagen"
   ],
   "links": [
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1007/978-3-319-16199-0_25"
    },
    {
     "rotulo": "Página no site do KIT",
     "url": "https://cvhci.iar.kit.edu/1108_1007.php"
    }
   ],
   "grupos": [
    "kit"
   ]
  },
  {
   "id": "autocars",
   "titulo": "Using Technology Developed for Autonomous Cars to Help Navigate Blind People",
   "ano": 2017,
   "veiculo": "ICCV 2017 Workshops (ACVR), 1424–1432",
   "autores": [
    "martinez",
    "roitberg",
    "koester",
    "stiefelhagen",
    "schauerte"
   ],
   "links": [
    {
     "rotulo": "Artigo (CVF Open Access)",
     "url": "https://openaccess.thecvf.com/content_ICCV_2017_workshops/w22/html/Martinez_Using_Technology_Developed_ICCV_2017_paper.html"
    },
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1109/ICCVW.2017.169"
    }
   ],
   "grupos": [
    "kit"
   ]
  },
  {
   "id": "opensu",
   "titulo": "Open Scene Understanding: Grounded Situation Recognition Meets Segment Anything for Helping People with Visual Impairments",
   "ano": 2023,
   "veiculo": "ICCV 2023 Workshops (ACVR), 1857–1867",
   "autores": [
    "liu-ruiping",
    "zhang-jiaming",
    "peng-kunyu",
    "zheng-junwei",
    "cao-ke",
    "chen-yufan",
    "yang-kailun",
    "stiefelhagen"
   ],
   "links": [
    {
     "rotulo": "Artigo (CVF Open Access)",
     "url": "https://openaccess.thecvf.com/content/ICCV2023W/ACVR/html/Liu_Open_Scene_Understanding_Grounded_Situation_Recognition_Meets_Segment_Anything_for_ICCVW_2023_paper.html"
    },
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2307.07757"
    }
   ],
   "grupos": [
    "kit"
   ]
  },
  {
   "id": "mobilio",
   "titulo": "Improving outdoor navigation for people with blindness using an AI-driven smartphone application and personalized audio guidance",
   "ano": 2026,
   "veiculo": "Nature Biomedical Engineering",
   "autores": [
    "liu-raymond",
    "slade"
   ],
   "links": [
    {
     "rotulo": "Artigo (Nature)",
     "url": "https://www.nature.com/articles/s41551-026-01772-x"
    },
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1038/s41551-026-01772-x"
    }
   ],
   "grupos": [
    "slade"
   ]
  },
  {
   "id": "headsup",
   "titulo": "HEADS-UP: Head-Mounted Egocentric Dataset for Trajectory Prediction in Blind Assistance Systems",
   "ano": 2024,
   "veiculo": "arXiv preprint 2409.20324",
   "autores": [
    "haghighi",
    "demonsant",
    "chalimourdas",
    "naeini",
    "munoz",
    "bacca",
    "suter",
    "gani",
    "alahi"
   ],
   "links": [
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2409.20324"
    },
    {
     "rotulo": "Página do projeto (VITA)",
     "url": "https://www.epfl.ch/labs/vita/research/prediction/heads-up/"
    }
   ],
   "grupos": [
    "vita"
   ]
  },
  {
   "id": "assister",
   "titulo": "ASSISTER: Assistive Navigation via Conditional Instruction Generation",
   "ano": 2022,
   "veiculo": "ECCV 2022, LNCS 13696, 271–289",
   "autores": [
    "huang-zanming",
    "shangguan",
    "zhang-jimuyang",
    "bar-gilad",
    "boyd",
    "ohnbar"
   ],
   "links": [
    {
     "rotulo": "Artigo (ECVA)",
     "url": "https://ecva.net/papers/eccv_2022/papers_ECCV/html/3324_ECCV_2022_paper.php"
    },
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1007/978-3-031-20059-5_16"
    },
    {
     "rotulo": "Repositório no GitHub",
     "url": "https://github.com/h2xlab/ASSISTER"
    }
   ],
   "grupos": [
    "ohnbar"
   ]
  },
  {
   "id": "crosswatch",
   "titulo": "Crosswatch: a system for providing guidance to visually impaired travelers at traffic intersections",
   "ano": 2013,
   "veiculo": "Journal of Assistive Technologies, 7(2), 131–142",
   "autores": [
    "coughlan",
    "shen-huiying"
   ],
   "links": [
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1108/17549451311328808"
    }
   ],
   "grupos": [
    "coughlan"
   ]
  },
  {
   "id": "indoorapp",
   "titulo": "An Indoor Navigation App using Computer Vision and Sign Recognition",
   "ano": 2020,
   "veiculo": "ICCHP 2020, LNCS 12376, 485–494",
   "autores": [
    "fusco",
    "cheraghi",
    "neat",
    "coughlan"
   ],
   "links": [
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1007/978-3-030-58796-3_56"
    },
    {
     "rotulo": "Texto completo (PMC)",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7703403"
    },
    {
     "rotulo": "Página no SKERI",
     "url": "https://www.ski.org/indoor-navigation-app-using-computer-vision-and-sign-recognition"
    }
   ],
   "grupos": [
    "coughlan"
   ]
  },
  {
   "id": "mapa3d",
   "titulo": "Non-visual Access to an Interactive 3D Map",
   "ano": 2022,
   "veiculo": "ICCHP-AAATE 2022, LNCS, 253–260",
   "autores": [
    "coughlan",
    "biggs",
    "shen-huiying"
   ],
   "links": [
    {
     "rotulo": "Registro bibliográfico",
     "url": "https://ouci.dntb.gov.ua/works/40oPAJW7"
    }
   ],
   "grupos": [
    "coughlan"
   ]
  },
  {
   "id": "navgraph",
   "titulo": "NavGraph: Enhancing Blind Travelers' Navigation Experience and Safety",
   "ano": 2025,
   "veiculo": "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 9(3), art. 117",
   "autores": [
    "mascetti",
    "ahmetovic",
    "galimberti",
    "coughlan"
   ],
   "links": [
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1145/3749537"
    },
    {
     "rotulo": "Repositório da Univ. de Milão",
     "url": "https://air.unimi.it/handle/2434/1222136"
    },
    {
     "rotulo": "Página no SKERI",
     "url": "https://www.ski.org/?p=15542"
    }
   ],
   "grupos": [
    "coughlan",
    "everyware"
   ]
  },
  {
   "id": "navwear",
   "titulo": "NavWear: design and evaluation of a wearable device for obstacle detection for blind and visually impaired people",
   "ano": 2025,
   "veiculo": "Disability and Rehabilitation: Assistive Technology, 20(6), 1800–1814",
   "autores": [
    "santos-aline",
    "loureiro",
    "machado",
    "frizera",
    "medola"
   ],
   "links": [
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1080/17483107.2025.2477681"
    },
    {
     "rotulo": "Repositório Unesp",
     "url": "https://repositorio.unesp.br/entities/publication/c77bbb9c-e424-4e81-81d9-d58783a0181c"
    }
   ],
   "grupos": [
    "navwear"
   ]
  },
  {
   "id": "sanpo",
   "titulo": "SANPO: A Scene Understanding Accessibility and Human Navigation Dataset",
   "ano": 2025,
   "veiculo": "WACV 2025, 7855–7864",
   "autores": [
    "waghmare",
    "wilber",
    "hawkey",
    "yang-xuan",
    "wilson",
    "debats",
    "nuengsigkapian",
    "sharma-astuti",
    "pandikow",
    "wang-huisheng",
    "adam-hartwig",
    "sirotenko"
   ],
   "links": [
    {
     "rotulo": "Artigo (CVF Open Access)",
     "url": "https://openaccess.thecvf.com/content/WACV2025/html/Waghmare_SANPO_A_Scene_Understanding_Accessibility_and_Human_Navigation_Dataset_WACV_2025_paper.html"
    },
    {
     "rotulo": "Página do dataset",
     "url": "https://google-research-datasets.github.io/sanpo_dataset/"
    }
   ],
   "grupos": [
    "sanpo"
   ]
  },
  {
   "id": "guidenav",
   "titulo": "GuideNav: User-Informed Development of a Vision-Only Robotic Navigation Assistant for Blind Travelers",
   "ano": 2026,
   "veiculo": "HRI 2026 (ACM/IEEE), 1129–1139",
   "autores": [
    "hwang",
    "yang-soowan",
    "monon",
    "giudice",
    "lee-sunghoon",
    "biswas",
    "kim-donghyun"
   ],
   "links": [
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2512.06147"
    },
    {
     "rotulo": "Registro NSF PAR",
     "url": "https://par.nsf.gov/biblio/10699726-guidenav-user-informed-development-vision-only-robotic-navigation-assistant-blind-travelers"
    }
   ],
   "grupos": [
    "daros"
   ]
  },
  {
   "id": "guidetwsi",
   "titulo": "GuideTWSI: A Diverse Tactile Walking Surface Indicator Dataset from Synthetic and Real-World Images for Blind and Low-Vision Navigation",
   "ano": 2026,
   "veiculo": "ICRA 2026",
   "autores": [
    "hwang",
    "yang-soowan",
    "nguyen-anh",
    "goel",
    "adhikari",
    "lee-sunghoon",
    "biswas",
    "giudice",
    "kim-donghyun"
   ],
   "links": [
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2603.07060"
    },
    {
     "rotulo": "Página do projeto",
     "url": "https://guidedogrobot-tactile.github.io"
    }
   ],
   "grupos": [
    "daros"
   ]
  },
  {
   "id": "fieldtrials",
   "titulo": "Field Trials of Autonomous Navigation Robot for Visually Impaired People",
   "ano": 2025,
   "veiculo": "CHI 2025 Extended Abstracts (Case Study)",
   "autores": [
    "takagi",
    "naito",
    "sato-daisuke",
    "murata",
    "kayukawa",
    "asakawa"
   ],
   "links": [
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1145/3706599.3706663"
    },
    {
     "rotulo": "Página na IBM Research",
     "url": "https://research.ibm.com/publications/field-trials-of-autonomous-navigation-robot-for-visually-impaired-people--1"
    },
    {
     "rotulo": "Página do artigo",
     "url": "https://wotipati.github.io/projects/other_papers/CHI2025_CaseStudy_AISuitcase/CHI2025_CaseStudy_AISuitcase.html"
    }
   ],
   "grupos": [
    "miraikan"
   ]
  },
  {
   "id": "grouptours",
   "titulo": "Robot-Assisted Group Tours for Blind People",
   "ano": 2026,
   "veiculo": "CHI 2026",
   "autores": [
    "hu-yaxin",
    "kuribayashi",
    "wang-allan",
    "kayukawa",
    "sato-daisuke",
    "mutlu",
    "takagi",
    "asakawa"
   ],
   "links": [
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2602.04458"
    }
   ],
   "grupos": [
    "miraikan"
   ]
  },
  {
   "id": "dronet",
   "titulo": "DroNet: Learning to Fly by Driving",
   "ano": 2018,
   "veiculo": "IEEE Robotics and Automation Letters, 3(2), 1088–1095",
   "autores": [
    "loquercio",
    "maqueda",
    "delblanco",
    "scaramuzza"
   ],
   "links": [
    {
     "rotulo": "DOI",
     "url": "https://doi.org/10.1109/LRA.2018.2795643"
    },
    {
     "rotulo": "Página do projeto",
     "url": "https://rpg.ifi.uzh.ch/dronet.html"
    }
   ],
   "grupos": [
    "rpg"
   ]
  },
  {
   "id": "lookout",
   "titulo": "LookOut: Real-World Humanoid Egocentric Navigation",
   "ano": 2025,
   "veiculo": "ICCV 2025, 24977–24988",
   "autores": [
    "pan",
    "harley",
    "engelmann",
    "liu-karen",
    "guibas"
   ],
   "links": [
    {
     "rotulo": "Página do projeto",
     "url": "https://sites.google.com/stanford.edu/lookout"
    },
    {
     "rotulo": "Artigo (CVF, PDF)",
     "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Pan_LookOut_Real-World_Humanoid_Egocentric_Navigation_ICCV_2025_paper.pdf"
    },
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2508.14466"
    }
   ],
   "grupos": [
    "lookout"
   ],
   "nota": "A versão publicada na ICCV inclui Francis Engelmann como coautor; a primeira versão no arXiv lista quatro autores."
  },
  {
   "id": "guidedog",
   "titulo": "GuideDog: A Real-World Egocentric Multimodal Dataset for Blind and Low-Vision Accessibility-Aware Guidance",
   "ano": 2026,
   "veiculo": "ACL 2026 (Long Papers), 5545–5574",
   "autores": [
    "kim-junhyeok",
    "park-jaewoo",
    "park-junhee",
    "lee-sangeyl",
    "chung-jiwan",
    "kim-jisung",
    "joung",
    "yu-youngjae"
   ],
   "links": [
    {
     "rotulo": "Artigo (ACL Anthology)",
     "url": "https://aclanthology.org/2026.acl-long.251/"
    },
    {
     "rotulo": "arXiv",
     "url": "https://arxiv.org/abs/2503.12844"
    }
   ],
   "grupos": []
  },
  {
   "id": "sensecv",
   "titulo": "SenseCV: A Multi-Location Egocentric Visual-Inertial Dataset for Assistive Navigation in Indoor Environments",
   "ano": 2026,
   "veiculo": "SIBGRAPI 2026, trilha Work in Progress (pôster)",
   "autores": [
    "andre-pinheiro",
    "isaque-oliveira",
    "elias-silva"
   ],
   "links": [
    {
     "rotulo": "SenseCV no GitHub",
     "url": "https://github.com/SenseCV"
    }
   ],
   "grupos": [],
   "nota": "Link do artigo e do pôster ainda não disponível."
  }
 ],
 "pesquisadores": [
  {
   "id": "jadhav",
   "nome": "Aishwarya Jadhav",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "cao-jeffery",
   "nome": "Jeffery Cao",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "shetty",
   "nome": "Abhishree Shetty",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "kumar-urvashi",
   "nome": "Urvashi Priyam Kumar",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "sharma-aditi",
   "nome": "Aditi Sharma",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "sukboontip",
   "nome": "Ben Sukboontip",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "tamarapalli",
   "nome": "Jayant Sravan Tamarapalli",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "zhang-jingyi",
   "nome": "Jingyi Zhang",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "busca": "AI Guide Dog"
  },
  {
   "id": "koul",
   "nome": "Anirudh Koul",
   "pais": "US",
   "inst": "Pinterest",
   "busca": "AI Guide Dog"
  },
  {
   "id": "stiefelhagen",
   "nome": "Rainer Stiefelhagen",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "perfil": "SFCOJxMAAAAJ"
  },
  {
   "id": "schauerte",
   "nome": "Boris Schauerte",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "busca": "Karlsruhe"
  },
  {
   "id": "koester",
   "nome": "Daniel Koester",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "perfil": "7Di8cHMAAAAJ"
  },
  {
   "id": "martinez",
   "nome": "Manuel Martinez",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "perfil": "AiT2yPsAAAAJ"
  },
  {
   "id": "roitberg",
   "nome": "Alina Roitberg",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "perfil": "UuEFRDoAAAAJ"
  },
  {
   "id": "liu-ruiping",
   "nome": "Ruiping Liu",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "busca": "Karlsruhe visual impairments"
  },
  {
   "id": "zhang-jiaming",
   "nome": "Jiaming Zhang",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "perfil": "8diau40AAAAJ"
  },
  {
   "id": "peng-kunyu",
   "nome": "Kunyu Peng",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "busca": "Karlsruhe"
  },
  {
   "id": "zheng-junwei",
   "nome": "Junwei Zheng",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "perfil": "i6RJsvwAAAAJ"
  },
  {
   "id": "cao-ke",
   "nome": "Ke Cao",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "busca": "Open Scene Understanding visual impairments"
  },
  {
   "id": "chen-yufan",
   "nome": "Yufan Chen",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "busca": "Karlsruhe Stiefelhagen"
  },
  {
   "id": "yang-kailun",
   "nome": "Kailun Yang",
   "pais": "DE",
   "inst": "Karlsruhe Institute of Technology",
   "perfil": "pKFqWhgAAAAJ"
  },
  {
   "id": "liu-raymond",
   "nome": "Raymond Liu",
   "pais": "US",
   "inst": "Harvard University",
   "busca": "Mobilio Harvard"
  },
  {
   "id": "slade",
   "nome": "Patrick Slade",
   "pais": "US",
   "inst": "Harvard University",
   "perfil": "luJ6OhkAAAAJ"
  },
  {
   "id": "haghighi",
   "nome": "Yasaman Haghighi",
   "pais": "CH",
   "inst": "EPFL",
   "perfil": "vVJmFIUAAAAJ"
  },
  {
   "id": "demonsant",
   "nome": "Celine Demonsant",
   "pais": "CH",
   "inst": "EPFL",
   "busca": "HEADS-UP"
  },
  {
   "id": "chalimourdas",
   "nome": "Panagiotis Chalimourdas",
   "pais": "CH",
   "inst": "EPFL",
   "busca": "HEADS-UP"
  },
  {
   "id": "naeini",
   "nome": "Maryam Tavasoli Naeini",
   "pais": "CH",
   "inst": "EPFL",
   "busca": "HEADS-UP"
  },
  {
   "id": "munoz",
   "nome": "Jhon Kevin Munoz",
   "pais": null,
   "inst": "Afiliação não confirmada",
   "busca": "HEADS-UP"
  },
  {
   "id": "bacca",
   "nome": "Bladimir Bacca",
   "pais": null,
   "inst": "Afiliação não confirmada",
   "busca": ""
  },
  {
   "id": "suter",
   "nome": "Silvan Suter",
   "pais": null,
   "inst": "Afiliação não confirmada",
   "busca": "HEADS-UP"
  },
  {
   "id": "gani",
   "nome": "Matthieu Gani",
   "pais": null,
   "inst": "Afiliação não confirmada",
   "busca": "HEADS-UP"
  },
  {
   "id": "alahi",
   "nome": "Alexandre Alahi",
   "pais": "CH",
   "inst": "EPFL",
   "perfil": "UIhXQ64AAAAJ"
  },
  {
   "id": "huang-zanming",
   "nome": "Zanming Huang",
   "pais": "US",
   "inst": "Boston University",
   "busca": "ASSISTER"
  },
  {
   "id": "shangguan",
   "nome": "Zhongkai Shangguan",
   "pais": "US",
   "inst": "Boston University",
   "busca": ""
  },
  {
   "id": "zhang-jimuyang",
   "nome": "Jimuyang Zhang",
   "pais": "US",
   "inst": "Boston University",
   "busca": "Ohn-Bar"
  },
  {
   "id": "bar-gilad",
   "nome": "Gilad Bar",
   "pais": "US",
   "inst": "Boston University",
   "busca": "ASSISTER"
  },
  {
   "id": "boyd",
   "nome": "Matthew Boyd",
   "pais": "US",
   "inst": "Boston University",
   "busca": "ASSISTER"
  },
  {
   "id": "ohnbar",
   "nome": "Eshed Ohn-Bar",
   "pais": "US",
   "inst": "Boston University",
   "perfil": "p9zVBV4AAAAJ"
  },
  {
   "id": "coughlan",
   "nome": "James M. Coughlan",
   "pais": "US",
   "inst": "Smith-Kettlewell Eye Research Institute",
   "perfil": "ujPwwwsAAAAJ"
  },
  {
   "id": "shen-huiying",
   "nome": "Huiying Shen",
   "pais": "US",
   "inst": "Smith-Kettlewell Eye Research Institute",
   "busca": "Smith-Kettlewell"
  },
  {
   "id": "fusco",
   "nome": "Giovanni Fusco",
   "pais": "US",
   "inst": "Smith-Kettlewell Eye Research Institute",
   "perfil": "RMEnVqEAAAAJ"
  },
  {
   "id": "cheraghi",
   "nome": "Seyed Ali Cheraghi",
   "pais": "US",
   "inst": "Smith-Kettlewell Eye Research Institute",
   "busca": "Smith-Kettlewell"
  },
  {
   "id": "neat",
   "nome": "Leo Neat",
   "pais": "US",
   "inst": "University of California, Santa Cruz",
   "busca": "indoor navigation sign recognition"
  },
  {
   "id": "biggs",
   "nome": "Brandon Biggs",
   "pais": "US",
   "inst": "Smith-Kettlewell Eye Research Institute",
   "perfil": "brDhd98AAAAJ"
  },
  {
   "id": "mascetti",
   "nome": "Sergio Mascetti",
   "pais": "IT",
   "inst": "Università degli Studi di Milano",
   "perfil": "ksrlTuMAAAAJ"
  },
  {
   "id": "ahmetovic",
   "nome": "Dragan Ahmetovic",
   "pais": "IT",
   "inst": "Università degli Studi di Milano",
   "perfil": "WOUw0iwAAAAJ"
  },
  {
   "id": "galimberti",
   "nome": "Gabriele Galimberti",
   "pais": "IT",
   "inst": "Università degli Studi di Milano",
   "busca": "Mascetti navigation"
  },
  {
   "id": "santos-aline",
   "nome": "Aline Darc Piculo dos Santos",
   "pais": "BR",
   "inst": "USP / Unesp",
   "busca": ""
  },
  {
   "id": "loureiro",
   "nome": "Matheus Loureiro",
   "pais": "BR",
   "inst": "Universidade Federal do Espírito Santo",
   "perfil": "lsxqAF0AAAAJ"
  },
  {
   "id": "machado",
   "nome": "Fabiana Machado",
   "pais": "BR",
   "inst": "Universidade Federal do Espírito Santo",
   "perfil": "kk9i9_MAAAAJ"
  },
  {
   "id": "frizera",
   "nome": "Anselmo Frizera",
   "pais": "BR",
   "inst": "Universidade Federal do Espírito Santo",
   "perfil": "j7NHjT4AAAAJ"
  },
  {
   "id": "medola",
   "nome": "Fausto Orsi Medola",
   "pais": "BR",
   "inst": "Universidade Estadual Paulista (Unesp)",
   "perfil": "G0U1IUUAAAAJ"
  },
  {
   "id": "waghmare",
   "nome": "Sagar M. Waghmare",
   "pais": "US",
   "inst": "Google Research",
   "perfil": "l6e9JeEAAAAJ"
  },
  {
   "id": "wilber",
   "nome": "Kimberly Wilber",
   "pais": "US",
   "inst": "Google Research",
   "busca": "SANPO"
  },
  {
   "id": "hawkey",
   "nome": "Dave Hawkey",
   "pais": "US",
   "inst": "Google Research",
   "busca": "SANPO"
  },
  {
   "id": "yang-xuan",
   "nome": "Xuan Yang",
   "pais": "US",
   "inst": "Google Research",
   "busca": "SANPO"
  },
  {
   "id": "wilson",
   "nome": "Matthew Wilson",
   "pais": "US",
   "inst": "Google Research",
   "busca": "SANPO"
  },
  {
   "id": "debats",
   "nome": "Stephanie Debats",
   "pais": "US",
   "inst": "Google Research",
   "busca": "SANPO"
  },
  {
   "id": "nuengsigkapian",
   "nome": "Cattalyya Nuengsigkapian",
   "pais": "US",
   "inst": "Google Research",
   "busca": ""
  },
  {
   "id": "sharma-astuti",
   "nome": "Astuti Sharma",
   "pais": "US",
   "inst": "Google Research",
   "busca": "SANPO"
  },
  {
   "id": "pandikow",
   "nome": "Lars Pandikow",
   "pais": "US",
   "inst": "Google Research",
   "busca": ""
  },
  {
   "id": "wang-huisheng",
   "nome": "Huisheng Wang",
   "pais": "US",
   "inst": "Google Research",
   "busca": "SANPO"
  },
  {
   "id": "adam-hartwig",
   "nome": "Hartwig Adam",
   "pais": "US",
   "inst": "Google Research",
   "busca": "Google"
  },
  {
   "id": "sirotenko",
   "nome": "Mikhail Sirotenko",
   "pais": "US",
   "inst": "Google Research",
   "perfil": "IpGXRaAAAAAJ"
  },
  {
   "id": "hwang",
   "nome": "Hochul Hwang",
   "pais": "US",
   "inst": "University of Massachusetts Amherst",
   "perfil": "CLSqawUAAAAJ"
  },
  {
   "id": "yang-soowan",
   "nome": "Soowan Yang",
   "pais": "KR",
   "inst": "DGIST",
   "busca": "guide dog robot"
  },
  {
   "id": "monon",
   "nome": "Jahir Sadik Monon",
   "pais": "US",
   "inst": "Colaborador do GuideNav",
   "busca": ""
  },
  {
   "id": "giudice",
   "nome": "Nicholas A. Giudice",
   "pais": "US",
   "inst": "University of Maine",
   "perfil": "jD95I7EAAAAJ"
  },
  {
   "id": "lee-sunghoon",
   "nome": "Sunghoon Ivan Lee",
   "pais": "US",
   "inst": "University of Massachusetts Amherst",
   "busca": "UMass Amherst"
  },
  {
   "id": "biswas",
   "nome": "Joydeep Biswas",
   "pais": "US",
   "inst": "The University of Texas at Austin",
   "perfil": "f28F1YUAAAAJ"
  },
  {
   "id": "kim-donghyun",
   "nome": "Donghyun Kim",
   "pais": "US",
   "inst": "University of Massachusetts Amherst",
   "perfil": "uVZrpMcAAAAJ"
  },
  {
   "id": "nguyen-anh",
   "nome": "Anh N. H. Nguyen",
   "pais": "US",
   "inst": "University of Massachusetts Amherst",
   "busca": "GuideTWSI"
  },
  {
   "id": "goel",
   "nome": "Parth Goel",
   "pais": "US",
   "inst": "University of Massachusetts Amherst",
   "busca": "GuideTWSI"
  },
  {
   "id": "adhikari",
   "nome": "Krisha Adhikari",
   "pais": "US",
   "inst": "University of Massachusetts Amherst",
   "busca": ""
  },
  {
   "id": "asakawa",
   "nome": "Chieko Asakawa",
   "pais": "JP",
   "inst": "Miraikan / IBM Research",
   "perfil": "IheNxE4AAAAJ"
  },
  {
   "id": "takagi",
   "nome": "Hironobu Takagi",
   "pais": "JP",
   "inst": "Miraikan / IBM Research – Tokyo",
   "perfil": "NAAdydEAAAAJ"
  },
  {
   "id": "sato-daisuke",
   "nome": "Daisuke Sato",
   "pais": "US",
   "inst": "Carnegie Mellon University",
   "perfil": "dsNpUR0AAAAJ"
  },
  {
   "id": "kayukawa",
   "nome": "Seita Kayukawa",
   "pais": "JP",
   "inst": "IBM Research – Tokyo",
   "perfil": "SpfOQHAAAAAJ"
  },
  {
   "id": "kuribayashi",
   "nome": "Masaki Kuribayashi",
   "pais": "JP",
   "inst": "Waseda University / Miraikan",
   "perfil": "fdEcI_MAAAAJ"
  },
  {
   "id": "wang-allan",
   "nome": "Allan Wang",
   "pais": "JP",
   "inst": "Miraikan",
   "perfil": "te0G04oAAAAJ"
  },
  {
   "id": "murata",
   "nome": "Masayuki Murata",
   "pais": "JP",
   "inst": "IBM Research – Tokyo",
   "perfil": "XZWOEtgAAAAJ"
  },
  {
   "id": "naito",
   "nome": "Kakuya Naito",
   "pais": "JP",
   "inst": "Shimizu Corporation",
   "busca": "AI Suitcase"
  },
  {
   "id": "hu-yaxin",
   "nome": "Yaxin Hu",
   "pais": "US",
   "inst": "University of Wisconsin–Madison",
   "busca": "Wisconsin"
  },
  {
   "id": "mutlu",
   "nome": "Bilge Mutlu",
   "pais": "US",
   "inst": "University of Wisconsin–Madison",
   "busca": "Wisconsin"
  },
  {
   "id": "loquercio",
   "nome": "Antonio Loquercio",
   "pais": "CH",
   "inst": "Universidade de Zurique",
   "perfil": "pbmjtZsAAAAJ"
  },
  {
   "id": "maqueda",
   "nome": "Ana Isabel Maqueda",
   "pais": "ES",
   "inst": "Universidad Politécnica de Madrid",
   "busca": ""
  },
  {
   "id": "delblanco",
   "nome": "Carlos R. del Blanco",
   "pais": "ES",
   "inst": "Universidad Politécnica de Madrid",
   "busca": ""
  },
  {
   "id": "scaramuzza",
   "nome": "Davide Scaramuzza",
   "pais": "CH",
   "inst": "Universidade de Zurique",
   "perfil": "SC9wV2kAAAAJ"
  },
  {
   "id": "pan",
   "nome": "Boxiao Pan",
   "pais": "US",
   "inst": "Stanford University",
   "perfil": "eW8dJ4EAAAAJ"
  },
  {
   "id": "harley",
   "nome": "Adam W. Harley",
   "pais": "US",
   "inst": "Stanford University",
   "perfil": "OB6vAtkAAAAJ"
  },
  {
   "id": "engelmann",
   "nome": "Francis Engelmann",
   "pais": "US",
   "inst": "Stanford University",
   "busca": ""
  },
  {
   "id": "liu-karen",
   "nome": "C. Karen Liu",
   "pais": "US",
   "inst": "Stanford University",
   "perfil": "i28fU0MAAAAJ"
  },
  {
   "id": "guibas",
   "nome": "Leonidas J. Guibas",
   "pais": "US",
   "inst": "Stanford University",
   "perfil": "5JlEyTAAAAAJ"
  },
  {
   "id": "kim-junhyeok",
   "nome": "Junhyeok Kim",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": "GuideDog"
  },
  {
   "id": "park-jaewoo",
   "nome": "Jaewoo Park",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": "GuideDog"
  },
  {
   "id": "park-junhee",
   "nome": "Junhee Park",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": "GuideDog"
  },
  {
   "id": "lee-sangeyl",
   "nome": "Sangeyl Lee",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": ""
  },
  {
   "id": "chung-jiwan",
   "nome": "Jiwan Chung",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": "Yonsei"
  },
  {
   "id": "kim-jisung",
   "nome": "Jisung Kim",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": "GuideDog"
  },
  {
   "id": "joung",
   "nome": "Ji Hoon Joung",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": ""
  },
  {
   "id": "yu-youngjae",
   "nome": "Youngjae Yu",
   "pais": "KR",
   "inst": "Yonsei University",
   "busca": "GuideDog"
  },
  {
   "id": "andre-pinheiro",
   "nome": "André Luis Albuquerque Pinheiro",
   "pais": "BR",
   "inst": "Instituto Federal do Ceará (IFCE)",
   "perfil": "MDO3b9QAAAAJ"
  },
  {
   "id": "isaque-oliveira",
   "nome": "Isaque Oliveira",
   "pais": "BR",
   "inst": "Instituto Federal do Ceará (IFCE)",
   "busca": "SenseCV IFCE"
  },
  {
   "id": "elias-silva",
   "nome": "Elias Teodoro da Silva Jr.",
   "pais": "BR",
   "inst": "Instituto Federal do Ceará (IFCE)",
   "perfil": "F8SkhMgAAAAJ"
  }
 ],
 "datasets": [
  {
   "id": "sensecv",
   "nome": "SenseCV",
   "grupo": null,
   "equipe": "Instituto Federal do Ceará (IFCE), Campus Fortaleza: PPGCC e LIT",
   "paises": [
    "BR"
   ],
   "descricao": "Dataset egocêntrico visual-inercial de ambientes internos: vídeos gravados por um smartphone junto ao corpo de quem caminha, sincronizados com os sensores do aparelho. Cada gravação é um evento de caminho livre, desvio à esquerda, desvio à direita ou parada diante de um obstáculo.",
   "tiposDados": [
    "Vídeo egocêntrico",
    "Sensores inerciais",
    "Magnetômetro",
    "Localização",
    "Metadados da captura"
   ],
   "finalidade": "Prever se o caminho à frente está livre ou bloqueado e, havendo desvio, para qual lado; avaliar a generalização dos modelos em ambientes não vistos no treino.",
   "anotacao": "Cada frame anterior ao início da manobra recebe dois rótulos: condição do caminho (FREE ou BLOCKED) e direção de desvio (LEFT, RIGHT ou NO DEVIATION). O início e o fim de cada manobra são estimados pelo acelerômetro e pelo giroscópio.",
   "limitacoes": "Apenas ambientes internos, em 9 locais. Versão bruta: 1.045 eventos em 23 coletas (3h17min15s). Versão revisada, usada nos experimentos: 818 eventos e 99.135 frames.",
   "acesso": "Imagens da base em pasta pública no Google Drive, indicada no site do projeto.",
   "licenca": "Não informada no site do projeto.",
   "links": [
    {
     "rotulo": "Imagens da base (Google Drive)",
     "url": "https://drive.google.com/drive/folders/1jgrDH1dpr8MdhZiJmi0aBYZ9k8JPrGbi?usp=sharing"
    },
    {
     "rotulo": "Aplicativo de coleta (GitHub)",
     "url": "https://github.com/SenseCV/App"
    },
    {
     "rotulo": "SenseCV no GitHub",
     "url": "https://github.com/SenseCV"
    }
   ],
   "trabalho": "sensecv",
   "artigoTexto": "SenseCV: A Multi-Location Egocentric Visual-Inertial Dataset for Assistive Navigation in Indoor Environments. André Pinheiro, Isaque Oliveira e Elias Jr. SIBGRAPI 2026, trilha Work in Progress (link ainda não disponível).",
   "tags": [
    "imagens",
    "videos",
    "obstaculos",
    "caminhos",
    "reais",
    "assistiva"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-sensecv.jpg",
    "fonte": "Frames da base SenseCV (IFCE)",
    "url": "https://github.com/SenseCV",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Dois frames da base: um corredor vazio e um corredor entre estantes de biblioteca, vistos por quem caminha"
   }
  },
  {
   "id": "headsup",
   "nome": "HEADS-UP",
   "grupo": "vita",
   "equipe": "VITA Laboratory, EPFL",
   "paises": [
    "CH"
   ],
   "descricao": "Dataset egocêntrico gravado com câmera estéreo presa à cabeça, com cenas em que pedestres podem colidir com quem usa a câmera.",
   "tiposDados": [
    "Imagem RGB",
    "Profundidade",
    "Nuvem de pontos",
    "IMU",
    "Trajetórias"
   ],
   "finalidade": "Predição de trajetórias de pedestres e detecção de risco de colisão em sistemas de assistência a pessoas cegas.",
   "anotacao": "Trajetórias rotuladas de pedestres (cerca de 1.000 trajetórias individuais) em mais de 43 mil quadros.",
   "limitacoes": "Dados captados com câmera na cabeça e voltados a pedestres em movimento; não há rótulos de direção para quem caminha.",
   "acesso": "Repositório público no Hugging Face, mas é preciso entrar na conta e aceitar as condições de compartilhamento de contato para acessar os arquivos.",
   "licenca": "Não informada de forma legível na página consultada; conferir na página oficial.",
   "links": [
    {
     "rotulo": "Dataset no Hugging Face",
     "url": "https://huggingface.co/datasets/Yassaman/HEADS-UP"
    }
   ],
   "trabalho": "headsup",
   "tags": [
    "imagens",
    "obstaculos",
    "trajetorias",
    "reais",
    "assistiva"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-headsup.jpg",
    "fonte": "Página do HEADS-UP (VITA, EPFL), quadro de vídeo",
    "url": "https://www.epfl.ch/labs/vita/research/prediction/heads-up/",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Quadro do vídeo egocêntrico com pedestres e veículo em uma rua"
   }
  },
  {
   "id": "sanpo",
   "nome": "SANPO",
   "grupo": "sanpo",
   "equipe": "Google Research",
   "paises": [
    "US"
   ],
   "descricao": "Vídeos egocêntricos de ambientes externos (cidade, parques e subúrbios) gravados por voluntários com duas câmeras estéreo, além de vídeos sintéticos.",
   "tiposDados": [
    "Vídeo estéreo",
    "Profundidade",
    "Pose da câmera",
    "Dados sintéticos"
   ],
   "finalidade": "Compreensão de cena, navegação humana, busca de caminho e desvio de obstáculos em ambientes externos.",
   "anotacao": "Mapas de profundidade em todos os quadros reais; 112 mil quadros reais com segmentação panóptica temporalmente consistente; vídeos sintéticos com profundidade e segmentação exatas.",
   "limitacoes": "Dados reais gravados em quatro locais nos EUA; a segmentação dos dados reais é feita por pessoas e menos precisa que a sintética. As classes de caminho e obstáculo devem ser conferidas na taxonomia oficial.",
   "acesso": "Download direto pelo bucket do Google Cloud Storage indicado no repositório oficial.",
   "licenca": "Creative Commons 4.0 (segundo o repositório oficial).",
   "links": [
    {
     "rotulo": "Página do dataset",
     "url": "https://google-research-datasets.github.io/sanpo_dataset/"
    }
   ],
   "trabalho": "sanpo",
   "tags": [
    "videos",
    "obstaculos",
    "caminhos",
    "reais",
    "sinteticos",
    "assistiva"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/g-sanpo.jpg",
    "fonte": "Página do dataset SANPO (Google Research)",
    "url": "https://google-research-datasets.github.io/sanpo_dataset/",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Esquema das câmeras na cabeça e no peito, com imagens estéreo, profundidade e segmentação"
   }
  },
  {
   "id": "guidedog",
   "nome": "GuideDog",
   "grupo": null,
   "equipe": "Pesquisadores da Yonsei University e colaboradores",
   "paises": [
    "KR"
   ],
   "descricao": "Pares imagem–descrição de cenas de pedestres de 46 países, extraídas de vídeos públicos de caminhadas, com orientações voltadas a pessoas cegas ou com baixa visão.",
   "tiposDados": [
    "Imagem egocêntrica",
    "Texto (descrições e orientações)",
    "Perguntas de múltipla escolha"
   ],
   "finalidade": "Treinar e avaliar modelos multimodais (MLLMs) na geração de orientações de navegação acessíveis.",
   "anotacao": "Estrutura S1 (entorno e posição), S2 (perigos por direção de relógio e distância) e S3 (resumo e direção recomendada). Divisão gold com 2.106 exemplos verificados por pessoas e divisão silver com cerca de 20 mil exemplos gerados por modelo de linguagem visual; subconjunto GuideDogQA com 818 questões.",
   "limitacoes": "A maior parte das anotações (silver) foi gerada automaticamente; apenas a divisão gold foi verificada por pessoas. As imagens vêm de vídeos de terceiros.",
   "acesso": "Hugging Face com acesso controlado: é preciso solicitar acesso (aprovação automática, segundo a página) e concordar com uso acadêmico, não redistribuição e citação.",
   "licenca": "CC BY-NC 4.0, somente uso não comercial.",
   "links": [
    {
     "rotulo": "Dataset no Hugging Face",
     "url": "https://huggingface.co/datasets/kjunh/GuideDog"
    },
    {
     "rotulo": "Repositório de avaliação",
     "url": "https://github.com/jun297/GuideDog"
    },
    {
     "rotulo": "Página do projeto",
     "url": "https://jun297.github.io/GuideDog/"
    }
   ],
   "trabalho": "guidedog",
   "tags": [
    "imagens",
    "obstaculos",
    "reais",
    "assistiva"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-guidedog.jpg",
    "fonte": "Figura 1 do artigo GuideDog (arXiv 2503.12844)",
    "url": "https://arxiv.org/abs/2503.12844",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Exemplo de descrição de cena gerada para orientar pessoas cegas"
   }
  },
  {
   "id": "urbanwalk",
   "nome": "UrbanWalk (Sim e Real)",
   "grupo": "ohnbar",
   "equipe": "Boston University",
   "paises": [
    "US"
   ],
   "descricao": "Dados de navegação assistiva com imagens, objetivos e instruções em linguagem natural, em ambiente simulado e real, usados no ASSISTER.",
   "tiposDados": [
    "Imagem",
    "Texto (instruções)",
    "Dados sintéticos"
   ],
   "finalidade": "Treinar e avaliar a geração de instruções de navegação para pessoas cegas.",
   "anotacao": "Instruções condicionadas a objetivos e comandos, em formato semelhante ao COCO (segundo o repositório).",
   "limitacoes": "O repositório lista a liberação dos dados reais e do código de treinamento como pendentes.",
   "acesso": "Repositório público no GitHub.",
   "licenca": "CC BY-NC-SA 4.0 (segundo o repositório).",
   "links": [
    {
     "rotulo": "Repositório ASSISTER",
     "url": "https://github.com/h2xlab/ASSISTER"
    }
   ],
   "trabalho": "assister",
   "tags": [
    "imagens",
    "sinteticos",
    "assistiva"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-urbanwalk.jpg",
    "fonte": "README do repositório ASSISTER (GitHub, CC BY-NC-SA 4.0)",
    "url": "https://github.com/h2xlab/ASSISTER",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Imagens de calçadas com instruções de navegação sobrepostas"
   }
  },
  {
   "id": "guidedata",
   "nome": "GuideData — Handler–Guide Dog Interaction",
   "grupo": "daros",
   "equipe": "UMass Amherst, DGIST, University of Maine e UT Austin",
   "paises": [
    "US"
   ],
   "descricao": "Dados qualitativos sobre como pessoas cegas ou com baixa visão trabalham com cães-guia: entrevistas, observações de treinamento e caminhadas vendadas supervisionadas.",
   "tiposDados": [
    "Entrevistas (transcrições)",
    "Vídeo"
   ],
   "finalidade": "Orientar o projeto de robôs-guia e sistemas assistivos a partir da experiência real de condutores, treinadores e cães-guia.",
   "anotacao": "Material qualitativo organizado por tipo; rostos e placas desfocados e dados pessoais removidos.",
   "limitacoes": "Não é um dataset de visão rotulado para treinar modelos de percepção.",
   "acesso": "Disponível no Kaggle, com acesso pela página do projeto.",
   "licenca": "CC0 (segundo a página do projeto).",
   "links": [
    {
     "rotulo": "Página do dataset",
     "url": "https://guidedogrobot-hgidataset.github.io"
    }
   ],
   "trabalho": "guidenav",
   "tags": [
    "videos",
    "reais",
    "assistiva",
    "robotica"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-guidedata.jpg",
    "fonte": "Figura 1 do artigo GuideNav (arXiv 2512.06147)",
    "url": "https://arxiv.org/abs/2512.06147",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Robô-guia seguindo uma rota com o usuário, e mapa topológico"
   }
  },
  {
   "id": "guidetwsi",
   "nome": "GuideTWSI",
   "grupo": "daros",
   "equipe": "UMass Amherst e colaboradores",
   "paises": [
    "US"
   ],
   "descricao": "Imagens sintéticas e reais de piso tátil de alerta (TWSI) para segmentação, usadas em um robô-guia que para diante do piso tátil.",
   "tiposDados": [
    "Imagem",
    "Dados sintéticos"
   ],
   "finalidade": "Segmentação de piso tátil para navegação assistida por robô.",
   "anotacao": "Segmentação de piso tátil (domos truncados), segundo o artigo.",
   "limitacoes": "Focado em um tipo de elemento (piso tátil); não cobre obstáculos em geral.",
   "acesso": "Dataset, pesos e código divulgados como públicos na página do projeto.",
   "licenca": "Não verificada; conferir na página do projeto.",
   "links": [
    {
     "rotulo": "Página do projeto",
     "url": "https://guidedogrobot-tactile.github.io"
    }
   ],
   "trabalho": "guidetwsi",
   "tags": [
    "imagens",
    "reais",
    "sinteticos",
    "assistiva",
    "robotica"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-guidetwsi.jpg",
    "fonte": "Figura 2 do artigo GuideTWSI (arXiv 2603.07060)",
    "url": "https://arxiv.org/abs/2603.07060",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Amostras sintéticas de piso tátil em vários ambientes e condições de luz"
   }
  },
  {
   "id": "and",
   "nome": "Aria Navigation Dataset (AND)",
   "grupo": "lookout",
   "equipe": "Stanford University",
   "paises": [
    "US"
   ],
   "descricao": "Quatro horas de gravações de pessoas navegando em 18 locais movimentados, coletadas com óculos Project Aria.",
   "tiposDados": [
    "Vídeo egocêntrico",
    "Poses 6D da cabeça",
    "Trajetórias"
   ],
   "finalidade": "Aprender políticas de navegação egocêntrica com obstáculos estáticos e dinâmicos.",
   "anotacao": "Poses da cabeça (translação e rotação) ao longo do tempo, segundo o artigo.",
   "limitacoes": "Gravado por pessoas sem deficiência visual; pensado para robótica humanoide e realidade virtual/aumentada.",
   "acesso": "Citado como acessível pela página do projeto; disponibilidade e licença não confirmadas.",
   "licenca": "Não verificada.",
   "links": [
    {
     "rotulo": "Página do projeto LookOut",
     "url": "https://sites.google.com/stanford.edu/lookout"
    }
   ],
   "trabalho": "lookout",
   "tags": [
    "videos",
    "obstaculos",
    "trajetorias",
    "reais",
    "robotica"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-and.jpg",
    "fonte": "Figura 1 do artigo LookOut (arXiv 2508.14466)",
    "url": "https://arxiv.org/abs/2508.14466",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Óculos Aria e trajetória prevista sobre a nuvem de pontos da cena"
   }
  },
  {
   "id": "dronet-colisao",
   "nome": "DroNet — dataset de colisão",
   "grupo": "rpg",
   "equipe": "Robotics and Perception Group, Universidade de Zurique",
   "paises": [
    "CH"
   ],
   "descricao": "Imagens gravadas de uma bicicleta em ruas de Zurique, rotuladas para probabilidade de colisão. O treino de direção usa o dataset público da Udacity (de terceiros).",
   "tiposDados": [
    "Imagem"
   ],
   "finalidade": "Treinar a previsão de probabilidade de colisão a partir de uma imagem para navegação de drones.",
   "anotacao": "Rótulos de colisão por imagem (arquivo labels.txt por sequência, segundo o repositório).",
   "limitacoes": "Ponto de vista de bicicleta e de carro, não de pedestre; não é voltado a pessoas com deficiência visual.",
   "acesso": "Download público pela página do projeto.",
   "licenca": "Código sob licença MIT; licença dos dados não verificada.",
   "links": [
    {
     "rotulo": "Página do projeto",
     "url": "https://rpg.ifi.uzh.ch/dronet.html"
    },
    {
     "rotulo": "Repositório no GitHub",
     "url": "https://github.com/uzh-rpg/rpg_public_dronet"
    }
   ],
   "trabalho": "dronet",
   "tags": [
    "imagens",
    "obstaculos",
    "reais",
    "robotica"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/g-rpg.jpg",
    "fonte": "Página do DroNet (RPG, Universidade de Zurique)",
    "url": "https://rpg.ifi.uzh.ch/dronet.html",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Exemplos de imagens de direção e de colisão usadas para treinar o DroNet"
   }
  },
  {
   "id": "aigd-dados",
   "nome": "AI Guide Dog — vídeos egocêntricos",
   "grupo": "aigd",
   "equipe": "AI Guide Dog (Carnegie Mellon University)",
   "paises": [
    "US"
   ],
   "descricao": "Vídeos gravados com smartphone junto ao peito em ambientes internos e externos, com dados de sensores, usados para prever a direção do próximo movimento.",
   "tiposDados": [
    "Vídeo",
    "Dados de sensores"
   ],
   "finalidade": "Predição de comandos de direção (seguir em frente, virar à esquerda ou à direita) para navegação assistiva.",
   "anotacao": "O artigo descreve rótulos de ações de direção derivados dos sensores; o formato exato deve ser conferido no artigo.",
   "limitacoes": "Disponibilidade pública não confirmada.",
   "acesso": "Disponibilidade não confirmada; o artigo apresenta os dados, mas não foi encontrado link oficial de download.",
   "licenca": "Não verificada.",
   "links": [
    {
     "rotulo": "Artigo (AAAI)",
     "url": "https://ojs.aaai.org/index.php/AAAI-SS/article/view/35591"
    }
   ],
   "trabalho": "aigd",
   "tags": [
    "videos",
    "reais",
    "assistiva"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/g-aigd.jpg",
    "fonte": "Figura 1 do artigo AI Guide Dog (arXiv 2501.07957)",
    "url": "https://arxiv.org/abs/2501.07957",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Pessoa com bengala usando o celular preso ao corpo, ao lado da previsão de direção na imagem da câmera"
   }
  },
  {
   "id": "hdin",
   "nome": "HDIN",
   "grupo": null,
   "equipe": "University of Hull, University of Sunderland e Peking University",
   "paises": [
    "GB",
    "CN"
   ],
   "descricao": "Hull Drone Indoor Navigation. Dataset real de navegação visual de drones em ambientes internos: imagens da câmera frontal de um Parrot AR.Drone 2.0 em corredores de três prédios do campus da University of Hull, com rótulos de direção e de colisão no mesmo formato do DroNet.",
   "tiposDados": [
    "Imagens RGB",
    "Dados de IMU (navdata)"
   ],
   "finalidade": "Treinar modelos de navegação visual de drones em ambientes internos, prevendo ao mesmo tempo a direção a seguir (regressão) e a probabilidade de colisão (classificação).",
   "anotacao": "Subconjunto de direção com rótulos de intensidade de curva entre −1 e 1, obtidos da orientação da IMU pelo método de fator de escala, em três tipos de rótulo; subconjunto de colisão com rótulos manuais de colisão e não colisão.",
   "limitacoes": "Coletado em corredores de três prédios, com cinco tipos de trecho (curvas em L à esquerda e à direita, linha reta e curvas em S nos dois sentidos) e boa iluminação. São 63 trajetórias: 48 de direção e 15 de colisão.",
   "acesso": "Dados e código no repositório GitHub indicado no artigo.",
   "licenca": "Artigo em acesso aberto (CC BY 4.0); a licença dos dados deve ser conferida no repositório.",
   "links": [
    {
     "rotulo": "Artigo (Drones, 2022)",
     "url": "https://doi.org/10.3390/drones6080202"
    },
    {
     "rotulo": "Repositório no GitHub",
     "url": "https://github.com/Yingxiu-Chang/HDIN-Dataset"
    }
   ],
   "trabalho": null,
   "artigoTexto": "The HDIN Dataset: A Real-World Indoor UAV Dataset with Multi-Task Labels for Visual-Based Navigation. Yingxiu Chang, Yongqiang Cheng, John Murray, Shi Huang e Guangyi Shi. Drones 6(8), 202, 2022.",
   "tags": [
    "imagens",
    "obstaculos",
    "caminhos",
    "reais",
    "robotica"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-hdin.jpg",
    "fonte": "Figura 3 do artigo HDIN (Drones, CC BY 4.0)",
    "url": "https://doi.org/10.3390/drones6080202",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Quatro imagens da câmera do drone em corredores: entradas de curvas e um trecho em linha reta"
   }
  },
  {
   "id": "sit",
   "nome": "SiT",
   "grupo": null,
   "equipe": "SPA Laboratory, Hanyang University",
   "paises": [
    "KR"
   ],
   "descricao": "Socially Interactive Trajectory. Dataset de trajetórias de pedestres para treinar robôs de navegação social, gravado por um robô Clearpath Husky teleoperado em áreas movimentadas, internas e externas.",
   "tiposDados": [
    "Imagens de 5 câmeras (360°)",
    "LiDAR 3D",
    "IMU e RTK",
    "Mapas semânticos"
   ],
   "finalidade": "Detecção 3D, rastreamento de múltiplos objetos e predição de trajetórias de pedestres para navegação social de robôs.",
   "anotacao": "Caixas delimitadoras 2D e 3D, classes e identificadores dos objetos; mapas semânticos em várias camadas (PNG e JSON).",
   "limitacoes": "Coletado com um único robô, em locais como cruzamento externo, corredor, rua de cafés e saguão. O número de cenas e de quadros não aparece na página do projeto.",
   "acesso": "Pedido por formulário do Google indicado na página do projeto.",
   "licenca": "CC BY-SA 4.0 (segundo a página do projeto).",
   "links": [
    {
     "rotulo": "Página do dataset",
     "url": "https://spalaboratory.github.io/SiT/"
    },
    {
     "rotulo": "Repositório no GitHub",
     "url": "https://github.com/SPALaboratory/SiT-Dataset"
    },
    {
     "rotulo": "Artigo (NeurIPS 2023)",
     "url": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/4d6a000c216974f59e597bc878cd6325-Abstract-Datasets_and_Benchmarks.html"
    }
   ],
   "trabalho": null,
   "artigoTexto": "SiT Dataset: Socially Interactive Pedestrian Trajectory Dataset for Social Navigation Robots. Jongwook Bae, Jungho Kim, Junyong Yun, Changwon Kang, Junho Lee, Jeongseon Choi, Chanhyeok Kim, Jungwook Choi e Jun Won Choi. NeurIPS 2023, Datasets and Benchmarks.",
   "tags": [
    "imagens",
    "trajetorias",
    "reais",
    "robotica"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-sit.jpg",
    "fonte": "Página do dataset SiT (SPA Laboratory)",
    "url": "https://spalaboratory.github.io/SiT/",
    "ajuste": "contain",
    "pos": "center",
    "alt": "Robô Husky com câmeras, LiDARs e IMUs, e o campo de visão das cinco câmeras"
   }
  },
  {
   "id": "scand",
   "nome": "SCAND",
   "grupo": null,
   "equipe": "University of Texas at Austin, com Sony AI, Google e U.S. Army Research Laboratory",
   "paises": [
    "US"
   ],
   "descricao": "Socially CompliAnt Navigation Dataset. Demonstrações de navegação socialmente adequada em primeira pessoa: pessoas teleoperam um robô com rodas (Clearpath Jackal) e um robô quadrúpede (Boston Dynamics Spot) no meio de pedestres, em áreas internas e externas do campus da UT Austin.",
   "tiposDados": [
    "Vídeo RGB e RGB-D",
    "LiDAR 3D",
    "Odometria",
    "IMU",
    "Comandos do joystick"
   ],
   "finalidade": "Aprendizado por imitação de navegação social: como um robô deve se mover entre pessoas em calçadas, cruzamentos e corredores.",
   "anotacao": "Cada trajetória tem rótulos de interação social, como andar com ou contra o fluxo, atravessar a rua, ultrapassar pessoas, passar por grupos conversando, esquina sem visibilidade e porta estreita.",
   "limitacoes": "8,7 horas, 138 trajetórias e cerca de 40 km (25 milhas), gravados em um único campus por quatro operadores; ambientes de pouco a muito movimentados.",
   "acesso": "Download indicado na página do dataset.",
   "licenca": "Deve ser conferida na página do dataset.",
   "links": [
    {
     "rotulo": "Página do dataset",
     "url": "https://www.cs.utexas.edu/~xiao/SCAND/SCAND.html"
    },
    {
     "rotulo": "Artigo (arXiv)",
     "url": "https://arxiv.org/abs/2203.15041"
    }
   ],
   "trabalho": null,
   "artigoTexto": "Socially CompliAnt Navigation Dataset (SCAND): A Large-Scale Dataset of Demonstrations for Social Navigation. Haresh Karnan, Anirudh Nair, Xuesu Xiao, Garrett Warnell, Sören Pirk, Alexander Toshev, Justin Hart, Joydeep Biswas e Peter Stone. IEEE Robotics and Automation Letters, 2022.",
   "tags": [
    "videos",
    "trajetorias",
    "reais",
    "robotica"
   ],
   "conferir": false,
   "imagem": {
    "arquivo": "img/d-scand.jpg",
    "fonte": "Figura 1 do artigo SCAND (arXiv 2203.15041)",
    "url": "https://arxiv.org/abs/2203.15041",
    "ajuste": "cover",
    "pos": "center",
    "alt": "Os robôs Spot e Jackal sendo conduzidos entre pedestres em uma calçada"
   }
  }
 ],
 "tagsDataset": {
  "imagens": "Imagens",
  "videos": "Vídeos",
  "obstaculos": "Obstáculos",
  "caminhos": "Caminhos",
  "trajetorias": "Trajetórias",
  "reais": "Dados reais",
  "sinteticos": "Dados sintéticos",
  "assistiva": "Navegação assistiva",
  "robotica": "Robótica"
 },
 "linksNaoVerificados": [
  {
   "url": "https://github.com/Harvard-Slade-Lab/Mobilio",
   "motivo": "Repositório de código e dados do Mobilio: não foi possível abrir nem localizar em buscas."
  },
  {
   "url": "https://www.bu.edu/cise/learning-from-interactions-with-blind-users-for-customized-and-scalable-navigation-assistance-systems-final-report/",
   "motivo": "Relatório final do projeto na BU: não foi possível abrir."
  },
  {
   "url": "https://di.unimi.it/en/research/research-facilities/research-laboratories/everyware-lab-data-management-mobile-and-pervasive-computing",
   "motivo": "Substituído pelo site oficial do EveryWare Lab."
  },
  {
   "url": "https://www.umass.edu/robotics/daros/research/guide-dog-robot",
   "motivo": "Página do robô-guia do DARoS: não localizada."
  },
  {
   "url": "https://guidedogrobot-navigation.github.io/",
   "motivo": "Página do projeto GuideNav: não localizada; usou-se o arXiv."
  },
  {
   "url": "https://www.csail.mit.edu/research/wearable-blind-navigation",
   "motivo": "Página do projeto no CSAIL: não localizada; usou-se o repositório DSpace@MIT."
  },
  {
   "url": "https://rpg.ifi.uzh.ch/research_learning.html",
   "motivo": "Substituída pela página do projeto DroNet no mesmo site."
  },
  {
   "url": "https://oa.upm.es/79216/",
   "motivo": "Cópia do DroNet no repositório da UPM: não localizada; usou-se o DOI."
  },
  {
   "url": "https://github.com/kxzr/WOTR",
   "motivo": "Repositório do WOTR: não localizado."
  },
  {
   "url": "https://www.sciencedirect.com/science/article/pii/S0141938223001191",
   "motivo": "Página do WOTR na ScienceDirect: não foi possível confirmar; usou-se o registro do dblp."
  }
 ],
 "correcoes": [
  "AI Guide Dog: o nome do último autor aparece como Anirudh Koul no arXiv e como Aniruddh Koul na página da AAAI; ele estava vinculado à Pinterest, não à CMU.",
  "Vision4Blind: “Kaiwei Yang” não foi encontrado; o pesquisador do KIT nos trabalhos do grupo é Kailun Yang. O projeto eSash não foi confirmado e ficou de fora.",
  "Way to Go! e o trabalho de 2017 incluem Manuel Martinez e Alina Roitberg entre os autores; a ordem de autores segue a publicação.",
  "Identifying Crucial Objects: o primeiro autor é Md Touhidul Islam e Syed Masum Billah é o último autor.",
  "NavGraph: publicado em 2025 na Proc. ACM IMWUT, 9(3), artigo 117.",
  "GuideNav: o primeiro autor é Hochul Hwang; o trabalho foi publicado na HRI 2026.",
  "AI Suitcase: Masaki Kuribayashi e Allan Wang não são autores do artigo de testes de campo; a coautoria deles com o grupo está documentada em “Robot-Assisted Group Tours for Blind People” (CHI 2026). Kakuya Naito também é autor dos testes de campo.",
  "SANPO: o artigo tem 12 autores; todos foram cadastrados.",
  "LookOut: a versão publicada na ICCV 2025 inclui Francis Engelmann como coautor.",
  "WOTR: o título do artigo é “A dataset for the visually impaired walk on the road” (Displays, 2023)."
 ]
};
