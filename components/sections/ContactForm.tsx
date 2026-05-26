'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send } from '@/components/ui/Icons';
import { whatsappLink } from '@/lib/whatsapp';
import { cn } from '@/lib/cn';

type FormState = {
  nome: string;
  email: string;
  empresa: string;
  mensagem: string;
};

const initial: FormState = {
  nome: '',
  email: '',
  empresa: '',
  mensagem: '',
};

/**
 * Simple contact form. No backend — submission opens WhatsApp with the
 * user-typed data pre-filled. This was the client's explicit preference.
 */
export function ContactForm() {
  const [data, setData] = useState<FormState>(initial);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Olá Akira, vim pelo site.`,
      ``,
      `Nome: ${data.nome}`,
      `Email: ${data.email}`,
      `Empresa: ${data.empresa || '—'}`,
      ``,
      `Mensagem:`,
      data.mensagem,
    ].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  const isValid = data.nome.trim() && data.email.trim() && data.mensagem.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Field
        label="Nome"
        name="nome"
        value={data.nome}
        onChange={handleChange}
        required
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={data.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <Field
        label="Empresa"
        name="empresa"
        value={data.empresa}
        onChange={handleChange}
        autoComplete="organization"
      />
      <Field
        label="Mensagem"
        name="mensagem"
        value={data.mensagem}
        onChange={handleChange}
        required
        textarea
      />

      <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isValid}
          className={cn(!isValid && 'pointer-events-none')}
          icon={<Send />}
        >
          Enviar pelo WhatsApp
        </Button>
        <p className="text-xs uppercase tracking-[0.18em] text-mist">
          Respondemos em até 24h.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  autoComplete?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
  textarea,
  autoComplete,
}: FieldProps) {
  const common =
    'mt-3 block w-full rounded-none border-0 border-b border-line bg-transparent py-3 text-base font-light text-bone outline-none transition-colors placeholder:text-mist/60 focus:border-bone';

  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-mist">
        {label}
        {required && <span className="ml-1 text-bone">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={5}
          className={`${common} resize-none`}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          autoComplete={autoComplete}
          className={common}
        />
      )}
    </label>
  );
}
