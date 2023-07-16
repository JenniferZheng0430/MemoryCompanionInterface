import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.331511 13.4021C-0.136749 13.9094 -0.105125 14.7002 0.402146 15.1685C0.909417 15.6368 1.70024 15.6051 2.1685 15.0979L8.16863 8.59787C8.61064 8.11904 8.61064 7.38098 8.16863 6.90215L2.1685 0.402146C1.70024 -0.105125 0.909417 -0.136749 0.402146 0.331511C-0.105125 0.799771 -0.136749 1.5906 0.331511 2.09787L5.54899 7.75001L0.331511 13.4021Z'
      fill='#0584FE'
    />
  </svg>
);

const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
