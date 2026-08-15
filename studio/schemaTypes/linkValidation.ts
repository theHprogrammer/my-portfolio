const allowedProtocols = new Set(['http:', 'https:', 'mailto:', 'tel:'])

export const validateLink = (value: string | undefined): true | string => {
  if (!value) {
    return true
  }

  if (/^\/(?!\/)/.test(value)) {
    return true
  }

  try {
    return allowedProtocols.has(new URL(value).protocol)
      ? true
      : 'Use uma rota interna ou um link http, https, mailto ou tel.'
  } catch {
    return 'Informe uma rota interna ou URL válida.'
  }
}
