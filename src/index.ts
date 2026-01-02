const problem = process.argv[2] || process.env.PROBLEM;

if (!problem) {
  console.error('Informe o nome do problema como argumento. Ex: npm run start -- twoSum');
  process.exit(1);
}

async function runProblem(name: string) {
  try {
    const mod = await import(`./problems/${name}`);
    if (mod && typeof mod.run === 'function') {
      await mod.run();
    } else {
      console.error(`O módulo ./problems/${name} não exporta uma função run()`);
    }
  } catch (err) {
    console.error('Erro ao carregar/executar o problema:', err);
  }
}

runProblem(problem);
