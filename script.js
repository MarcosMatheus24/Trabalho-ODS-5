
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-content'));


    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

  
    document.getElementById('tab-' + tabId).classList.add('active-content');


    event.currentTarget.classList.add('active');


    if (tabId === 'calculadora') {
        calcularDesigualdade();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const dadosSetores = {
    ti: { nome: "Tecnologia / TI", masc: 9800, brechaPct: 22 },
    saude: { nome: "Saúde", masc: 8200, brechaPct: 28 },
    educacao: { nome: "Educação", masc: 4800, brechaPct: 14 },
    financas: { nome: "Finanças / Banco", masc: 12500, brechaPct: 31 },
    industria: { nome: "Indústria", masc: 5500, brechaPct: 25 },
    comercio: { nome: "Comércio / Varejo", masc: 3800, brechaPct: 19 },
    juridica: { nome: "Área Jurídica", masc: 14000, brechaPct: 34 },
    midia: { nome: "Comunicação / Mídia", masc: 6200, brechaPct: 24 }
};

const multiplicadorExperiencia = {
    junior: 0.55,
    pleno: 0.78,
    senior: 1.00,
    especialista: 1.35
};

function calcularDesigualdade() {
    const setorChave = document.getElementById('setor').value;
    const expChave = document.getElementById('experiencia').value;

    const dadosBase = dadosSetores[setorChave];
    const fatorExp = multiplicadorExperiencia[expChave];

    const salarioMasc = dadosBase.masc * fatorExp;
    const brechaPct = dadosBase.brechaPct;
    const salarioFem = salarioMasc * (1 - (brechaPct / 100));
    
    const diferencaMensal = salarioMasc - salarioFem;
    const perdaAnual = diferencaMensal * 12;
    const impactoCarreira = perdaAnual * 35;

    document.getElementById('res-sal-masc').textContent = formatarMoeda(salarioMasc);
    document.getElementById('res-sal-fem').textContent = formatarMoeda(salarioFem);
    document.getElementById('res-gap-pct').textContent = brechaPct + "%";
    document.getElementById('res-dif-mensal').textContent = formatarMoeda(diferencaMensal);
    document.getElementById('res-perda-anual').textContent = formatarMoeda(perdaAnual);
    document.getElementById('res-impacto-carreira').textContent = formatarMoeda(impactoCarreira);

    document.getElementById('bar-masc').style.width = '100%';
    const pctBarraFem = (salarioFem / salarioMasc) * 100;
    document.getElementById('bar-fem').style.width = pctBarraFem + '%';

    document.getElementById('calculator-result').classList.remove('hidden');
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function toggleAccordion(element) {
    const isOpen = element.classList.contains('open');

    const allAccordions = document.querySelectorAll('.witness-accordion');
    allAccordions.forEach(acc => acc.classList.remove('open'));

    if (!isOpen) {
        element.classList.add('open');
    }
}