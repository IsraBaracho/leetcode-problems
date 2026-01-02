# leetcode-ts

Projeto simples em TypeScript para resolver problemas do LeetCode.

Como usar

1. Instalar dependências:

```powershell
npm install
```

2. Executar um problema (exemplo `twoSum`):

```powershell
npm run start -- twoSum
```

ou usando variável de ambiente:

```powershell
$env:PROBLEM='twoSum'; npm run start
```

Estrutura

- `src/problems/<nome>.ts` — cada problema deve exportar uma função `run()`.
- `src/index.ts` — runner que importa dinamicamente o arquivo do problema e executa `run()`.

OBS: Após editar/gerar novos problemas, você pode usar `npm run build` para compilar em `dist/`.
