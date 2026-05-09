import { buildFaqJsonLd, type FaqItem } from '@/data/faq';

interface Props {
  faq: FaqItem[];
}

export default function FAQJsonLd({ faq }: Props) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(buildFaqJsonLd(faq))}
    </script>
  );
}
