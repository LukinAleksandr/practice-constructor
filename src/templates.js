import { row, col, css } from './utils'
const title = (block) => {
  const { tag, styles } = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

const text = (block) =>
  row(col(`<p>${block.value}</p>`), css(block.options.styles))

const columns = (block) =>
  row(block.value.map(col).join(''), css(block.options.styles))

const image = (block) => {
  const { imageStyles: is, alt = '', styles } = block.options
  return row(
    col(`<img  src="${block.value}" alt="${alt}" style="${css(is)}"/>`),
    css(styles)
  )
}

export const templates = { title, text, image, columns }
