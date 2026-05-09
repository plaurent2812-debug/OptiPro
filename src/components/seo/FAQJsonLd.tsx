import { buildFaqJsonLd, type FaqItem } from '@/data/faq';
import { safeJsonLd } from '@/lib/json-ld';

interface Props {
  faq: FaqItem[];
}

export default function FAQJsonLd({ faq }: Props) {
  return (
    <script type="application/ld+json">
      {safeJsonLd(buildFaqJsonLd(faq))}
    </script>
  );
}
