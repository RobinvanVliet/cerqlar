import { RichTextEntry } from '../types'
import { SECTION_NAMES } from '../../const/index'

export default function mapRichTextSection ({
  content
}) {
  return content && {
    sectionType: SECTION_NAMES.RICH_TEXT_SECTION,
    content
  }
}
