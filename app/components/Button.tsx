import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
}

export default function Button({ href, children, variant = 'primary', external = false }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md transition-colors';

  const variantStyles = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50',
  };

  const className = `${baseStyles} ${variantStyles[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
