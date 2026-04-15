const responsiveWidths = [640, 960, 1280, 1600]
const defaultSizes =
  '(max-width: 767px) calc(100vw - 38px), (max-width: 1240px) calc(100vw - 74px), 1120px'
const assetRoot = '../assets/site-content'

export const createImageFactory = (imageModules) => {
  const imageUrl = (assetPath) => imageModules[`${assetRoot}/${assetPath}.webp`]

  return ({ path, alt, width, height, sizes = defaultSizes }) => {
    const originalSrc = imageUrl(path)

    const candidates = responsiveWidths
      .filter((candidateWidth) => candidateWidth < width)
      .map((candidateWidth) => ({
        width: candidateWidth,
        src: imageUrl(`${path}-${candidateWidth}`),
      }))
      .filter((candidate) => candidate.src)

    if (originalSrc && width <= responsiveWidths.at(-1)) {
      candidates.push({ width, src: originalSrc })
    }

    if (!candidates.length) {
      if (!originalSrc) {
        throw new Error(`Missing image asset: ${path}.webp`)
      }

      candidates.push({ width, src: originalSrc })
    }

    const fallbackSrc = candidates.at(-1)?.src ?? originalSrc
    const srcset = candidates.map((candidate) => `${candidate.src} ${candidate.width}w`).join(', ')

    return { src: fallbackSrc, srcset, sizes, alt, width, height }
  }
}
