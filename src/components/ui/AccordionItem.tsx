'use client';

import { useState, useId } from 'react';

interface Props {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function AccordionItem({ title, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '0.75rem',
      background: 'var(--background)',
      overflow: 'hidden',
    }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={contentId}
        style={{
          width: '100%',
          padding: '1rem 1.25rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--primary)',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span>{title}</span>
        <span aria-hidden="true" style={{
          transition: 'transform 0.2s ease',
          transform: open ? 'rotate(180deg)' : 'none',
          color: 'var(--secondary)',
        }}>▾</span>
      </button>
      <div
        id={contentId}
        hidden={!open}
        style={{
          padding: '0 1.25rem 1.25rem',
          fontSize: '0.95rem',
          lineHeight: 1.65,
          color: 'var(--secondary)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
