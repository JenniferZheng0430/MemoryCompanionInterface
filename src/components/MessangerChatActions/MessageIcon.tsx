import { memo, SVGProps } from 'react';

const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 155 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect y={0.751236} width={154.385} height={23.5172} rx={11.7586} fill='black' fillOpacity={0.06} />
  </svg>
);

const Memo = memo(MessageIcon);
export { Memo as MessageIcon };
