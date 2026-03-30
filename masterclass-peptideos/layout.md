# Especificação de Layout - Masterclass Peptídeos

## Linguagem Visual Base
- **Cores Principais:** Background `#07090F`, Surface `#10141F`, Primary Neon Teal `#00F2FE`, Secondary Blue `#4facfe`.
- **Textos:** Main Text `#F3F4F6`, Muted Text `#9CA3AF`.
- **Gradiente:** Linear Gradient de `#00F2FE` para `#4facfe`.
- **Tipografia:** Heading `Sora` (pesos 300, 400, 600, 700, 800) + Body `Inter` (pesos 400, 500, 600). Vibes: Moderno/Tech com alta legibilidade clínica.

---

## Seção 1: Hero (Ao Vivo)

### Arquétipo e Constraints
- Arquétipo: Split Vertical (50/50 na primeira dobra)
- Constraints: Imagem Fullbleed, Formulário Glassmorphism
- Justificativa: Garante que o usuário veja a proposta de valor e o formulário de conversão imediatamente, sem rolar a página, mantendo a figura de autoridade (Dr. Fernando) impactante e isolada no lado direito.

### Conteúdo
- Título: Aprenda como otimizar metabolismo, energia e performance com uma abordagem atualizada sobre Peptídeos
- Sub: Aula AO VIVO e direta ao ponto sobre o equilíbrio do organismo...
- Investimento, Aviso e Formulário Compacto.

### Layout
- Altura: `100vh` (min-height `600px`), alinhado ao centro.
- Esquerda (50%): Textos e Formulário Compacto. Padding de `5% 8%`.
- Direita (50%): Imagem sangrando topo, base e direita (Fullbleed). Blending lateral com background.

### Tipografia
- Badge Live: `Sora`, `0.75rem`, weight `600`, letter-spacing `1px`.
- Headline: `Sora`, `clamp(1.8rem, 3.5vw, 2.5rem)`, weight `700`, line-height `1.15`, letter-spacing `-1px`. Palavra "Peptídeos" com text-gradient.
- Subheadline: `Inter`, `1rem`, color `#9CA3AF`, weight `400`.

### Cores
- Badge Live: Texto `#FF4444`, BG `rgba(255, 0, 0, 0.1)`.
- Input BG: `rgba(255, 255, 255, 0.03)` com border `rgba(255, 255, 255, 0.1)`.
- Botão CTA: Fundo `linear-gradient(135deg, #00F2FE, #4facfe)`, texto `#07090f`.

### Elementos Visuais
- Pulse Dot animado no badge Live.
- Imagem direita coverizada.

### Animações
- Botão Hover: `translateY(-4px)` e shadow com blur gigante.

### Responsividade
- `< 992px`: Imagem sobe para topo (min-height `45vh`), e form logo abaixo quebrando o row em col.

---

## Seção 2: Conexão com a Dor

### Arquétipo e Constraints
- Arquétipo: Split Assimétrico (Cerca de 40% Visual / 60% Texto)
- Constraints: Floating Cards (badges animados), Hover Scale
- Justificativa: Quebra o padrão 50/50. O apelo visual lúdico da molécula em 3D prende o olhar enquanto a dor é pontuada duramente do lado direito.

### Conteúdo
- Você sente que o seu nível de energia não é mais o mesmo? + 3 pontos de dor + Conclusão explicativa.

### Layout
- Padding: `120px 0`. Align `center`.
- Grid: 1fr 1fr assimetricamente calibrado com `gap: 80px`.
- Composição 3D (`4/5` aspect ratio) à esquerda. Listas flutuantes esparsas à direita.

### Tipografia
- Título Seção: `Sora`, `clamp(2rem, 3vw, 2.5rem)`, weight `700`, line-height `1.2`. "energia" gradiente.
- Itens de Lista: `Inter`, `1.1rem`, strong words em `#FFF`.

### Cores
- Fundo local com Background Blur e radial `rgba(0, 242, 254, 0.05)` (Blob de luz fantasma atrás da foto).

### Animações
- Floating Badges em loop de Float Y infinito (6s ease-in-out).
- Hover Comp 3D: Imagem front sobe; trás desce, atrelados com transition cubic-bezier.

### Responsividade
- `< 992px`: Empilha em eixo Y. Textos e imagens ficam no centro. Badges flutuantes ocultos/reposicionados.

---

## Seção 3: O Que Você Vai Aprender

### Arquétipo e Constraints
- Arquétipo: Bento Box
- Constraints: Glassmorphism, Hover Reveal
- Justificativa: Células de variados tamanhos formam ritimos assíncronos não triviais. Um card maior toma protagonismo (Fundamentos) enquanto cards satélites cuidam dos tópicos adicionais.

### Conteúdo
- Estratégias modernas voltadas para performance + 3 itens. E aviso educacional abaixo.

### Layout
- Grid CSS puro. Bento box assimétrico.
- Card 1: `grid-column: span 2`, `grid-row: span 2` (Principal).
- Card 2 e 3: Ocupam 1 célula cada na borda do grid.
- Gap: `24px` Padding `100px 0`.

### Tipografia
- Heading 2: `Sora` `2.5rem` negrito centralizado.
- Internas Bento: `Sora` `1.25rem` para call, e `Inter` `1rem` para descritivos.

### Cores
- Surfaces Célula: `#10141F`, borda subtil opaca.

### Animações
- Fade-up via data-aos 100ms de stagger timing.
- Hover em células: o stroke (border-color) ilumina com `rgba(0, 242, 254, 0.4)`, transition sutil `400ms`.

---

## Seção 4: Benefícios Transformadores

### Arquétipo e Constraints
- Arquétipo: Broken Grid
- Constraints: Absolute Positioning dos Numerais, Path Animations Simétricos
- Justificativa: Para transmitir transformação contínua de "desgaste" para "sucesso". As formas acompanham zigue-zagues.

### Conteúdo
- Após essa aula, você terá clareza absoluta sobre: 4 itens principais listados na copy.

### Layout
- Padrão em zig-zag vertical. Cada bloco tem paddings que os tiram do eixo alinhado.
- Numerais `01`, `02`, `03` posicionados `absolute` nas extremidades, enormes (120px) recortados só stroke.

### Tipografia
- Números massivos Absolute: `Sora`, `120px`, weight `800`, cor borda (Texto com Stroke: `1px solid rgba(255,255,255,0.05)`).
- Blocos Text: `Sora` `1.15rem`, weight `500`.

### Interatividade
- Scroll Linking: Uma linha conector fluorescente percorre de um bloco ao outro dependendo de onde está a leitura da page.

---

## Seção 5: Para Quem É

### Arquétipo e Constraints
- Arquétipo: Sticky Element (Título fixo, conteúdo rolando)
- Constraints: Scroll Triggered, Text com Gradiente
- Justificativa: Prende a atenção numa declaração forte à esquerda enquanto as identificações dos públicos sobem revelando as personas certas à direita.

### Layout
- Altura do section em blocos maiores para forçar Scroll (`min-height: 150vh`).
- Container dividido `1fr 1fr`. Esquerda fixa (`position: sticky`), Direita fluida.

### Tipografia e Cores
- Lado fixo com um `Sora` gordo, text color preenchido em branco, e palavras de impacto em Ciano `#00F2FE`.

### Interatividade
- Cards ou bullets da direita entram com `fade-up-left` progressivo baseando na viewport.

---

## Seção 6: Sobre o Especialista

### Arquétipo e Constraints
- Arquétipo: Split com Overlap
- Constraints: Imagem Duotone, Overlap Elements
- Justificativa: Forte peso de marca e de doutor. O fato do texto "invadir" a foto fisicamente dá requinte de revistas editoriais.

### Layout
- Foto no container esquerda (`width 50%`). Caixa de texto de conteúdo ocupa os outros `50%` e empurra `-80px` o padding esquerdo invadindo a tela da fotografia.

### Tipografia e Tratamento Fotográfico
- Foto é processada por CSS para virar Azul/Ciano Night (`filter: sepia(100) hue-rotate(...) contrast(...)` misto).
- Textbox tem Glassmorphism intenso para borrar sob as extremidades sobrepostas da fotografia.

---

## Seção 7: Quebra de Preço (Valor Percebido)

### Arquétipo e Constraints
- Arquétipo: Spotlight
- Constraints: Container Narrow, Gradiente Pulse Loop
- Justificativa: Isolamento total para que nada concorra de espaço ou cores com o preço atrativo do Ticket.

### Layout e Cores
- Centralizado completo. `max-width: 600px`.
- Reflexo de cor central ciano vazado radial (`box-shadow` e radial gradient no backdrop) sob uma caixa central escura suave.

### Tipografia
- Número "R$ 97,00" gigantesco: `Sora`, `4rem`, Bold 800, Text Highlight Gradiente brilhante.

---

## Seção 8: Escassez, FAQ e Fechamento

### Arquétipo e Constraints
- Arquétipo: Text as Image (para Escassez) / Modular Reveal on Demand (FAQ)
- Constraints: Reveal Content, Headline Full Width
- Justificativa: Consolida CTAs e objeções restando de modo fluído e limpo sem o usuário sair navegando muito.

### Elementos e Layout
- **Escassez:** Barra de alerta horizontal que quebra toda leitura preta e joga impacto visual de vermelho `rgba(255, 170, 0, 0.1)` (laranja-alerta). Label "Vagas Limitadas".
- **FAQ:** Perguntas funcionam por linhas limpas (border bottom transparente, sem caixas de "acordion estilo anos 2010"). A expansão por CSS Grid transaciona 0fr -> 1fr suavemente ao clicar abrindo.
- **Fechamento Final:** "Últimas vagas", layout hero center bottom. Botão neon master idêntico ao de topo finalizando.
