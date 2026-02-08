interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ children, className = '', dark = false }: SectionProps) {
  return (
    <section
      className={`py-16 sm:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
