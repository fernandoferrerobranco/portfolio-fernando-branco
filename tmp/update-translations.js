const fs = require('fs');
const path = '/src/app/data/translations.ts';

// Lê o arquivo
let content = fs.readFileSync(path, 'utf8');

// Encontra e substitui a seção PT
content = content.replace(
  /label6: 'Empresas\\nLideradas',\n      },/,
  `label6: 'Empresas\\nLideradas',
        label7: 'Leads\\nGerados',
        label8: 'ROI\\nMédio',
        label9: 'Campanhas\\nLançadas',
      },`
);

// Encontra e substitui a seção EN
content = content.replace(
  /label6: 'Companies\\nLed',\n      },/,
  `label6: 'Companies\\nLed',
        label7: 'Leads\\nGenerated',
        label8: 'Average\\nROI',
        label9: 'Campaigns\\nLaunched',
      },`
);

// Escreve o arquivo
fs.writeFileSync(path, content, 'utf8');
console.log('✅ Arquivo atualizado com sucesso!');
