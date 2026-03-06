/**
 * Aplica cor em texto (suporta gradientes)
 */
export function applyTextColor(color?: string): React.CSSProperties {
  if (!color) return {};
  
  // Transparente explícito
  if (color === 'transparent') {
    return { 
      color: 'transparent',
      WebkitTextFillColor: 'unset',
    };
  }
  
  // Se for gradiente, usar backgroundImage para criar efeito de texto gradiente
  if (color.includes('gradient')) {
    return {
      backgroundImage: color,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
    };
  }
  
  // Cor sólida normal - usar apenas color, SEM limpar backgroundImage
  // (isso permite que o background do elemento permaneça intacto)
  return { 
    color,
    // Limpar apenas as propriedades de gradiente de TEXTO
    backgroundClip: 'unset',
    WebkitBackgroundClip: 'unset',
    WebkitTextFillColor: 'unset',
  };
}

/**
 * Aplica cor de fundo (suporta gradientes)
 */
export function applyBackgroundColor(color?: string): React.CSSProperties {
  if (!color) return {};
  
  // Se for gradiente, usar backgroundImage
  if (color.includes('gradient')) {
    return { 
      backgroundImage: color,
      backgroundColor: 'transparent', // Limpar backgroundColor para evitar conflito
    };
  }
  
  // Cor sólida: usar backgroundColor e limpar backgroundImage
  return { 
    backgroundColor: color,
    backgroundImage: 'none',
  };
}

/**
 * Aplica cor de borda (apenas cores sólidas)
 * Para gradientes, use border-image diretamente no componente
 */
export function applyBorderColor(color?: string): React.CSSProperties {
  if (!color || color.includes('gradient')) return {};
  
  // Apenas cor sólida
  return { 
    borderColor: color,
  };
}

/**
 * Aplica todos os estilos de um FieldStyle
 */
export function applyFieldStyle(
  style: any, 
  previewMode: 'desktop' | 'mobile' = 'desktop',
  options: {
    includeColor?: boolean;
    includeBackground?: boolean;
    includeBorder?: boolean;
  } = {}
): React.CSSProperties {
  const {
    includeColor = true,
    includeBackground = true,
    includeBorder = true,
  } = options;
  
  const fontSize = previewMode === 'mobile' && style.fontSizeMobile 
    ? style.fontSizeMobile 
    : style.fontSize;
  
  return {
    fontFamily: style.fontFamily,
    fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    textTransform: style.textTransform as any,
    letterSpacing: style.letterSpacing,
    ...(includeColor && style.color ? applyTextColor(style.color) : {}),
    ...(includeBackground && style.backgroundColor ? applyBackgroundColor(style.backgroundColor) : {}),
    ...(includeBorder && style.borderColor ? applyBorderColor(style.borderColor) : {}),
    ...(style.borderRadius ? { borderRadius: style.borderRadius } : {}),
    ...(style.borderWidth ? { borderWidth: style.borderWidth } : {}),
  };
}