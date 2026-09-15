export interface LogoStudy {
  id: string
  code: string
  title: string
  family: string
  note: string
  src: string
  alt: string
}

const media = (fileName: string) => `${import.meta.env.BASE_URL}media/${fileName}`

export const FAMILIES = [
  'Gravura emblemática',
  'Sistema tipográfico',
  'Emblema ilustrado',
  'Selo institucional',
  'Editorial contemporâneo',
] as const

export const LOGOS: LogoStudy[] = [
  { id: 'est-01', code: 'EST. 01', title: 'Justiça Entronizada', family: 'Gravura emblemática', note: 'A deusa da Justiça entre sol e lua, coruja e livros: o repertório clássico completo em uma só cena.', src: media('logo-01.jpg'), alt: 'Gravura da Justiça sentada com balança e espada, entre sol, lua, coruja e livros' },
  { id: 'est-02', code: 'EST. 02', title: 'Coruja sobre os Livros', family: 'Gravura emblemática', note: 'A coruja de Minerva pousada em volumes encadernados, com a estrela-guia em ouro.', src: media('logo-02.jpg'), alt: 'Gravura de coruja sobre pilha de livros com estrela dourada ao fundo' },
  { id: 'est-03', code: 'EST. 03', title: 'Frontispício do Saber', family: 'Gravura emblemática', note: 'Livro aberto sob coluna e estrela, moldurado como frontispício de edição antiga.', src: media('logo-03.jpg'), alt: 'Gravura de livro aberto sob coluna e estrela, em moldura de frontispício' },
  { id: 'est-04', code: 'EST. 04', title: 'Atlas do Mundo Jurídico', family: 'Gravura emblemática', note: 'Dois atlantes sustentam o globo das Américas sobre livros e pergaminhos.', src: media('logo-04.jpg'), alt: 'Gravura de dois atlantes sustentando um globo terrestre entre livros e astros' },
  { id: 'est-05', code: 'EST. 05', title: 'Wordmark Editorial', family: 'Sistema tipográfico', note: 'Composição serifada sobre creme, com “Jurídica” em itálico verde: sobriedade de periódico acadêmico.', src: media('logo-05.jpg'), alt: 'Composição tipográfica serifada em creme e verde com o nome da sociedade' },
  { id: 'est-06', code: 'EST. 06', title: 'Monograma Verde & Ouro', family: 'Sistema tipográfico', note: 'A sigla em duas cores sobre verde profundo: leitura imediata para selos e avatares.', src: media('logo-06.jpg'), alt: 'Sigla SBHCJ em creme e dourado sobre fundo verde escuro' },
  { id: 'est-07', code: 'EST. 07', title: 'Coruja na Portada', family: 'Emblema ilustrado', note: 'A coruja de asas abertas sustenta a balança em uma portada clássica com ramos de louro.', src: media('logo-07.jpg'), alt: 'Coruja de asas abertas segurando balança dourada em portada clássica verde' },
  { id: 'est-08', code: 'EST. 08', title: 'Coruja Linear', family: 'Emblema ilustrado', note: 'Desenho em verde de um só fio: coruja, balança, livro e louros no mesmo contorno.', src: media('logo-08.jpg'), alt: 'Desenho linear verde de coruja com balança, livro e louros' },
  { id: 'est-09', code: 'EST. 09', title: 'Medalhão Esmaltado', family: 'Selo institucional', note: 'Selo redondo em verde esmalte e ouro, com a coruja sobre o livro aberto.', src: media('logo-09.jpg'), alt: 'Selo circular verde e dourado com coruja, livro, balança e o nome da sociedade' },
  { id: 'est-10', code: 'EST. 10', title: 'Códice Encadernado', family: 'Selo institucional', note: 'O emblema dourado sobre couro: a sociedade apresentada como o livro que ela estuda.', src: media('logo-10.jpg'), alt: 'Livro em couro marrom com coruja dourada gravada na capa' },
  { id: 'est-11', code: 'EST. 11', title: 'Azul Manuscrito', family: 'Sistema tipográfico', note: 'A sigla em azul sobre caligrafia antiga: a história como camada visível.', src: media('logo-11.jpg'), alt: 'Sigla SBHCJ azul sobre manuscrito antigo em papel marfim' },
  { id: 'est-12', code: 'EST. 12', title: 'Púrpura & Chave', family: 'Editorial contemporâneo', note: 'A chave tipográfica em amarelo sobre vinho: “mais que notas de rodapé, novas perspectivas”.', src: media('logo-12.jpg'), alt: 'Cartaz vinho com chave tipográfica amarela e a sigla SBHCJ' },
  { id: 'est-13', code: 'EST. 13', title: 'Colagem Documental', family: 'Editorial contemporâneo', note: 'A mão que aponta o documento: vermelho, preto e papel de arquivo em colagem.', src: media('logo-13.jpg'), alt: 'Colagem vermelha e preta com mão apontando documento de palavras jurídicas' },
  { id: 'est-14', code: 'EST. 14', title: 'Construção Modular', family: 'Sistema tipográfico', note: 'Letras modulares em azul-claro sobre negro: “palavras também constroem mundos”.', src: media('logo-14.jpg'), alt: 'Sigla SBHCJ em letras modulares azul-claro sobre fundo negro' },
  { id: 'est-15', code: 'EST. 15', title: 'Estrela-guia', family: 'Sistema tipográfico', note: 'A sigla em romana negra coroada pela estrela de oito pontas: direção, origem, norte.', src: media('logo-15.jpg'), alt: 'Sigla SBHCJ em serifa negra com estrela vermelha acima e nome da sociedade abaixo' },
  { id: 'est-16', code: 'EST. 16', title: 'Selo da Coruja Erudita', family: 'Selo institucional', note: 'A coruja sobre três volumes dentro do círculo nominal: o brasão mais acadêmico do conjunto.', src: media('logo-16.jpg'), alt: 'Selo circular verde-escuro com coruja gravada sobre livros, estrela dourada e o nome completo na orla' },
  { id: 'est-17', code: 'EST. 17', title: 'Perfil da Leitura', family: 'Gravura emblemática', note: 'A leitora em perfil sob a estrela: passado, presente e futuros em linha de buril.', src: media('logo-17.jpg'), alt: 'Gravura de mulher em perfil lendo um livro sob estrela radiada, com a sigla e o lema abaixo' },
  { id: 'est-18', code: 'EST. 18', title: 'Monograma Entrelaçado', family: 'Selo institucional', note: 'As cinco letras entrelaçadas em uma só torre tipográfica sobre púrpura profundo.', src: media('logo-18.jpg'), alt: 'Monograma entrelaçado das letras SBHCJ em creme sobre fundo vinho, com o nome completo ao lado' },
  { id: 'est-19', code: 'EST. 19', title: 'Árvore da Memória', family: 'Emblema ilustrado', note: 'A árvore gravada une as palavras-raiz do campo — história, cultura, direito, futuros.', src: media('logo-19.jpg'), alt: 'Gravura de árvore frondosa ladeada pelas palavras história, memória, direito, cultura, sociedade e futuros' },
  { id: 'est-20', code: 'EST. 20', title: 'Selo da Balança', family: 'Selo institucional', note: 'Balança sobre livros entre louros: o clássico jurídico em medalhão redondo.', src: media('logo-20.jpg'), alt: 'Selo circular com balança gravada sobre pilha de livros, entre ramos de louro e o nome da sociedade' },
  { id: 'est-21', code: 'EST. 21', title: 'Portal Aberto', family: 'Editorial contemporâneo', note: 'Arcos geométricos em verde e ocre: “conhecer para outros mundos”.', src: media('logo-21.jpg'), alt: 'Marca geométrica de arcos verdes e ocre sob estrela dourada, com o nome da sociedade ao lado' },
  { id: 'est-22', code: 'EST. 22', title: 'Globo & Biblioteca', family: 'Gravura emblemática', note: 'O globo armilar sobre livros: ideias, pessoas, instituições, contextos e sociedade.', src: media('logo-22.jpg'), alt: 'Gravura de globo terrestre sobre pilha de livros, ao lado da sigla e das palavras ideias, pessoas, instituições, contextos e sociedade' },
  { id: 'est-23', code: 'EST. 23', title: 'Azul Marinho', family: 'Sistema tipográfico', note: 'Serifa clara sobre azul profundo, traço dourado: “arquivos vivos, futuros possíveis”.', src: media('logo-23.jpg'), alt: 'Sigla SBHCJ em serifa creme sobre fundo azul-marinho com traço dourado e lema em itálico' },
  { id: 'est-24', code: 'EST. 24', title: 'Janela para a Paisagem', family: 'Emblema ilustrado', note: 'O arco românico abre sobre montanhas e estrela: “passados em diálogo com o amanhã”.', src: media('logo-24.jpg'), alt: 'Gravura de arco com colunas abrindo para paisagem montanhosa sob estrela, com o nome da sociedade ao lado' },
  { id: 'est-25', code: 'EST. 25', title: 'Moldura Vinho', family: 'Sistema tipográfico', note: 'A sigla em vinho dentro da moldura recortada: história, cultura, direito, sociedade.', src: media('logo-25.jpg'), alt: 'Sigla SBHCJ em serifa vinho dentro de moldura linear, com as palavras história, cultura, direito e sociedade' },
  { id: 'est-26', code: 'EST. 26', title: 'Monograma Estrelado', family: 'Selo institucional', note: 'O S emoldurando a estrela sobre verde profundo: “memórias que orientam”.', src: media('logo-26.jpg'), alt: 'Letra S em creme com estrela dourada em seu vão, sobre fundo verde-escuro, com sigla e lema abaixo' },
]
