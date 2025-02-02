import type { BytemdViewerContext } from 'bytemd'
import type { VFile } from 'vfile'
import type { IHighlightKeys, IThemeKeys } from './themes'

export interface IViewerContext extends BytemdViewerContext {
  file: VFile & {
    frontmatter: {
      theme?: IThemeKeys
      highlight?: IHighlightKeys
    }
  }
}
