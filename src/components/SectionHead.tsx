type SectionHeadProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHead({ eyebrow, title, subtitle, centered = false }: SectionHeadProps) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-salvia mb-2.5 text-xs font-bold tracking-[0.16em] uppercase">{eyebrow}</p>
      <h2 className="font-display text-verde-oscuro text-3xl leading-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="text-tinta-suave mt-3 text-base leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
