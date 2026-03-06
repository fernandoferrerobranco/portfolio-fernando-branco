#!/usr/bin/env python3
import re

# Lê o arquivo
with open('/src/lib/storage.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define os novos campos
new_fields = """    bigNumber7Value: '15K+',
    bigNumber7Label_pt: 'Leads\\\\nGerados',
    bigNumber7Label_en: 'Leads\\\\nGenerated',
    bigNumber8Value: '300%',
    bigNumber8Label_pt: 'ROI\\\\nMédio',
    bigNumber8Label_en: 'Average\\\\nROI',
    bigNumber9Value: '50+',
    bigNumber9Label_pt: 'Campanhas\\\\nLançadas',
    bigNumber9Label_en: 'Campaigns\\\\nLaunched',
"""

# Encontra a posição logo após bigNumber6Label_en
pattern = r"(bigNumber6Label_en: 'Companies\\\\nLed',\n    )"
replacement = r"\1" + new_fields

content = re.sub(pattern, replacement, content)

# Escreve o arquivo
with open('/src/lib/storage.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Arquivo atualizado com sucesso!")
