<h1>🧠 Agente de IA — Lógica Proposicional (CPC)</h1>

<p>
Este projeto é uma aplicação web capaz de <strong>traduzir sentenças em Linguagem Natural (PT-BR) para Lógica Proposicional (CPC)</strong> 
e também converter <strong>CPC → Linguagem Natural</strong>.  
A solução utiliza um <strong>dicionário fixo</strong> aliado à integração com IA via HuggingFace.
</p>

<hr>

<h2>🎨 Front-end</h2>

<h3>🛠️ Tecnologias Utilizadas</h3>
<ul>
  <li>HTML</li>
  <li>Tailwind CSS</li>
  <li>JavaScript</li>
</ul>

<h3>📂 Arquitetura de Arquivos</h3>
<pre><code>index.html
</code></pre>

<h3>💡 Como funciona</h3>
<p>
A interface foi construída com Tailwind CSS e dividida em duas seções principais:
</p>
<ul>
  <li><strong>Mapeamento de proposições</strong> (1 obrigatória + 2 opcionais)</li>
  <li><strong>Entrada do argumento ou fórmula</strong></li>
</ul>

<p>O usuário pode alternar entre dois modos:</p>
<ul>
  <li><strong>Linguagem Natural → CPC</strong></li>
  <li><strong>CPC → Linguagem Natural</strong></li>
</ul>

<p>
O script seleciona automaticamente o <strong>prompt adequado</strong> na requisição enviada ao backend, 
definindo o tipo de tradução.
</p>

<p>
Há também um botão de <strong>exemplo automático</strong>, que demonstra ao usuário o preenchimento correto dos campos.
</p>

<hr>

<h2>⚙️ Back-end</h2>

<h3>🛠️ Tecnologias Utilizadas</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>HuggingFace API</li>
</ul>

<h3>📂 Arquitetura de Arquivos</h3>
<pre><code>server.js
api/chat.js
services/cpcConverter.js
services/huggingFaceService.js
Contexto.txt
</code></pre>

<h3>💡 Como funciona</h3>
<p>
O projeto inicia via <code>node server.js</code>, configurando o Express, CORS e inicializando o servidor.
</p>

<p>O fluxo funciona assim:</p>
<ul>
  <li>A rota <strong>/api/chat</strong> recebe a propriedade <code>question</code> do corpo da requisição.</li>
  <li>Essa informação é enviada ao serviço de comunicação com a IA.</li>
  <li><strong>huggingFaceService.js</strong> processa a chamada usando token e o contexto definido.</li>
  <li>A resposta retorna ao frontend em formato JSON.</li>
</ul>

<hr>

<h2>🧠 Estratégia de Tradução</h2>

<p>
O projeto usa um <strong>dicionário fixo</strong> para converter expressões NL ↔ CPC.
</p>

<h3>🔁 Regras Básicas</h3>
<ul>
  <li><strong>"e"</strong> → <code>^</code></li>
  <li><strong>"ou"</strong> → <code>v</code></li>
  <li><strong>"se ... então"</strong> → <code>-&gt;</code></li>
</ul>

<hr>

<h2>🧩 Exemplos</h2>

<h3>✔️ CPC → Linguagem Natural</h3>
<pre><code>P = João estuda;
Q = Maria trabalha;
R = Pedro passa;
Traduza: (P^Q)-&gt;R
</code></pre>

<p><strong>Output:</strong><br>
<i>Se João estuda e Maria trabalha, então Pedro passa.</i>
</p>

<h3>✔️ Linguagem Natural → CPC</h3>
<pre><code>X = Rafael é filósofo;
J = João é médico;
Y = Lucas é doutor;
Traduza: Se Rafael é filósofo e João é médico, então Lucas é doutor.
</code></pre>

<p><strong>Output:</strong><br>
<code>(X^J)-&gt;Y</code>
</p>

<hr>

<h2>⚠️ Limitações</h2>
<p>
A estratégia baseada em dicionário fixa limita o dinamismo e obriga o usuário a escrever frases em formatos específicos.
</p>

<hr>

<h2>🚀 Possibilidades de Melhoria</h2>
<ul>
  <li>Adicionar <strong>campos dinâmicos</strong> para mais proposições</li>
  <li>Permitir fórmulas mais complexas</li>
  <li>Substituir regras fixas por semântica avançada</li>
</ul>

<hr>

<h2>🔗 Demonstração e Repositórios</h2>

<p>🎥 <strong>Vídeo de Demonstração:</strong><br>
<a href="https://www.youtube.com/watch?v=h6z3tSNHMu0">https://www.youtube.com/watch?v=h6z3tSNHMu0</a>
</p>

<p>🌐 <strong>Site para Teste:</strong><br>
<i>Acessar Aplicação</i>
</p>

<p>💻 <strong>Frontend:</strong><br>
<i>GitHub - FrontEnd</i>
</p>

<p>⚙️ <strong>Backend:</strong><br>
<i>GitHub - BackendChat</i>
</p>
