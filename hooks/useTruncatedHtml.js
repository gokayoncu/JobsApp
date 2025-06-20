import { useMemo } from 'react';
import { decode } from 'html-entities';

function useTruncatedHtml(htmlString, maxLength = 100) {
  const stripHtml = html => {
    if (!html) {
      return '';
    }
    return html.replace(/<[^>]*>?/gm, '');
  };

  const truncateText = (text, maxLen) => {
    if (text.length <= maxLen) {
      return text;
    }
    return text.slice(0, maxLen) + '...';
  };

  const processedText = useMemo(() => {
    const plainText = decode(stripHtml(htmlString));
    return truncateText(plainText, maxLength);
  }, [htmlString, maxLength]);

  return processedText;
}

export default useTruncatedHtml;
